import React from 'react';
import './App.css';
import Squirrel from './Components/Squirrel.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squirrels: []
    }
  }
  
// add a componentDidMount lifecycle method to fetch data from the API
componentDidMount = () => {
    let appToken = 'esu1QrBEdWYvVrQ0KsIRFhfm5'
    let query = `https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=${appToken}&running=true`
    fetch(query)
      .then(response => response.json())
      .then(data => {
        this.setState(state => {
            state.squirrels = data
            return state
        })
      })
      .catch(e => 
        console.log(e)
      )
  }

  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <h2>How many Squirrels? {this.state.squirrels.length}</h2>
        {this.state.squirrels.map(squirrel => {
            return <Squirrel name = {squirrel.unique_squirrel_id}
                             age = {squirrel.age}
                             color = {squirrel.color}
                             running = {squirrel.running}
                             eating = {squirrel.eating}
                             approaches = {squirrel.approaches}
                             climbing = {squirrel.climbing}
                   />    
        })}
      </div>
    );
  }
}

export default App;
