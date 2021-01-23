import React from 'react';
import {
  ButtonNo,
  Buttons,
  ButtonYes,
  ModalContainer,
  ModalContent,
} from './style';

export const Modal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Tem certeza que deseja excluir essa agendamento?</h2>
        <Buttons>
          <ButtonYes>Sim</ButtonYes>
          <ButtonNo>Não</ButtonNo>
        </Buttons>
      </ModalContent>
    </ModalContainer>
  );
};
