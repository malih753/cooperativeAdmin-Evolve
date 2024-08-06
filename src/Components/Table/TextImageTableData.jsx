// components/TextImageComponent.js
import React from 'react';

const TextImageTableData = ({ src, alt, text }) => (
    <div style={{ display: 'flex', alignItems: 'center' }} className='imag'>
      <img src={src} alt={alt} style={{marginRight: '10px' }} />
      <span>{text}</span>
    </div>
  );

export default TextImageTableData;
