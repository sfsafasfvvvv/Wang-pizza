import React, { useState } from 'react';
import './Pizza.css'; // 引入样式文件

// 披萨组件
const Pizza = ({ 名称, 单价, 图片路径 }) => {
  const [数量, 设置数量] = useState(1);
  const [总价, 设置总价] = useState(单价);

  // 增加数量
  const 增加数量 = () => {
    设置数量(数量 + 1);
    设置总价(总价 + 单价);
  };

  // 减少数量
  const 减少数量 = () => {
    if (数量 > 1) {
      设置数量(数量 - 1);
      设置总价(总价 - 单价);
    }
  };

  return (
    <div className="pizza-item">
      <img src={图片路径} alt={名称} className="pizza-image" />
      <h2>{名称}</h2>
      <p>Base Cost: ${单价}</p>
      <p>Total Cost: ${总价.toFixed(2)}</p>
      <p>Quantity: {数量}</p>
      <div className="button-group">
        <button onClick={减少数量}>-</button>
        <button onClick={增加数量}>+</button>
      </div>
    </div>
  );
};

export default Pizza;