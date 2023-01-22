import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'
import Grouper from './Grouper';
import { Group } from '@mui/icons-material';

const AnimeList = (props) => {

    

    return (
        

        <ImageList>
            
            <Grouper data={props}/>
           
        {props.data.map((anime) => (
           <InfoCard key={anime.node.id} anime={anime}/> 
           ))}



         </ImageList>
    );
};


export default AnimeList;
