import React from 'react';
import RMCard from './RMCard'

import './App.css';

class App extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      characters: [],
      isLoading: true,
    }
  }
  
  componentDidMount(){
    fetch(`https://rickandmortyapi.com/api/character/${[...Array(494).keys()]}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          characters: json,
        }
       
        )
      })

  }

  

    render(){
      var {isLoading, characters} = this.state;
      console.log(characters);
      if(isLoading){
        return <div>LOADING...</div>
      } else{

      
        return(
          <div className="App">
            {characters.map((ch) => (
              <RMCard id= {ch.id} name={ch.name} img= {ch.image}/>
            ))}
          </div>
        )
      }
  }
}

export default App;
