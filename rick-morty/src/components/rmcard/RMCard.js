import React, { Component } from 'react';
import './RMCard.css';

class RMCard extends Component {
  render() {
    return (
      <div
        style={{
          width: '18.75rem',
        }}
        className="card My-Card text-white"
      >
        <img
          loading="lazy"
          className="card-img-top"
          src={this.props.img}
          alt={this.props.name}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
        </div>
      </div>
    );
  }
}

export default RMCard;
