import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'
import { Group } from '@mui/icons-material';
import Button from '@mui/material';

import Tagger from './Tagger';

var list1 = [];
var los = "";
var log = "";
var info = [];
var rankings = "";


const AnimeList = (props) => {
    getRanking();
    {los = props.data.map((anime) => (
        anime.list_status.score
    ))}
    const d = props.data;
    const g = grouper(los);
    const p = percentage(los, g);
    const r = relative(p);
    const ag = animGrouper(d);
    var fa = [];

    console.log(r + "aaa")
    console.log(ag + "bbb")

    const handleSearch = (event) => {
       fa = findAnime(simplifyList(simpleList(crTags(r, ag))), rankings).sort(([a, b], [c, d]) => c - a || b - d);
    }
    




    // artificially added in from master branch 10:32am
    // {los = props.data.map((anime) => (
    //     anime.list_status.score
    // ))}
    // const d = props.data;
    // const g = grouper(los);
    // const p = percentage(los, g);
    // const r = relative(p);
    // const ag = animGrouper(d);

    // console.log(r + "aaa")
    // console.log(ag + "bbb")
    
    

    return (

        <ImageList variant="standard">     
            
        
           
           <button onClick={handleSearch}>
            test
           </button>

        // THE 3 LINES OF CODE BELOW ALLOW FOR BASIC FUNCTIONALITY OF CREATING A LIST OF ANIME ON A PERSON'S PROFILE
        <ImageList>
            {props.data.map((anime) => (<InfoCard key={anime.node.id} anime={anime}/>))}
        </ImageList>

        // // FOLLOWING CODE BLOCK IS ARTICIALLY MERGED. 10:33am 
         <ImageList variant="standard">     

            
             <Tagger ag={ag} r={r}/>

             {/* {log = props.data.map((anime) => (
                 anime.node.genres[0].name
             ))} */}


           {fa.map((anime) => (

           <InfoCard key={anime[1].node.id} data={fa} anime={anime}/> 


             {/* {help(los, props.data)} */}

             {/* {props.data.map((anime) => (
                 anime.list_status.score
             ))},
             {props.data.map((anime) => (
                 anime.node.genres[0].name
             ))} */}

         </ImageList>

        
        // EVERYTHING ELSE COMMENTED OUT BELOW IS OLD CODE FROM EARLIER ITERATIONS

        // <ImageList variant="standard">     
        //     <Grouper data={props}/>
           
        //     {los = props.data.map((anime) => (
        //         anime.list_status.score
        //     ))}
        
        <ImageList variant="standard">     
            
            <Tagger ag={ag} r={r}/>
          

        //     {/* {log = props.data.map((anime) => (
        //         anime.node.genres[0].name
        //     ))} */}


        //     {relative(percentage(los, grouper(los)))}



        //     {/* {help(los, props.data)} */}

        //     {/* {props.data.map((anime) => (
        //         anime.list_status.score
        //     ))},
        //     {props.data.map((anime) => (
        //         anime.node.genres[0].name
        //     ))} */}

        //  </ImageList>
    );
};


function findAnime(lot, rec) {
    let rsf =[];
    console.log(rec);
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
            console.log(rsf + "before")
            rsf = adder(lot[i], rsf)
           
            
        } else {
            rsf = rsf.concat([lot[i]])
        }
    }
    console.log(rsf)
    return rsf
}

function adder(t, lot) {
    let rsf=[];
    for (let i = 0; i < lot.length; i++) {
        if (t[0].id === lot[i][0].id) {
            lot.shift()
        
            
        rsf = rsf.concat([[lot[i][0], t[1] + lot[i][1] ]]);
        
        } else {
            rsf = rsf.concat([lot[i]])
        }
    }
    console.log(rsf)
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

    console.log(info)
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
            console.log(acc)
            
        } else {
            rsf = rsf.concat([temp]);
            temp = [info[i]];
            
            acc = [acc[id], info[i].list_status.score, acc[genre]];
            console.log(acc)
            
        }   
    }

            rsf =  rsf.concat([temp]);
            rsf.shift();
            

        //  console.log(props.data.data[1]);
        //  console.log(rsf.push(2))
        //  console.log(props.data.data[1].list_status.score)
          
        console.log(rsf);
        return rsf

}

function percentage(los, list2) {

    console.log(list2.map((lambda) => (
        lambda.length/los.length
    )))

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

    console.log("ccehechhe") //UPDATED THIS CONSOLE LOG FROM OUTPUTTING list3 to "ccehechhe" IN ACCORDANCE WITH MASTER BRANCH 10:36AM

    return list3
}

function crTags(lon, loa) {
    var rsf = [];
    console.log(lon);
    console.log(loa);

    for (let i = 0; i < loa.length; i++) {
        console.log(lon[i]);
        console.log(loa[i]);
        rsf = rsf.concat( tagger(lon[i], loa[i]) );
        console.log(rsf);
    };
    console.log(rsf);
    return rsf;
};

function tagger(n, loa) {
    let acc = [];

    for (let i = 0; i < loa.length; i++) {
        console.log(loa[i])
        acc = acc.concat([ craftTag(n, loa[i].node.genres, loa[i].list_status.score)]);
    }
    console.log("tagger check");
    return acc;
};

function craftTag(n, log, s) {
    let ddd = [];

    for (let i = 0; i < log.length; i++) {
        ddd = ddd.concat([ [log[i], s / n] ]);
        console.log("craftTag check");
    }
    return ddd;
};

function getRanking() {
    return fetch(
        `https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=50&fields=genres,synopsis,`, {
        method: 'GET',
        headers: {'X-MAL-CLIENT-ID': 'fbff9778d6f0ac20c5a30f6af55f207e'}
      })
      .then((response) => response.json())
      .then((data) => rankings = data);
}


export default AnimeList;
