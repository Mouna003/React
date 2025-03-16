import React from 'react';
import Person from './components/Person';
import './App.css';

function App() {
  return (
    <div className="app">
      <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Person firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    </div>
  );
}

export default App;
