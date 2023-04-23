import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origins: [],
      selectedOrigin: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/origins')
      .then(response => {
        this.setState({ origins: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <label htmlFor="origin">Select Origin:</label>
        <select id="origin" onChange={(e) => this.setState({selectedOrigin: e.target.value})}>
          <option value="">All</option>
          {this.state.origins.map(origin => <option key={origin.id} value={origin.name}>{origin.name}</option>)}
        </select>
      </div>
    );
  }
}

export default Sidebar;
