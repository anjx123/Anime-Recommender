import { Grid, Typography } from '@mui/material';
import './PageHeader.css'
import { Link, Route, useHistory } from 'react-router-dom';
import Home from '../pages/Home';

import React, { useContext, useEffect , useRef , useState } from 'react';
import { SearchContext } from '../context/search';
import InfoCard from '../components/InfoCard';
import { FormControl, Input, IconButton, Icon } from '@mui/material';
import { Search } from '@mui/icons-material';


function PageHeader(props) {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/');
        window.location.reload(false);
    }

    const search = useContext(SearchContext);
    // const history = useHistory();
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
        <div className="PageHeader-container" id="navbar">
            
            <div className="header">

                <div className="home-section">
                    
                    <div className="header-image">
                        <Link to="/" variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" height="30"/>
                        </Link> 
                    </div>

                    <Typography cvariant='h6' noWrap>
                        <Link to="/" variant="body1" style={{marginBottom: 0}, {textDecoration: "none"}} onClick={onClickHandler}>
                        <div className="home-text">HOME</div> 
                        </Link> 
                    </Typography> 
                                
                </div>
                
                <div className="search-section">
                    <form className="home__form-header">
                        <FormControl type="submit">
                            <div className="form-items--header">
                                <Input className="input-test" style={{color: 'white'}} ref={inputRef} placeholder="Search for your profile..." value={input} onChange={(event) => setInput(event.target.value)}/>
                                <IconButton variants="contained" color="primary" type="submit" disabled={!input} onClick={handleSearch}>
                                    <Search/>
                                </IconButton>
                            </div>
                        </FormControl>
                    </form>
                </div>
               
            </div>

        </div>
    )
}

export default PageHeader;