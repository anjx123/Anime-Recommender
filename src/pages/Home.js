import React, { useContext, useEffect , useRef , useState } from 'react';
import { SearchContext } from '../context/search';
import { useHistory } from 'react-router-dom';
import InfoCard from '../components/InfoCard';
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
            
           
        });
    };

    return (
        // <div className="Home-container">
        <Grid container className="Home-container" direction="column" justifyContent="center" alignContent="center" alignItems="center">
            
            <Grid container justifyContent="center" alignItems="center">

                <Grid item className="TextField">
                    Input: {input} | Output: {output}
                </Grid>

                <Grid item md={2}>
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

            <Grid item>
                    <h2>Username: {input}</h2>
                    <div className="InfoCards">

                        {/* <InfoCard
                            title="Anime 1"
                            description="This is test anime #1"
                            imgsrc="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            imgalt="alt1"
                        />

                        <InfoCard
                            title="Anime 2"
                            description="This is test anime #2"
                            imgsrc="https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
                            imgalt="alt2"
                        /> */}

                    </div>
            </Grid>
  
        </Grid>
        // </div>
    );
};

export default Home;