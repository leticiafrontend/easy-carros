import styled from 'styled-components';

export const NewServiceStyle = styled.div`
  margin: 100px auto 72px;
  box-shadow: 2px 2px 10px #00000029;
  padding: 24px;
  border-radius: 4px;
`;

export const H3 = styled.h3`
  color: #0c5990;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Paragrafo = styled.p`
  color: #c1c1c1;
  font-size: 16px;
  margin-bottom: 29px;
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
  margin-bottom: 42px;
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

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
`;

export const ButtonCancel = styled.button`
  font-size: 16px;
  background-color: #fff;
  color: #0c5990;
  border: 1px solid #0c5990;
  padding: 14px 50px;
  border-radius: 30px;
  &:hover {
    background-color: #eee;
  }
`;

export const ButtonAdd = styled.button`
  font-size: 16px;
  background-color: #0c5990;
  color: #fff;
  border: 1px solid #0c5990;
  padding: 14px 50px;
  border-radius: 30px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: rgba(1, 107, 171, 1);
  }
`;
