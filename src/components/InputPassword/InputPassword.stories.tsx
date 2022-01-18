import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputPassword from './InputPassword';

export default {
  title: 'Components/InputPassword',
  component: InputPassword
} as ComponentMeta<typeof InputPassword>;

const Template: ComponentStory<typeof InputPassword> = (args) => <InputPassword {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true
};
