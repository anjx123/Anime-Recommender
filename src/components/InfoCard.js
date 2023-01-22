import React, { useEffect } from 'react';
import "./InfoCard.css"
import { SearchContext } from '../context/search';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { maxHeight } from '@mui/system';

function InfoCard(props) {
    const title = props.anime.node.title;
    const imageUrl = props.anime.node.main_picture.large;
    var synopsis = props.anime.node.synopsis === null ? "": props.anime.node.synopsis;
    synopsis = synopsis.length > 50 ? `${synopsis.substring(0, 50)}...`: synopsis;

    return (
        <div className="InfoCard-container">
            <div className="InfoCard-set">
                <Paper>
                <img 
                    src={imageUrl} 
                    alt={title}
                    style={{ maxHeight: 300}}
                    height="400"
                />
                </Paper>

                <Typography variant="h5" component="h2"> {title} </Typography>
                <Typography variant="body2" component="h2" paragraph={true}>
                    {synopsis}
                </Typography>

        
            </div>
        </div>
    )
}

export default InfoCard;