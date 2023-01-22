import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './PageHeader.css'
import { Link, Route, useHistory } from 'react-router-dom';
import Home from '../pages/Home';

function PageHeader(props) {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/');
        window.location.reload(false);
    }
    
    return (
        <div className="PageHeader-container">
            <Link to="/" variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
            <div className="header-text">
                <div className="header-image">
                    
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" height="30"/>
                    
                    
                </div>
                <Typography variant='h6' noWrap>
                Home
                </Typography>
               
            </div>
            </Link>
        </div>
    )
}

export default PageHeader;