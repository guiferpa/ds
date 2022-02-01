import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Heading';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Heading',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}> I'm a heading </Heading>;

export const Simple = Template.bind({});
Simple.args = {};

export const Bold = Template.bind({});
Bold.args = {
  bold: true
};