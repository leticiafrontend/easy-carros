import React from 'react';
import {
  Inputs,
  InputBox,
  Input,
  Underline,
  ModalContainer,
  ModalContent,
  ButtonFinish,
} from './style';
import check from '../../images/check-icon.svg';

export const ModalFinish = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Data e horário da execução do serviço:</h2>
        <Inputs>
          <InputBox>
            <Input
              type="date"
              name="date"
              id="date"
              style={{ borderBottom: '2px solid #0c5990' }}
              required
            />
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="time"
              name="time"
              id="time"
              style={{ borderBottom: '2px solid #0c5990' }}
              required
            />
          </InputBox>
        </Inputs>
        <ButtonFinish>
          <img src={check} alt="check" />
          Finalizar
        </ButtonFinish>
      </ModalContent>
    </ModalContainer>
  );
};
