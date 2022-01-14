import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumb from './Breadcrumb';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  crumbs: [
    { name: 'First link', path: '/#' },
    { name: 'Second link', path: '/#' },
    { name: 'Third link', path: '/#' }
  ]
};
