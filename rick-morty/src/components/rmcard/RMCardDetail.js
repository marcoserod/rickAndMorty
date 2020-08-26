import React from 'react';
import RMCard from './RMCard';
import './RMCard.css';
import Loader from '../loader/Loader';

class RMCardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: {},
      id: this.props.match.params.id,
    };
  }

  async componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoading: false,
          item: json,
          origin: json.origin,
        });
      });
  }

  render() {
    const i = this.state.item;
    const l = this.state.isLoading;
    if (l) {
      return <Loader />;
    } else {
      return (
        <section
          style={{ margin: '0rem' }}
          className="container-fluid row justify-content-center align-items-start"
        >
          <RMCard
            className="My-Card-Detail"
            id={i.id}
            name={i.name}
            img={i.image}
          />

          <div style={{ margin: '1rem', minHeight: '376px' }} clasName="card">
            <ul
              style={{ height: '376px' }}
              class="list-group list-group-flush d-flex align-items-between"
            >
              <li class="list-group-item">id: {i.id}</li>
              <li class="list-group-item">status: {i.status}</li>
              <li class="list-group-item">species: {i.species}</li>
              <li class="list-group-item">type: {i.type}</li>
              <li class="list-group-item">gender: {i.gender}</li>
              <li class="list-group-item">origin: {i.origin.name}</li>
              <li class="list-group-item">location: {i.location.name}</li>
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default RMCardDetail;
