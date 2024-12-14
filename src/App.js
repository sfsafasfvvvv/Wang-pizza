import React from 'react';
import Pizza from './components/Pizza';
import './App.css';
import pineapplePizza from './pineapple-pizza.jpg';

function App() {
  return (
    <div className="App">
      <h1>Pizza Menu</h1>
      <Pizza name="Pineapple Pizza" price={12.99} imagePath={pineapplePizza} />
    </div>
  );
}

export default App;
