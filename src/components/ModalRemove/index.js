import React from 'react';
import {
  ButtonNo,
  Buttons,
  ButtonYes,
  ModalContainer,
  ModalContent,
} from './style';

export const ModalRemove = () => {
  const servicesAg = JSON.parse(localStorage.getItem('services')) || [];

  const removeService = () => {
    const id = document.querySelector('[data-id]');
    const idData = id.dataset.id;

    servicesAg.splice(idData, 1);
    localStorage.setItem('services', JSON.stringify(servicesAg));

    const remove = document.querySelector('#remove');
    remove.style.display = 'none';
  };

  const closeModal = () => {
    const remove = document.querySelector('#remove');
    remove.style.display = 'none';
  };

  return (
    <ModalContainer id="remove">
      <ModalContent>
        <h2>Tem certeza que deseja excluir essa agendamento?</h2>
        <Buttons>
          <ButtonYes onClick={removeService}>Sim</ButtonYes>
          <ButtonNo onClick={closeModal}>Não</ButtonNo>
        </Buttons>
      </ModalContent>
    </ModalContainer>
  );
};
