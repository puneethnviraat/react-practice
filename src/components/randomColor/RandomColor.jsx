import { useState, useEffect } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#ffffff');
  const [type, setType] = useState('hexa');
  const hStyle = { 'text-shadow': '#FC0 1px 0 10px' };
  const changetype = (inputType) => {
    setType(inputType);
  };
  useEffect(
    (type) => {
      if (type === 'hexa') {
        generateHexColor();
      } else {
        generateRGBColor();
      }
    },
    [type]
  );

  const generateHexColor = () => {
    var HexColor = '#';
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let index = 0; index < 6; index++) {
      let value = hex[Math.floor(Math.random() * hex.length)];
      HexColor += value;
      setColor(HexColor);
    }
  };

  const generateRGBColor = () => {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    setColor(`RGB(${R}, ${G}, ${B})`);
  };

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <br></br>
      <h3>Generate your favorite random color</h3>
      <br></br>
      <button onClick={() => changetype('hexa')}>Use HEXA code</button>
      <button onClick={() => changetype('rgb')}>Use RGB code</button>
      <button onClick={type === 'hexa' ? generateHexColor : generateRGBColor}>
        Generate color
      </button>
      <br></br>
      <br></br>
      <h3 style={hStyle}> {type === 'hexa' ? 'Hex Code' : 'RGB Code'}</h3>
      <br></br>
      <br></br> <br></br>
      <h2 style={hStyle}>{color}</h2>
    </div>
  );
};

export default RandomColor;
