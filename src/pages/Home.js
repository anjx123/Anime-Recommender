import React, { useContext, useEffect , useRef , useState } from 'react';
import { SearchContext } from '../context/search';
import { useHistory } from 'react-router-dom';
import './Home.css';
import { FormControl, Input, IconButton, Grid, Icon } from '@mui/material';
import { Search } from '@mui/icons-material';

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
        <Grid container className="Home-container" direction="column" justify="center" alignContent="center" alignItems="center">
            <Grid item>
                <Grid item className="TextField">
                    Image: {input} and {output}
                </Grid>
                <Grid item>
                   <form className="home__form">
                    <FormControl type="submit">
                        <Input className="input-test" ref={inputRef} placeholder="Search for your profile..." value={input} onChange={(event) => setInput(event.target.value)}/>
                        <IconButton variants="contained" color="primary" type="submit" disabled={!input} onClick={handleSearch}>
                            <Search/>
                        </IconButton>
                    </FormControl>


                   </form>

                </Grid>
            </Grid>
  
        </Grid>
    );
};

export default Home;