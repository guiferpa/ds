import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserProfile from './UserProfile';

export default {
  title: 'Components/UserProfile',
  component: UserProfile,
  args: {
    avatarURL: "",
    name: "Cieds Core",
    role: "Tester"
  }
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => <UserProfile {...args} />;

export const WithoutMenu = Template.bind({});
WithoutMenu.args = {};

export const WithMenu = Template.bind({});
WithMenu.args = {
  renderMenu: () => {
    return (
      <span>Ronaldo</span>
    )
  }
};

