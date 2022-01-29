import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

import Notification from './RequestNotification';

export default {
  title: 'Components/Notification',
  component: Notification,
  args: {
    title: "It's a title for request notification",
    actionRender: () => {
      return (
        <div style={{ display: 'flex', width: "200px", gap: "20px" }}>
          <Button fluid label="Aprovar" />
          <Button fluid secondary label="Cancelar" />
        </div>
      );
    }
  }
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
  return (
    <Notification {...args}>
      It's a request notification
    </Notification>
  );
}

export const Simple = Template.bind({});
Simple.args = {};
