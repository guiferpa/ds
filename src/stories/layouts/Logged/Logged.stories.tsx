import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Logged';

export default {
  title: 'Layouts/Logged',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Simple = Template.bind({});

Simple.parameters = {
  layout: 'fullscreen'
};

Simple.args = {};
