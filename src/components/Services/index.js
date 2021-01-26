import React from 'react';
import { ServicesStyle, Table, Th, Thead } from './style';

export const Services = (props) => {
  return (
    <>
      <ServicesStyle>
        <Table>
          <Thead>
            <tr>
              <Th>Serviço</Th>
              <Th>Data de Execução</Th>
              <Th>Data de Agendamento</Th>
              <Th>Placa</Th>
              <Th></Th>
              <Th></Th>
            </tr>
          </Thead>
          <tbody>{props.service}</tbody>
        </Table>
      </ServicesStyle>
    </>
  );
};
