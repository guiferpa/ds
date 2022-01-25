import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Select';

export default {
  title: 'Components/Select',
  component: Input,
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" }
    ]
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label"
};
