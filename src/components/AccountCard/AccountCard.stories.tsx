import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './AccountCard';

export default {
  title: 'Components/AccountCard',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Simple = Template.bind({});
Simple.args = {};
