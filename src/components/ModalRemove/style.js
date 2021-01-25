import styled from 'styled-components';

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: none;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 2px 2px 10px #00000029;
  position: relative;
`;

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonYes = styled.button`
  background-color: #fff;
  color: #02e64a;
  border-radius: 30px;
  border: 1px solid #02e64a;
  padding: 12px 50px;
  font-weight: 600;
  &:hover {
    background-color: #19f9201f;
  }
`;

export const ButtonNo = styled.button`
  background-color: #fff;
  color: #f91919;
  border-radius: 30px;
  border: 1px solid #f91919;
  padding: 12px 50px;
  font-weight: 600;
  &:hover {
    background-color: #f919191f;
  }
`;
