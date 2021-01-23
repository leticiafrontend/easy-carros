import React from 'react';
import { Container } from '../../styles/container';
import {
  ButtonFinish,
  ButtonRemove,
  ServicesStyle,
  Table,
  TdBody,
  Th,
  Thead,
  TrBody,
  NameService,
  DateService,
  Plate,
} from './style';
import exit from '../../images/exit-icon.svg';
import check from '../../images/check-icon.svg';

export const Services = () => {
  return (
    <Container>
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
          <tbody>
            <TrBody>
              <NameService>Lavagem ecologica COVID-19</NameService>
              <DateService>--</DateService>
              <DateService>20/08/2020</DateService>
              <Plate>MBB-1996</Plate>
              <TdBody>
                <ButtonRemove>
                  <img src={exit} alt="exit" />
                  Excluir
                </ButtonRemove>
              </TdBody>
              <TdBody>
                <ButtonFinish>
                  <img src={check} alt="check" />
                  Finalizar
                </ButtonFinish>
              </TdBody>
            </TrBody>
            <TrBody>
              <NameService>Martelinho de Ouro</NameService>
              <DateService>20/08/2020</DateService>
              <DateService>20/08/2020</DateService>
              <Plate>MBB-1996</Plate>
              <TdBody>
                <ButtonRemove>
                  <img src={exit} alt="exit" />
                  Excluir
                </ButtonRemove>
              </TdBody>
              <TdBody>
                <ButtonFinish>
                  <img src={check} alt="check" />
                  Finalizar
                </ButtonFinish>
              </TdBody>
            </TrBody>
          </tbody>
        </Table>
      </ServicesStyle>
    </Container>
  );
};
