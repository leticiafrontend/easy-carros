import React from 'react';
import { NotificationContainer, NotificationContent } from './style';

export const Notification = () => {
  return (
    <NotificationContainer id="notification">
      <NotificationContent>
        <h2>Agendado com sucesso</h2>
      </NotificationContent>
    </NotificationContainer>
  );
};
