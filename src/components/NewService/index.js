import React, { useState } from 'react';
import { Container } from '../../styles/container';
import { Notification } from '../Notification';
import {
  NewServiceStyle,
  H3,
  Paragrafo,
  Inputs,
  InputBox,
  Input,
  Label,
  Underline,
  Buttons,
  ButtonCancel,
  ButtonAdd,
} from './style';

export const NewService = () => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.toDateInputValue = function () {
    let local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  };

  const dateNow = new Date().toDateInputValue();

  const [inputBox, setInputBox] = useState({
    name: '',
    date: dateNow,
    time: '00:00',
    plate: '',
  });

  const validationInput = ({ target }) => {
    const input = target;
    const { id, value } = target;

    setInputBox({ ...inputBox, [id]: value });

    if (value.length <= 0) {
      input.style.borderBottom = '1px solid #F91919';
      input.nextElementSibling.style.color = '#F91919';
    } else {
      input.style.borderBottom = '1px solid #707070 !important';
      if (input.nextElementSibling) {
        input.nextElementSibling.style.color = '#707070';
      }
    }
  };

  const resetInput = () => {
    setInputBox({ name: '', plate: '', date: dateNow, time: '00:00' });
  };

  const nextServices = JSON.parse(localStorage.getItem('services')) || [];

  const addService = () => {
    const inputs = document.querySelectorAll('input');
    if (inputBox.name.length <= 0 || inputBox.plate.length <= 0) {
      inputs.forEach((input) => {
        if (input.value === '') {
          input.style.borderBottom = '1px solid #F91919';
          input.nextElementSibling.style.color = '#F91919';
        }
      });
    } else {
      nextServices.push({
        servico_realizado: inputBox.name,
        data_agendamento: `${inputBox.date.split('-').reverse().join('/')} ${
          inputBox.time
        }`,
        placa: inputBox.plate,
        data_execucao: '',
      });

      localStorage.setItem('services', JSON.stringify(nextServices));

      inputs.forEach((input) => {
        console.log(input.value);
      });
      resetInput();
      showNotification();
    }
  };

  const showNotification = () => {
    const notification = document.querySelector('#notification');
    notification.style.display = 'flex';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
  };

  return (
    <Container>
      <NewServiceStyle>
        <H3>Nova ordem de serviço</H3>
        <Paragrafo>Os campos com * são obrigatórios</Paragrafo>
        <Inputs>
          <InputBox>
            <Input
              type="text"
              name="name"
              id="name"
              value={inputBox.name}
              onChange={validationInput}
              onBlur={validationInput}
              style={{ marginTop: '5px' }}
              required
            />
            <Label htmlFor="name">Serviço*</Label>
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="date"
              name="date"
              id="date"
              value={inputBox.date}
              onChange={validationInput}
              required
            />
            <Label htmlFor="data">Data de Agendamento*</Label>
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="time"
              name="time"
              id="time"
              value={inputBox.time}
              onChange={validationInput}
              style={{ borderBottom: '2px solid #0c5990' }}
              required
            />
            <Label htmlFor="time">Horário de Agendamento*</Label>
          </InputBox>
          <InputBox>
            <Input
              type="text"
              name="plate"
              id="plate"
              value={inputBox.plate}
              onChange={validationInput}
              onBlur={validationInput}
              style={{ marginTop: '5px' }}
              required
            />
            <Label htmlFor="plate">Placa*</Label>
            <Underline />
          </InputBox>
        </Inputs>
        <Buttons>
          <ButtonCancel onClick={resetInput}>Cancelar</ButtonCancel>
          <ButtonAdd onClick={addService} type="submit">
            Adicionar
          </ButtonAdd>
        </Buttons>
      </NewServiceStyle>
      <Notification />
    </Container>
  );
};
