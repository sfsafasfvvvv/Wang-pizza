import React from 'react';
import Pizza from './components/Pizza';
import './App.css';
import pineapplePizza from './pineapple-pizza.jpg'; // 导入图片

function App() {
  return (
    <div className="App">
      <h1>Pizza Menu</h1>
      <Pizza 名称="Pineapple Pizza" 单价={12.99} 图片路径={pineapplePizza} />
    </div>
  );
}

export default App;