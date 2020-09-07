import React from 'react';
import './App.css';
import Home from '../src/Components/Home/Home';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation} from "react-router-dom";
import Header from './Components/Header/Header';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {
   
  
  
  return (

      <div>
       
        <Router>

          <Switch>
             
            <Route path="/Home">
                <Header></Header>
                <Home/> 
            </Route>  

            
            <Route path="/PostDetail/:id">
              <PostDetail></PostDetail>
            </Route>


            <Route exact path="/">
                <Header></Header>
                <Home />
            </Route>

            <Route path="*">
              <NoMatch/>

            </Route>

          </Switch>

        </Router>
      </div>
     
    );
}

export default App;
