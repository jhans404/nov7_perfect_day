import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Card from './Components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "food": "Please select a food",
      "book": "Please select a book",
      "activity": "Please select an activity",
      "show": "Please select a show"
    };
  }
  makeChoice = (type, choice) => {
    this.setState(state => {
      state[type] = choice
      return state
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard food={this.state.food} show={this.state.show} book={this.state.book} activity={this.state.activity}/>
        <div className="card-container">
          <Card type="food" title="French Onion Soup" makeChoice={this.makeChoice} />
          <Card type="food" title="Chilaquiles" makeChoice={this.makeChoice} />
          <Card type="book" title="Magic for Liars" makeChoice={this.makeChoice} />
        </div>
        <button onClick={() => {this.makeChoice("food", "Pizza")}}>Pizza</button>
        <button onClick={() => {this.makeChoice("food", "Tacos")}}>Tacos</button>
        <button onClick={() => {this.makeChoice("activity", "Hiking")}}>Hiking</button>
      </div>
    );
  }
}
export default App;