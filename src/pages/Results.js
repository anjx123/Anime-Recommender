import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/search';

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
        <div>
            {(dataExists && 'Data Exists') || 'There are no search results'};
        </div>
    );
};

export default Results;