import React from 'react';

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: this.props.name,
          status: this.props.status,
          gender: this.props.gender,  
        };
        this.handleFiltering = this.handleFiltering.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleFiltering(event){
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

    
      handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.status, this.state.gender, this.state.name)
      }
    
      render() {
        return (
          <form className="form-group row justify-content-center " onSubmit={this.handleSubmit.bind(this)}>
              <input 
                type="text"
                id="search"
                className="form-control"
                placeholder="Search"
                name="name"
                value={this.state.name}                
                onChange={this.handleFiltering}
                />
              <select 
                className="custom-select"
                id="status"
                name="status"
                value={this.state.status} 
                onChange={this.handleFiltering}>
                <option value="">status</option>
                <option value="alive">alive</option>
                <option value="dead">dead</option>
                <option value="unknown">unknown</option>
              </select>
              <select 
                className="custom-select"
                id="gender"
                name="gender"
                value={this.state.gender} 
                onChange={this.handleFiltering}>
                <option value="">gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
              </select>
              <input className="btn btn-primary" type="submit" value="Go"/>
          </form>
        );
      }      
}

export default Filter;