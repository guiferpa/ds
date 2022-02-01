import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

import * as Icon from '../Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
    secondary: false,
    tertiary: false,
    fluid: false,
    isLoading: false,
    disabled: false,
    dashed: false,
    danger: false
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: Icon.FolderIcon
};

export const Dashed = Template.bind({});
Dashed.args = {
  icon: Icon.TrashIcon,
  secondary: true,
  dashed: true
};

export const Danger = Template.bind({});
Danger.args = {
  icon: Icon.TrashIcon,
  secondary: true,
  danger: true
};