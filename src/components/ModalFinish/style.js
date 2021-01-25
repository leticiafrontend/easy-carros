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

export const Inputs = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6px;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  bottom: 10px;
  left: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  color: #707070;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid silver;
  padding: 6px 0;
  &:focus ~ label,
  :valid ~ label {
    transform: translateY(-20px);
    font-size: 12px;
    color: #b5b5b5;
  }
  &:focus ~ div:before,
  :valid ~ div:before {
    transform: scale(1);
  }
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: #0c5990;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

export const ButtonFinish = styled.button`
  display: flex;
  column-gap: 8px;
  background-color: #fff;
  color: #02e64a;
  border-radius: 30px;
  border: 1px solid #02e64a;
  padding: 12px 16px;
  font-weight: 600;
  margin: 30px auto 0;
  &:hover {
    background-color: #19f9201f;
  }
`;
