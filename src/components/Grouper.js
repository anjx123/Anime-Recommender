import React from 'react';
import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'


var los='';
var thing=0;
var grouped_anime=[[]];

const Grouper = (props) => {

    let acc = [0, 0, ""]
    // let acc be id,  rating, genre
    let id = 0
    let rating = 1
    let genre = 2
    let temp = []
    let rsf = []

    for (let i = 0; i < props.data.data.length; i++) {
        if ( acc[rating] === props.data.data[i].list_status.score) {
            temp = temp.concat([props.data.data[i]]);
            acc = [acc[id], props.data.data[i].list_status.score, acc[genre]];
            console.log(acc)
            
        } else {
            rsf = rsf.concat([temp]);
            temp = [props.data.data[i]];
            
            acc = [acc[id], props.data.data[i].list_status.score, acc[genre]];
            console.log(acc)
            // console.log(rsf);
        }   
    }

            rsf =  rsf.concat([temp]);
            rsf.shift();

        //  console.log(props.data.data[1]);
        //  console.log(rsf.push(2))
        //  console.log(props.data.data[1].list_status.score)
          console.log(rsf);

     return (

        <div>
            amongus
        </div>

     )

}

export default Grouper;