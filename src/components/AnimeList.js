import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'
import Grouper from './Grouper';
import { Group } from '@mui/icons-material';

var list1 = [];
var los = "";
var log = "";


// const AnimeList = (props) => {
//     return (
//         <ImageList>
//         {props.data.map((anime) => (
//            <InfoCard key={anime.node.id} data={props.data} anime={anime}/> 
//            ))}
//          </ImageList>
//     );
// };

const AnimeList = (props) => {

    

    return (
        <ImageList>
            {props.data.map((anime) => (<InfoCard key={anime.node.id} anime={anime}/>))}
        </ImageList>
        
        // <ImageList variant="standard">     
        //     <Grouper data={props}/>
           
        //     {los = props.data.map((anime) => (
        //         anime.list_status.score
        //     ))}

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

    console.log(list3)
    return list3
}

export default AnimeList;
