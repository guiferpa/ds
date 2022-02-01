import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListItem from '../ListItem';
import ListItemLabel from '../ListItemLabel';
import ListItemControl from '../ListItemControl';
import Button from '../Button';
import * as Icon from '../Icon';

import Heading from './List';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/List',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <Heading {...args}>
      {[
        { label: "Item 1", button: { label: "Button 1", icon: Icon.LabIcon } },
        { label: "Item 2", button: null },
        { label: "Item 3", button: { tertiary: true, label: "Button 2", icon: null } },
        { label: "Item 3", button: { danger: true, label: "Button 3", icon: null } },
      ].map((item) => (
        <ListItem>
          <ListItemLabel>{item.label}</ListItemLabel>
          <ListItemControl>
            {item.button && <Button {...item.button} />}
          </ListItemControl>
        </ListItem>
      ))}
    </Heading>
  );
}

export const Simple = Template.bind({});
Simple.args = {};
