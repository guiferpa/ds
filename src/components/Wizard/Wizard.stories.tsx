import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Wizard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Wizard',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}> I'm a heading </Heading>;

export const Simple = Template.bind({});
Simple.args = {
  current: 1,
  amount: 10
};
