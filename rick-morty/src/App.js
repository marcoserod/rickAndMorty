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
import Results from './components/results/Results';
import { DataProvider } from './contexts/data.context';

class App extends React.Component{
  
    render(){      
        return(
          <Router>
            <DataProvider>
            <Header text="The Rick and Morty" />
              <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="route-wrapper"
              >                
                  <Route exact path="/"  component={Home}/>
                  <Route exact path="/About"  component={About}/>
                  <Route exact path="/search"  component={Results}/>
                  <Route exact path="/:id"  component={RMCardDetail}/>
                  
              </AnimatedSwitch>
            <Footer/>
            </DataProvider>
          </Router>
        )
      }
  }



export default App;
