import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import RMCardDetail from './components/rmcard/RMCardDetail';
import About from './components/about/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';

class App extends React.Component{
  
    render(){      
        return(
          <Router>
            <Header text="The Rick and Morty" />
              <Switch>
                
                  <Route path="/" exact component={Home}/>
                  <Route path="/About" exact component={About}/>
                  <Route path="/:id" exact component={RMCardDetail}/>
              </Switch>
          </Router>
        )
      }
  }



export default App;
