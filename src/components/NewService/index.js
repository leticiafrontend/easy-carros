import React, { useState } from 'react';
import { Container } from '../../styles/container';
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
      input.nextElementSibling.style.color = '#707070';
    }
  };

  const resetInput = () => {
    setInputBox({ name: '', plate: '', date: dateNow });
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
              defaultValue={inputBox.date}
              onChange={validationInput}
              style={{ marginTop: 0 }}
              required
            />
            <Label htmlFor="data">Data de Agendamento*</Label>
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="text"
              name="plate"
              id="plate"
              value={inputBox.plate}
              onChange={validationInput}
              onBlur={validationInput}
              required
            />
            <Label htmlFor="plate">Placa*</Label>
            <Underline />
          </InputBox>
        </Inputs>
        <Buttons>
          <ButtonCancel onClick={resetInput}>Cancelar</ButtonCancel>
          <ButtonAdd>Adicionar</ButtonAdd>
        </Buttons>
      </NewServiceStyle>
    </Container>
  );
};
