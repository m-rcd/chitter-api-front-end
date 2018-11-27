import React from 'react';
import './App.css';
import Peep from './components/peeps';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Chitter </p>
        </header>
        <div>
          <Peep />
        </div>
      </div>
    );
  }
}
