import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpinnerIcon as Spinner } from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Icons',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Simple = Template.bind({});
Simple.args = {};
