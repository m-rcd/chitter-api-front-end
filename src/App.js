import React from 'react';
import './App.css';
import Peep from './components/peeps';
import NewPeep from './components/new_peep';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Chitter </p>
        </header>
        <div>
          <NewPeep />
        </div>
        <div>
          <Peep />
        </div>
      </div>
    );
  }
}
