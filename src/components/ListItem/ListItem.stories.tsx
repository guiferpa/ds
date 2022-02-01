import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './ListItem';

export default {
  title: 'Components/ListItem',
  component: List
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  return (
    <List {...args}> </List>
  );
}

export const Simple = Template.bind({});
Simple.args = {};