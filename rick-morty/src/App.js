import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import RMCardDetail from './components/rmcard/RMCardDetail';
import About from './components/about/About';
import 'bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';
import Footer from './components/footer/Footer';

class App extends React.Component{
  
    render(){      
        return(
          <Router>
            <Header text="The Rick and Morty" />
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="route-wrapper"
              >                
                  <Route path="/" exact component={Home}/>
                  <Route path="/About" exact component={About}/>
                  <Route path="/:id" exact component={RMCardDetail}/>
              </AnimatedSwitch>
            <Footer/>
          </Router>
        )
      }
  }



export default App;
