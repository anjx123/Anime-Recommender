import React, { useEffect } from 'react';
import "./InfoCard.css"
import { SearchContext } from '../context/search';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { maxHeight } from '@mui/system';

function InfoCard(props) {
    const id = props.anime.node.id
    const onClickHandler = () => {
        window.open("https://myanimelist.net/anime/".concat(id))

    }
    var title = props.anime.node.title === null ? "": props.anime.node.title;
    title = title.length > 20 ? `${title.substring(0, 20)}...`: title;
    const imageUrl = props.anime.node.main_picture.large;
    var synopsis = props.anime.node.synopsis === null ? "": props.anime.node.synopsis;
    synopsis = synopsis.length > 50 ? `${synopsis.substring(0, 50)}...`: synopsis;

    return (
        <div className="InfoCard-container">
            <div className="InfoCard-set">
                <Paper className="animeCard__paper">
                <img 
                    src={imageUrl} 
                    alt={title}
                    style={{ maxHeight: 300}}
                    height="400"
                />
                

                <Typography variant="h5" component="h2"> 
                    {title} 
                </Typography>

                <Typography variant="body2" component="h2" paragraph={true}>
                    {synopsis}
                </Typography>
                <Button variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
                    Visit Website
                </Button>

                </Paper> 

        
            </div>
        </div>
    )
}

export default InfoCard;