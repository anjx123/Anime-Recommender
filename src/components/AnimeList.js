import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'
import Grouper from './Grouper';
import { Group } from '@mui/icons-material';

var thing=0;
var los="";

const AnimeList = (props) => {

    

    return (
        

        <ImageList>
            
            <Grouper data={props}/>
           
            {los = props.data.map((anime) => (
            [anime.list_status.score, anime.node.title]
        ))}

        {thing = props.data.length}


        {props.data.map((anime) => (
           <InfoCard key={anime.node.id} anime={anime}/> 
           ))}



         </ImageList>
    );
};


export default AnimeList;
