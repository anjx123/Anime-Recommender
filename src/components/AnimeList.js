import React, {useState, useEffect} from 'react';

import { ImageList, Typography } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'
import { Group } from '@mui/icons-material';

import Tagger from './Tagger';

var list1 = [];
var los = "";
var log = "";
var info = [];

const ALLGENRE = `https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=500&fields=synopsis,genres`
const SPRING2023 = `https://api.myanimelist.net/v2/anime/season/2023/spring?sort=anime_score&limit=500&fields=synopsis,genres`
const WINTER2023 = `https://api.myanimelist.net/v2/anime/season/2023/winter?sort=anime_score&limit=500&fields=synopsis,genres`

const RecommendedCategory = ALLGENRE




const AnimeList = (props) => {
    const [currentRec, setCurrentRec]=useState([]);
    const [rankings, setRankings] = useState(null);
    const [clear, setClear]= useState(false);

    const recAmount = 20;
    {los = props.data.map((anime) => (
        anime.list_status.score
    ))}
    const d = props.data;
    const g = grouper(los);
    const p = percentage(los, g);

    const r = relative(p);
    const ag = animGrouper(d);


    let test=[];
    const handleSearch = async () => {
        if (rankings) { // Make sure rankings is not null
          let smth = findAnime(simplifyList(simpleList(crTags(r, ag))), rankings).sort(([a, b], [c, d]) => c - a || b - d).slice(0, recAmount);
          setCurrentRec(smth);
        }
      };

      useEffect(() => {
        if (rankings) { // Make sure rankings is not null
          handleSearch();
        }
      }, [rankings]);

      useEffect(() => {
        fetch(RecommendedCategory, {
          method: 'GET',
          headers: {'X-MAL-CLIENT-ID': 'fbff9778d6f0ac20c5a30f6af55f207e'}
        })
        .then((response) => response.json())
        .then((data) => setRankings(data)); // Use the state setter function here
      }, []);
    

    
    

    return (

        <ImageList cols={4} >     
            
           {/* <button onClick={handleSearch} variant="h1">

            <Typography>
                Recommendations
            </Typography>
           </button> */}

            {currentRec.map((anime, index) => {
                
                return <InfoCard key={anime[1].node.id} data={test} anime={anime} index={index}/> 
            })}


        </ImageList>

       
    );
};


function findAnime(lot, rec) {
    let rsf =[];
   console.log(lot)
    for (let i = 0; i < rec.data.length; i++) {
        rsf = rsf.concat([setScore(rec.data[i], lot)]);
    }
    console.log(rsf)
  
    return rsf
}

function setScore(anime, lot) {
    let rsf = [0, anime]

    for (let i = 0; i < anime.node.genres.length; i++) {
        
        rsf = [tagScoring(anime.node.genres[i].id, lot) + rsf[0], anime]
        
    }
    
    return rsf
}

function tagScoring(id, lot) {
    
    for (let i = 0; i < lot.length; i++) {
        if (id === lot[i][0].id) {
            return lot[i][1]
        }
    }
    return 0;
}


function simpleList(lot) {
      
    let rsf =[];
    for (let i = 0; i < lot.length; i++) {
   
        rsf = rsf.concat(lot[i])
    }
    
    return rsf
}

function simplifyList(lot) {
    let rsf =[];
    for (let i = 0; i < lot.length; i++) {
       
        if (rsf.map((n) => (n[0].id)).includes(lot[i][0].id)) {
           
            rsf = adder(lot[i], rsf)
           
            
        } else {
            rsf = rsf.concat([lot[i]])
        }
    }
 
    return rsf
}

function adder(t, lot) {
    let rsf=[];
    for (let i = 0; i < lot.length; i++) {
        if (t[0].id === lot[i][0].id) {
            
        rsf = rsf.concat([[lot[i][0], t[1] + lot[i][1] ]]);
        
        } else {
            rsf = rsf.concat([lot[i]])
        }
    }
   
    return rsf;
}

function grouper(los) {
    let prev = "";
    let j = -1;
    var list2 = [];

    for (let i = 0; i<los.length; i++) {
        if (prev != los[i]) {
            j++;
            list2[j] = [los[i]];
            prev = los[i];

        } else {
            list2[j] = list2[j].concat([los[i]]);
        }
    }
    return list2
}

function animGrouper(info) {

    let acc = [0, 0, ""]
    // let acc be id,  rating, genre
    let id = 0
    let rating = 1
    let genre = 2
    let temp = []
    let rsf = []

    for (let i = 0; i < info.length; i++) {
        if ( acc[rating] === info[i].list_status.score) {
            temp = temp.concat([info[i]]);
            acc = [acc[id], info[i].list_status.score, acc[genre]];
            
            
        } else {
            rsf = rsf.concat([temp]);
            temp = [info[i]];
            
            acc = [acc[id], info[i].list_status.score, acc[genre]];
     
            
        }   
    }

            rsf =  rsf.concat([temp]);
            rsf.shift();
            
          
       
        return rsf

}

function percentage(los, list2) {

    return list2.map((lambda) => (
        lambda.length/los.length
    ));
}

function relative(list2) {
    let list3 = [];
    list3[0] = list2[0];

    for (let i = 1; i<list2.length; i++) {
        list3[i] = list3[i - 1] + list2[i]
    }

    return list3
}

function crTags(lon, loa) {
    var rsf = [];
    console.log(lon);
    console.log(loa);

    for (let i = 0; i < loa.length; i++) {
  
        rsf = rsf.concat( tagger(lon[i], loa[i]) );
  
    };

    return rsf;
};

function tagger(n, loa) {
    let acc = [];

    for (let i = 0; i < loa.length; i++) {
       
        acc = acc.concat([ craftTag(n, loa[i].node.genres, loa[i].list_status.score)]);
    }

    return acc;
};

function craftTag(n, log, s) {
    let ddd = [];

    for (let i = 0; i < log.length; i++) {
        ddd = ddd.concat([ [log[i], s / n] ]);
     
    }
    return ddd;
};




   // https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=500&fields=genres
  // https://api.myanimelist.net/v2/anime/season/2023/spring?sort=anime_score&limit=500&fields=synopsis,genres
  // https://api.myanimelist.net/v2/anime/season/2023/winter?sort=anime_score&limit=500&fields=synopsis,genres


export default AnimeList;
