import React from 'react';
import RMCard from '../rmcard/RMCard';
import {Link} from 'react-router-dom';
import RMCardDetail from '../rmcard/RMCardDetail';



class Home extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        characters: [],
        isLoading: true,
      }
    }
    
    componentDidMount(){
      fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoading: false,
            characters: json.results,
            }
          )
        })
      }
  
      render(){
        
        var {isLoading, characters} = this.state;
        console.log("aca")
        console.log(characters);
        if(isLoading){
          return <div>LOADING...</div>
        } else{
  
        
          return(
          <section className="App">
              {characters.map((ch) => (
                <Link to={`/${ch.id}`}>
                  <RMCard className="Big" id= {ch.id} name={ch.name} img= {ch.image} />
                </Link>
              ))}
          </section>
          )
        }
    }
  }
  

  export default Home;