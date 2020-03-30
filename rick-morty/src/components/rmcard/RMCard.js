import React, {Component} from 'react';
import './RMCard.css';



  class RMCard extends Component {
      render(){
          return(
            <div className="Card">
              <h1 className="Card-Name">{this.props.name}</h1>
              <div className="Card-Img">
                <img id="img" src={this.props.img} alt={this.props.name}/>
              </div>
            </div>
          ) 
      };
  }

  export default RMCard;


