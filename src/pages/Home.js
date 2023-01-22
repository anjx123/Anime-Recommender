import React, { useContext, useEffect , useRef , useState } from 'react';
import { SearchContext } from '../context/search';
import { useHistory } from 'react-router-dom';
import InfoCard from '../components/InfoCard';
import './Home.css';
import { FormControl, Input, IconButton, Grid, Icon } from '@mui/material';
import { Search } from '@mui/icons-material';

import Paper from '@mui/material/Paper';


const Home = () => {
    const search = useContext(SearchContext);
    const history = useHistory();
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const inputRef = useRef(null);

    const handleSearch = (event) => {
        event.preventDefault();
        setOutput(inputRef.current.value)
        search.search(input).then((data) => {
            console.log(data);
            search.setData(data.data);
            localStorage.setItem('myData', JSON.stringify(data.data));
            history.push('/results');
            window.location.reload(false);
           
        });
    };

    
    return (
        // <div className="Home-container">
        <Grid container className="Home-container" direction="column" justifyContent="center" alignContent="center" alignItems="center">
            
            <Grid item>
                {/* <Paper> */}
                <form className="home__form-main">
                <FormControl type="submit">
                    <div className="form-items--main">
                        <div className="form-items--main-name">
                            <h2>ANIPROFINDER</h2>
                        </div>
                        
                        <div className="form-items--main-search">
                            <Input className="input-test" ref={inputRef} placeholder="Search for your profile..." value={input} onChange={(event) => setInput(event.target.value)}/>
                            <IconButton variants="contained" color="primary" type="submit" disabled={!input} onClick={handleSearch}>
                                <Search/>
                            </IconButton>
                        </div>
                        
                    </div>
                </FormControl>
                </form>
                {/* </Paper> */}
            </Grid>

            {/* <Grid item>
                    <h2>Username: {input}</h2>                
            </Grid> */}

        </Grid>
        );
};

export default Home;