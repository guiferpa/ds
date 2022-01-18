import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from './Alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    title: "It's a title alert",
    message: "It's a message alert that needs be long then it was typed a lot random words and letters"
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {};

