import React from 'react';
import {useState, useEffect} from 'react';
import Posts from '../Posts/Posts'
import './Home.css'

const Home = () => {

    const [titles, setTitles] = useState([]);
    useEffect (() => {
      const url= 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res=>res.json())
        .then(data => setTitles(data))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
            
                
        {/* <h3>Posts: {titles.length}</h3> */}
            <div className="posts">
                {
                  titles.map(title => <Posts title = {title}> </Posts>)
                }
            </div>
        

           

      </header>
        </div>
    );
};

export default Home;