// App.js
import React, { useState } from 'react';
import TransferForm from './screens/TransferForm';
import Modal from './screens/Modal';
import './screens/style.css';

const App = () => {
  const [transferInfo, setTransferInfo] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    setTransferInfo(data);
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>Suivi de Transfert</h1>
      <TransferForm onSubmit={handleFormSubmit} />
      <Modal isOpen={isModalOpen} onClose={toggleModal} transferInfo={transferInfo} />
    </div>
  );
};

export default App;
