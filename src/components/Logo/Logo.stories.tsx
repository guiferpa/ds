import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Logo',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}> I'm a heading </Heading>;

export const Small = Template.bind({});
Small.args = {};

export const Medium = Template.bind({});
Medium.args = {
  medium: true
};

export const Large = Template.bind({});
Large.args = {
  large: true
};