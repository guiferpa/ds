import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserProfileMenuItem from './UserProfileMenuItem';

export default {
  title: 'Components/UserProfileMenuItem',
  component: UserProfileMenuItem
} as ComponentMeta<typeof UserProfileMenuItem>;

const Template: ComponentStory<typeof UserProfileMenuItem> = (args) => <UserProfileMenuItem {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: "Item 1",
  href: "/#"
};