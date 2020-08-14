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
        enteredName: '',
        error: false,
        errorMSG: '',
        }    
      }  
    
    componentDidMount(){
      fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(json => {
          console.log(json);
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
          enteredName: name
        })
        fetch(`https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}&name=${name}`)
          .then(res => 
            {if (res.status !== 200){
              console.log(res.error);
              this.setState({
                error: true,
              })
            }else {
              res.json().then(json => {this.setState({isLoading: false, characters: json.results})})          
        }
      })
    }   

  
      render(){        
        var {isLoading, characters, error, errorMSG} = this.state;
        if(error){
          return (
          <div id="nothingHere">
            <p>No results have been found, please, refresh and try again</p>
          </div>
          )
        }
        if(isLoading){
          return <div>
            <Loader/>
            </div>
        }
        else{      
          return(
          <section className="container-fluid">
            <Filter 
              name={this.state.enteredName}
              gender={this.state.selectedGender}
              status={this.state.selectedStatus}
              handleSubmit={this.handleSubmit}/>
            <div className="row justify-content-around">
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