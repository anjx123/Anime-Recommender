import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/search';

const Results = () => {
    const search = useContext(SearchContext);
   const [dataExists, setDataExists] = useState(true);

    useEffect(() => {
        if (search.profileData === undefined || search.profileData.length === 0) {
            try {
                search.setData(JSON.parse(localStorage.getItem('myData')));
                
                setDataExists(true);
                          
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
        console.log(search.profileData);
    }, [search]);

    return (
        <div>
            {(dataExists && 'Data Exists') || 'Data does not exist'};
        </div>
    );
};

export default Results;