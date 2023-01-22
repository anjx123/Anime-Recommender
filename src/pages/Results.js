import React, { useEffect, useContext } from 'react';
import { SearchContext } from '../context/search';

const Results = () => {
    const search = useContext(SearchContext);
   
    useEffect(() => {
        console.log(search.profileData);
    }, [search]);

    return (
        <div>
            Results, New results
        </div>
    );
};

export default Results;