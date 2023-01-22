import React, { useEffect, useContext, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { SearchContext } from '../context/search';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import './Results.css'

const Results = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    useEffect(() => {
        if (search.profileData === undefined || search.profileData.length === 0) {
            try {
                if (JSON.parse(localStorage.getItem('myData')).length === 0) {
                    search.setData(["empty"])
                    setDataExists(false);
                } else {
                    search.setData(JSON.parse(localStorage.getItem('myData')));
                    setDataExists(true);
                }
                          
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        console.log(search.profileData);
    }, [search]);

    return (
        <div className="Box"> 
        {(dataExists && <AnimeList data={search.profileData} />) || <Typography variant="h2"> 'There are no search results' </Typography>}
        </div>
    );
};

export default Results;