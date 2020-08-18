import React, {Component} from 'react';
import './RMCard.css';



  class RMCard extends Component {
      render(){
          return(
            <div className="card My-Card text-white">
              <img className="card-img-top" src={this.props.img} alt={this.props.name}/>
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
              </div>              
            </div>
          ) 
      };
  }

  export default RMCard;


