import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'
import { Group } from '@mui/icons-material';

import Tagger from './Tagger';

var list1 = [];
var los = "";
var log = "";
var info = [];


const AnimeList = (props) => {
    {los = props.data.map((anime) => (
        anime.list_status.score
    ))}
    const d = props.data;
    const g = grouper(los);
    const p = percentage(los, g);
    const r = relative(p);
    const ag = animGrouper(d);

    console.log(r + "aaa")
    console.log(ag + "bbb")
    




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
        // THE 3 LINES OF CODE BELOW ALLOW FOR BASIC FUNCTIONALITY OF CREATING A LIST OF ANIME ON A PERSON'S PROFILE
        <ImageList>
            {props.data.map((anime) => (<InfoCard key={anime.node.id} anime={anime}/>))}
        </ImageList>

        // // // FOLLOWING CODE BLOCK IS ARTICIALLY MERGED. 10:33am 
        //  <ImageList variant="standard">     
            
        //      <Tagger ag={ag} r={r}/>

        //      {/* {log = props.data.map((anime) => (
        //          anime.node.genres[0].name
        //      ))} */}

        //      {/* {help(los, props.data)} */}

        //      {/* {props.data.map((anime) => (
        //          anime.list_status.score
        //      ))},
        //      {props.data.map((anime) => (
        //          anime.node.genres[0].name
        //      ))} */}

        //  </ImageList>

        
        // // EVERYTHING ELSE COMMENTED OUT BELOW IS OLD CODE FROM EARLIER ITERATIONS

        // // <ImageList variant="standard">     
        // //     <Grouper data={props}/>
           
        // //     {los = props.data.map((anime) => (
        // //         anime.list_status.score
        // //     ))}
        
        // <ImageList variant="standard">     
            
        //     <Tagger ag={ag} r={r}/>
          

        // //     {/* {log = props.data.map((anime) => (
        // //         anime.node.genres[0].name
        // //     ))} */}


        // //     {relative(percentage(los, grouper(los)))}


        // //     {/* {help(los, props.data)} */}

        // //     {/* {props.data.map((anime) => (
        // //         anime.list_status.score
        // //     ))},
        // //     {props.data.map((anime) => (
        // //         anime.node.genres[0].name
        // //     ))} */}

        // //  </ImageList>
    );
};

function combiner(los, loa) {
    for (let i = 0; i<los.length; i++) {
        list1[i] = [los[i], loa[i]]
    }
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
            console.log(acc +"adas")
            
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



export default AnimeList;
