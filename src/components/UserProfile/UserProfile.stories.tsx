import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserProfile from './UserProfile';

export default {
  title: 'Components/UserProfile',
  component: UserProfile
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  avatarURL: "",
  name: "Cieds Core",
  role: "Tester"
};
