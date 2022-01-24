import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './Toast';

export default {
  title: 'Components/Toast',
  component: Alert,
  args: {
    title: "It's a title alert",
    message: "It's a message alert that needs be long then it was typed a lot random words and letters"
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Danger = Template.bind({});
Danger.args = {
  failure: true
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true
};

export const Success = Template.bind({});
Success.args = {
  success: true
};