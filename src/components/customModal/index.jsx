import { useState } from 'react';
import Modal from './Modal';
import './styles.css';
const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggeleModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="main-container">
      <h1>This is custom modal example</h1>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && <Modal isOpen={toggeleModal} />}
    </div>
  );
};
export default CustomModal;
