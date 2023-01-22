import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'

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

    {los = props.data.map((anime) => (
        anime.list_status.score
    ))}

    {createTags(relative(percentage(los, grouper(los))), animGrouper(props.data))} 


    return (
        <ImageList>

            {props.data.map((anime) => (
                <InfoCard key={anime.node.id} data={props.data} anime={anime}/> 
            ))}

         </ImageList>
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
    console.log(list2 + "l3")
    for (let i = 1; i<list2.length; i++) {
        list3[i] = list3[i - 1] + list2[i]
    }

    console.log(list3)
    return list3
}

function createTags(lon, loa) {
    let rsf = [];
    console.log(lon + "cT");
    console.log(loa + "cT")

    for (let i = 0; i < lon.length; i++) {
        rsf = rsf.concat(tagger(lon[i], loa[i]))
    }
    console.log("createTag check")
    return rsf
}

function tagger(n, loa) {
    let rsf = [];

    for (let i = 0; i < loa.length; i++) {
        rsf = rsf.concat([ craftTag(n, loa[i].node.genres, loa[i].list_status.score)])
    }
    console.log("tagger check")
    return rsf
}

function craftTag(n, log, s) {
    let rsf = [];

    for (let i = 0; i < log.length; i++) {
        rsf = rsf.concat([[log[i], s / n] ])
        console.log("craftTag check")
    }
    return rsf
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

            rsf = rsf.concat([temp]);
            rsf.shift();


        //  console.log(props.data.data[1]);
        //  console.log(rsf.push(2))
        //  console.log(props.data.data[1].list_status.score)

        console.log(rsf);
        return rsf

}
export default AnimeList;