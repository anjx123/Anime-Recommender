import React from 'react';

import { ImageList } from '@mui/material';
import InfoCard from './InfoCard';
import './AnimeList.css'

const AnimeList = (props) => {
    return (
        <ImageList>
            {props.data.map((anime) => (<InfoCard key={anime.mal_id} anime={anime}/>))}
         </ImageList>
    );
};

export default AnimeList;