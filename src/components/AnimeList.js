import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'

const AnimeList = (props) => {
    return (
        <ImageList variant="standard">
        {props.data.map((anime) => (
           <InfoCard key={anime.node.id} anime={anime}/> 
           ))}
         </ImageList>
    );
};

export default AnimeList;