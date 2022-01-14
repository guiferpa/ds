import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Link',
  component: Link,
  args: {
    href: "/#"
  }
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}>I'm a link</Link>;

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
