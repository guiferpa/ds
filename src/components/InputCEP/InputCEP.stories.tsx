import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './InputCEP';

export default {
  title: 'Components/InputCEP',
  component: Input,
  args: {}
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
