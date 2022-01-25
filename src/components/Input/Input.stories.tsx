import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: "Hey, I'm a placeholder"
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
