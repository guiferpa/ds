import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormLogin from './Login';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Login',
  component: FormLogin
} as ComponentMeta<typeof FormLogin>;

const Template: ComponentStory<typeof FormLogin> = (args) => <FormLogin {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  forgotPasswordPath: '/#',
  signUpPath: '/#'
};