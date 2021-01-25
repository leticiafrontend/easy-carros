import React, { useState } from 'react';
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
  const nextServices = JSON.parse(localStorage.getItem('services')) || [];

  const [execution, setExecution] = useState({
    date: '',
    time: '',
  });

  const executionChange = ({ target }) => {
    const { id, value } = target;
    setExecution({ ...execution, [id]: value });
  };

  const finishService = () => {
    const id = document.querySelector('[data-id]');
    const idData = id.dataset.id;
    const date = execution.date.split('-').reverse().join('/');
    const executionService = `${date} ${execution.time}`;

    nextServices[idData].data_execucao = executionService;
    localStorage.setItem('services', JSON.stringify(nextServices));

    const finish = document.querySelector('#finish');
    finish.style.display = 'none';
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
              id="date"
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
              id="time"
              value={execution.time}
              onChange={executionChange}
              style={{ borderBottom: '2px solid #0c5990' }}
              required
            />
          </InputBox>
        </Inputs>
        <ButtonFinish onClick={finishService}>
          <img src={check} alt="check" />
          Finalizar
        </ButtonFinish>
      </ModalContent>
    </ModalContainer>
  );
};
