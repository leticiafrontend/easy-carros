import React from 'react';
import {
  ButtonNo,
  Buttons,
  ButtonYes,
  ModalContainer,
  ModalContent,
} from './style';

export const ModalRemove = (props) => {
  const closeModal = () => {
    const remove = document.querySelector('#remove');
    remove.style.display = 'none';
  };

  return (
    <ModalContainer id="remove">
      <ModalContent>
        <h2>Tem certeza que deseja excluir essa agendamento?</h2>
        <Buttons>
          <ButtonYes onClick={props.remove} id="button-remove">
            Sim
          </ButtonYes>
          <ButtonNo onClick={closeModal}>Não</ButtonNo>
        </Buttons>
      </ModalContent>
    </ModalContainer>
  );
};
