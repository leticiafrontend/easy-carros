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

  const validationInput = ({ target }) => {
    const input = target;
    const { id, value } = target;

    setInputBox({ ...inputBox, [id]: value });

    if (value.length <= 0) {
      input.style.borderBottom = '1px solid #f91919';
      input.nextElementSibling.style.color = '#F91919';
    } else {
      input.style.borderBottom = '1px solid #707070';
      if (input.nextElementSibling) {
        input.nextElementSibling.style.color = '#707070';
      }
    }
  };

  const resetInput = () => {
    setInputBox({ name: '', plate: '', date: dateNow, time: '00:00' });
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

  const addService = () => {
    const inputName = document.querySelector('#name');
    const inputPlate = document.querySelector('#plate');
    if (inputBox.name.length <= 0 || inputBox.plate.length <= 0) {
      inputName.style.borderBottom = '1px solid #F91919';
      inputPlate.style.borderBottom = '1px solid #F91919';
      inputName.nextElementSibling.style.color = '#F91919';
      inputPlate.nextElementSibling.style.color = '#F91919';
    } else {
      inputName.style.borderBottom = '1px solid #707070';
      inputPlate.style.borderBottom = '1px solid #707070';
      inputName.nextElementSibling.style.color = '#707070';
      inputPlate.nextElementSibling.style.color = '#707070';

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
    }
  };

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

  const showNotification = () => {
    const notification = document.querySelector('#notification');
    notification.style.display = 'flex';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
  };

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
              style={{ marginTop: '5px' }}
              required
            />
            <Label htmlFor="plate">Placa*</Label>
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
      <Notification />
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
      <ModalFinish />
      <ModalRemove remove={removeService} />
    </Container>
  );
};
