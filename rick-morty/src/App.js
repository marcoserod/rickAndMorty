import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Header from './components/header/Header'
import RMCardDetail from './components/rmcard/RMCardDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component{

  
    render(){      
        return(
          <Router>
            <Header text="The Rick and Morty" />
              <Route path="/" exact component={Home}/>
              <Route path="/:id" exact component={RMCardDetail}/>
          </Router>
        )
      }
  }



export default App;
