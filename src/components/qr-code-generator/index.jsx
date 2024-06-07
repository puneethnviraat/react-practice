import React, { useState } from 'react';
import './styles.css';

import Button from 'react-bootstrap/Button';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');
  const GenerateQrCode = () => {
    setQrCode(input);
  };
  return (
    <div>
      <h1>QR code generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter your value here"
        />
        <Button
          variant="primary"
          disabled={input && input.trim() !== '' ? false : true}
          onClick={GenerateQrCode}
        >
          Generate
        </Button>
      </div>
      <br></br>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
