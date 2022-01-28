import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Components/Title',
  component: Title
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}> I'm a heading </Title>;

export const Simple = Template.bind({});
Simple.args = {};

export const Bold = Template.bind({});
Bold.args = {
  bold: true
};