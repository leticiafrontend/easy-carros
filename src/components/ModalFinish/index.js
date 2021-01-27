import React, { useState } from 'react';
import {
  Inputs,
  InputBox,
  Input,
  Underline,
  ModalContainer,
  ModalContent,
  ButtonFinish,
  ButtonRemove,
  Buttons,
} from './style';
import check from '../../images/check-icon.svg';
import exit from '../../images/exit-icon.svg';

export const ModalFinish = (props) => {
  const [execution, setExecution] = useState({
    dateFinish: '',
    timeFinish: '',
  });

  const executionChange = ({ target }) => {
    const { id, value } = target;
    setExecution({ ...execution, [id]: value });
  };

  const closeModal = () => {
    const finish = document.querySelector('#finish');
    finish.style.display = 'none';

    setExecution({ dateFinish: '', timeFinish: '' });

    const erro = document.querySelector('.error');
    erro.innerText = '';
    finish.removeAttribute('data-id');
  };

  return (
    <ModalContainer id="finish">
      <ModalContent>
        <h2>Data e horário da execução do serviço:</h2>
        <Inputs>
          <InputBox>
            <Input
              type="date"
              name="date"
              id="dateFinish"
              value={execution.date}
              onChange={executionChange}
              style={{ borderBottom: '2px solid #0c5990' }}
              required
            />
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="time"
              name="time"
              id="timeFinish"
              value={execution.time}
              onChange={executionChange}
              style={{ borderBottom: '2px solid #0c5990' }}
              required
            />
          </InputBox>
        </Inputs>
        <p
          className="error"
          style={{ color: '#f91919', textAlign: 'center', marginTop: '20px' }}
        ></p>
        <Buttons>
          <ButtonFinish onClick={props.finish} id="button-finish">
            <img src={check} alt="check" />
            Finalizar
          </ButtonFinish>
          <ButtonRemove onClick={closeModal}>
            <img src={exit} alt="exit" />
            Fechar
          </ButtonRemove>
        </Buttons>
      </ModalContent>
    </ModalContainer>
  );
};
