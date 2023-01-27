import React, { useEffect, useContext, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { SearchContext } from '../context/search';
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
       
    }, [search]);

    return (
        <div className="Results-container"> 

            <div className="Results-columns">

                <div className="col-left">
                    {/* <div id="col-left-sticky">
                        <div class="sticky-sidebar">
                            <h2>Top 10 Recommended Anime</h2>
                            <ol>
                                <li><a href="#tag" class="to-top">Acceptable Use</a></li>
                            </ol>
                            <p><a href="#top" class="to-top">To Top</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="col-right">
                    {(dataExists && <AnimeList data={search.profileData} />) || <div className="no-results"> There are no search results for that username. Please try again. </div>}
                </div>
            </div>



            
        </div>
    );
};

export default Results;