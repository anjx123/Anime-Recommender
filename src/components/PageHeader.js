import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import './PageHeader.css'

function PageHeader(props) {
    return (
        <div className="PageHeader-container">
            <div className="header-text">
                <div className="header-image">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" height="30"/>
                </div>
                Home
            </div>
        </div>
    )
}

export default PageHeader;