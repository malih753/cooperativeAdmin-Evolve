// components/ButtonComponent.js
import React from 'react';

const ButtonTable = ({ buttons }) => (
    <div>
      {buttons.map((button, index) => (
        <button key={index} onClick={button.onClick}>
          {button.label}
        </button>
      ))}
    </div>
  );

export default ButtonTable;
