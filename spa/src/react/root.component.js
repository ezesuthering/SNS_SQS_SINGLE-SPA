import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.addEventListener('albumOnEdit', () => {
      this.setState({name: window.spa_store.albumOnEdit});
    })
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.spa_store.albums.pushAlbum(this.state.name);
    this.setState({name: ''});
  }

	render() {
		return (
			<div>
        <h1>React</h1>
				<form onSubmit={this.handleSubmit}>
          <label>
            <span>Album Name:</span>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit">Create</button>
				</form>
			</div>
		);
	}
}

export default App