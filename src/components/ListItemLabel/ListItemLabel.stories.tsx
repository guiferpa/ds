import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './ListItemLabel';

export default {
  title: 'Components/ListItemLabel',
  component: List
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  return (
    <List {...args}> </List>
  );
}

export const Simple = Template.bind({});
Simple.args = {};