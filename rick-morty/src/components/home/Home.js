import React from 'react';
import RMCard from '../rmcard/RMCard';
import {Link, useLocation} from 'react-router-dom';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';



class Home extends React.Component{
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        characters: [],
        isLoading: true,
        selectedStatus: '',
        selectedGender: '',     
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

      handleSubmit(status,gender,name){
        this.setState({
          isLoading: true,
          selectedStatus: status,
          selectedGender: gender,
        })
        fetch(`https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}&name=${name}`)
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoading: false,
              characters: json.results,
            })
          })
      }


  
      render(){        
        var {isLoading, characters} = this.state;
        if(isLoading){
          return <div>
            <Loader/>
            </div>
        } else{      
          return(
          <section>
            {document.querySelector("#home").classList.add("selected")}
            <Filter 
              name={this.state.enteredName}
              gender={this.state.selectedGender}
              status={this.state.selectedStatus}
              handleSubmit={this.handleSubmit}/>
            <div className="App">
                {characters.map((ch) => (
                  <Link to={`/${ch.id}`}>
                    <RMCard key={ch.id} className="Big"  id= {ch.id} name={ch.name} img= {ch.image} />
                  </Link>
                ))}
            </div>
          </section>
          )
        }
    }
  }
  

  export default Home;