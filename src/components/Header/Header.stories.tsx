import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}> I'm a heading </Heading>;

export const Simple = Template.bind({});
Simple.args = {};
