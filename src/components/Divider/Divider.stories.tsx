import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Divider from './Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  size: "50%"
};
