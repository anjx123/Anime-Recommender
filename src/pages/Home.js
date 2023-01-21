import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../context/search';

const Home = () => {
    const search = useContext(SearchContext);

    useEffect(() => {
        search.search('Naruto').then((data) => {
            console.log(data);
        });

    }, [search]);

    return (
        <div>
            Home
        </div>
    );
};

export default Home;