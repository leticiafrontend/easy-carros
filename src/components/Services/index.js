import React, { useState, useEffect } from 'react';
import { Container } from '../../styles/container';
import { ModalFinish } from '../ModalFinish';
import { ModalRemove } from '../ModalRemove';
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
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('services')) || [],
  );

  useEffect(() => {
    const local = localStorage.getItem('services');
    if (local) {
      setStorage(JSON.parse(local));
    }
  }, []);

  const modalFinish = ({ target }) => {
    const finish = document.querySelector('#finish');
    finish.style.display = 'flex';
    finish.setAttribute('data-id', target.id);
  };

  const modalRemove = ({ target }) => {
    const remove = document.querySelector('#remove');
    remove.style.display = 'flex';
    remove.setAttribute('data-id', target.id);
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
            {storage.map((service, index) => {
              return (
                <TrBody key={index}>
                  <NameService>{service.servico_realizado}</NameService>
                  <DateService>
                    {service.data_execucao ? service.data_execucao : '---'}
                  </DateService>
                  <DateService>{service.data_agendamento}</DateService>
                  <Plate>{service.placa}</Plate>
                  <TdBody>
                    <ButtonRemove id={index} onClick={modalRemove}>
                      <img src={exit} alt="exit" />
                      Excluir
                    </ButtonRemove>
                  </TdBody>
                  <TdBody>
                    {service.data_execucao === '' ? (
                      <ButtonFinish id={index} onClick={modalFinish}>
                        <img src={check} alt="check" />
                        Finalizar
                      </ButtonFinish>
                    ) : (
                      ''
                    )}
                  </TdBody>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ServicesStyle>
      <ModalFinish />
      <ModalRemove />
    </Container>
  );
};
