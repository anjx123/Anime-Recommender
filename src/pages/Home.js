import React, { useContext, useEffect , useRef , useState } from 'react';
import { SearchContext } from '../context/search';
import './Home.css';
import { useHistory } from 'react-router-dom';



const Home = () => {
    const search = useContext(SearchContext);


    const [inVal, setInVal] = useState(); // ideally, variable that holds the input value(s?)

    const inputRef = useRef(null);

    const [updated, setUpdated] = useState('');

    const [input, setInput] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
    };

    const handleClick = () => {
        // 👇 "inputRef.current.value" is input value
        setUpdated(inputRef.current.value);
        setInVal(inputRef.current.value);
        search.search(input).then((data) => {
            console.log(data);
            search.setData(data.results);
           
        });
    };



    return (
        <div className="Home-container">

            Home
            <div className="TextField">

            </div>

            <div className="input-test">
                <input
                ref={inputRef}
                placeholder='Search for your profile...'
                value={input}
                onChange={(event) => setInput(event.target.value)}
                type="text"
                id="message"
                name="input-value-for-search"
                />

                <h2>Username: {updated}</h2>

                <button onClick={handleClick}>ENTER</button>
                
                {/*simply call {inVal} to access the input value (after the button has been pressed)*/}
                <p>{inVal}</p>

            </div>

        </div>
    );
};

export default Home;