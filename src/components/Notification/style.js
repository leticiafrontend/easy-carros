import styled from 'styled-components';

export const NotificationContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: none;
  justify-content: center;
  align-items: center;
`;

export const NotificationContent = styled.div`
  background-color: #e8ffe9;
  border: 1px solid #02e64a;
  color: #02e64a;
  border-radius: 4px;
  padding: 40px;
  box-shadow: 2px 2px 10px #00000029;
  position: relative;
`;
