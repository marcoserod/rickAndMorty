import React from "react";
import RMCard from './RMCard'
import './RMCard.css';
import Loader from '../loader/Loader';


class RMCardDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            item: {},
            id: this.props.match.params.id,
        }
      }
      
      async componentDidMount(){
        fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoading: false,
              item: json,
              origin: json.origin
              }
            )
          })
        
        }
        
        
      render(){   
        const i = this.state.item;
        const l = this.state.isLoading;
        if (l){
            return <Loader/>
            } else {
                return(
                
                <section className = "RMCardDetail">
                    
                    <div>
                        <RMCard id= {i.id} name={i.name} img= {i.image}/>
                    </div>
                    
                    <div>
                        <table className = "RMCardDetail-Table">
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>{i.id}</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>{i.name}</td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>{i.status}</td>
                                </tr>
                                <tr>
                                    <td>species</td>
                                    <td>{i.species}</td>
                                </tr>
                                <tr>
                                    <td>type</td>
                                    <td>{i.type}</td>

                                </tr>
                                <tr>
                                    <td>gender</td>
                                    <td>{i.gender}</td>
                                </tr>
                                <tr>
                                    <td>origin</td>
                                    <td>{i.origin.name}</td>
                                </tr>
                                <tr>
                                    <td>location</td>
                                    <td></td>
                                </tr>
                            </tbody>    
                        </table>
                    </div>
                    {document.querySelector("#home").classList.remove("selected")}
                    {document.querySelector("#chdetail").classList.add("selected")}
                </section>
                )
            }
        
      }


}




export default RMCardDetail;