import React from 'react';
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
  return (
    <Container>
      <NewServiceStyle>
        <H3>Nova ordem de serviço</H3>
        <Paragrafo>Os campos com * são obrigatórios</Paragrafo>
        <Inputs>
          <InputBox>
            <Input type="text" name="name" id="name" required />
            <Label htmlFor="name">Serviço*</Label>
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="date"
              name="date"
              id="date"
              defaultValue="2020-01-20"
              style={{ marginTop: 0 }}
              required
            />
            <Label htmlFor="data">Data de Agendamento*</Label>
            <Underline />
          </InputBox>
          <InputBox>
            <Input type="text" name="plate" id="plate" required />
            <Label htmlFor="plate">Placa*</Label>
            <Underline />
          </InputBox>
        </Inputs>
        <Buttons>
          <ButtonCancel>Cancelar</ButtonCancel>
          <ButtonAdd>Adicionar</ButtonAdd>
        </Buttons>
      </NewServiceStyle>
    </Container>
  );
};
