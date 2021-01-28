import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '../../styles/container';
import { Notification } from '../Notification';
import { Services } from '../Services';
import { ModalFinish } from '../ModalFinish';
import { ModalRemove } from '../ModalRemove';
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

import {
  TrBody,
  NameService,
  DateService,
  Plate,
  TdBody,
  ButtonFinish,
  ButtonRemove,
} from '../Services/style';

import exit from '../../images/exit-icon.svg';
import check from '../../images/check-icon.svg';

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

  const [hasNotification, setHasNotification] = useState(false);
  const [hasErrorName, setHasErrorName] = useState(false);
  const [hasErrorPlate, setHasErrorPlate] = useState(false);
  const [hasErrorRemove, setHasErrorRemove] = useState(false);

  const styleErrorInput = {
    borderBottom: '1px solid #f91919',
    marginTop: '5px',
  };

  const styleErrorLabel = {
    color: '#F91919',
  };

  const validationInput = ({ target }) => {
    const { id, value } = target;
    setInputBox({ ...inputBox, [id]: value });
    // eslint-disable-next-line default-case
    switch (id) {
      case 'name':
        if (value.length <= 0) {
          setHasErrorName(true);
        } else {
          setHasErrorName(false);
        }
        break;
      case 'plate':
        if (value.length <= 0) {
          setHasErrorPlate(true);
        } else {
          setHasErrorPlate(false);
        }
        break;
    }
  };

  const resetInput = () => {
    setInputBox({ name: '', plate: '', date: dateNow, time: '00:00' });
    setHasErrorPlate(false);
    setHasErrorName(false);
  };

  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('services')) || [],
  );

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('services')) || [];
    setStorage(local);
  }, []);

  const saveStorage = useCallback((storage) => {
    const servicesStorage = JSON.stringify(storage);
    localStorage.setItem('services', servicesStorage);
  }, []);

  const showNotification = () => {
    setHasNotification(true);
    setTimeout(() => {
      setHasNotification(false);
    }, 1000);
  };

  const addService = () => {
    const nameLength = inputBox.name.length;
    const plateLength = inputBox.plate.length;

    if (nameLength <= 0 || plateLength <= 0) {
      if (nameLength <= 0) {
        setHasErrorName(true);
      }
      if (plateLength <= 0) {
        setHasErrorPlate(true);
      }
    } else {
      const servicesInfo = {
        servico_realizado: inputBox.name,
        data_agendamento: `${inputBox.date.split('-').reverse().join('/')} ${
          inputBox.time
        }`,
        placa: inputBox.plate,
        data_execucao: '',
      };

      storage.push(servicesInfo);
      saveStorage(storage);
      setStorage(storage);
      resetInput();
      showNotification();
      setHasErrorPlate(false);
      setHasErrorName(false);
    }
  };

  const finishService = useCallback(() => {
    const inputDate = document.querySelector('#dateFinish');
    const inputTime = document.querySelector('#timeFinish');
    const erro = document.querySelector('.error');

    if (inputDate.value === '' || inputTime.value === '') {
      erro.innerText = 'Preencha todos os campos!';
    } else {
      const date = inputDate.value.split('-').reverse().join('/');
      const time = inputTime.value;
      const executionService = `${date} ${time}`;

      const dataId = document.querySelector('[data-id]');
      const id = dataId.dataset.id;
      const servicesLocal = JSON.parse(localStorage.getItem('services'));
      servicesLocal[id].data_execucao = executionService;
      saveStorage(servicesLocal);
      setStorage(servicesLocal);

      const finish = document.querySelector('#finish');
      finish.style.display = 'none';
      inputDate.value = '';
      inputTime.value = '';
      erro.innerText = '';
    }
  }, [saveStorage]);

  const removeService = useCallback(() => {
    const dataId = document.querySelector('[data-id]');
    const id = dataId.dataset.id;
    const servicesLocal = JSON.parse(localStorage.getItem('services'));
    servicesLocal.splice(id, 1);
    saveStorage(servicesLocal);
    setStorage(servicesLocal);

    const remove = document.querySelector('#remove');
    remove.style.display = 'none';
  }, [saveStorage]);

  const modalFinish = ({ target }) => {
    const finish = document.querySelector('#finish');
    finish.style.display = 'flex';
    finish.setAttribute('data-id', target.id);
  };

  const modalRemove = ({ target }) => {
    if (target.id !== '') {
      const remove = document.querySelector('#remove');
      remove.style.display = 'flex';
      remove.setAttribute('data-id', target.id);
    } else {
      setHasErrorRemove(true);
      setTimeout(() => {
        setHasErrorRemove(false);
      }, 2000);
    }
    // adicionar notificação de erro
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
              style={hasErrorName ? styleErrorInput : { marginTop: '5px' }}
              required
            />
            <Label htmlFor="name" style={hasErrorName ? styleErrorLabel : {}}>
              Serviço*
            </Label>
            <Underline />
          </InputBox>
          <InputBox>
            <Input
              type="date"
              name="date"
              id="date"
              min={dateNow}
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
              style={hasErrorPlate ? styleErrorInput : { marginTop: '5px' }}
              required
            />
            <Label htmlFor="plate" style={hasErrorPlate ? styleErrorLabel : {}}>
              Placa*
            </Label>
            <Underline />
          </InputBox>
        </Inputs>
        <Buttons>
          <ButtonCancel onClick={resetInput}>Cancelar</ButtonCancel>
          <ButtonAdd onClick={addService} type="submit" id="button-send">
            Adicionar
          </ButtonAdd>
        </Buttons>
      </NewServiceStyle>
      {hasNotification ? <Notification /> : ''}
      {hasErrorRemove ? (
        <h4 style={{ color: 'red', textAlign: 'center' }}>
          Erro ao tentar excluir.
        </h4>
      ) : (
        ''
      )}
      <Services
        service={[
          storage.length > 0 ? (
            storage.map((service, index) => {
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
            })
          ) : (
            <TrBody>
              <TdBody
                colSpan="6"
                style={{ padding: '30px 0', textAlign: 'center' }}
              >
                Nenhum serviço agendado!
              </TdBody>
            </TrBody>
          ),
        ]}
      />
      <ModalFinish finish={finishService} />
      <ModalRemove remove={removeService} />
    </Container>
  );
};
