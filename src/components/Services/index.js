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
  const servicesAg = JSON.parse(localStorage.getItem('services'));

  const removeService = ({ target }) => {
    const { id } = target;
    servicesAg.splice(id, 1);
    localStorage.setItem('services', JSON.stringify(servicesAg));
  };

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
            {servicesAg.map((service, index) => {
              return (
                <TrBody key={index}>
                  <NameService>{service.servico_realizado}</NameService>
                  <DateService>
                    {service.data_execucao ? service.data_execucao : '--'}
                  </DateService>
                  <DateService>{service.data_agendamento}</DateService>
                  <Plate>{service.placa}</Plate>
                  <TdBody>
                    <ButtonRemove id={index} onClick={removeService}>
                      <img src={exit} alt="exit" />
                      Excluir
                    </ButtonRemove>
                  </TdBody>
                  <TdBody>
                    <ButtonFinish id={index}>
                      <img src={check} alt="check" />
                      Finalizar
                    </ButtonFinish>
                  </TdBody>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ServicesStyle>
    </Container>
  );
};
