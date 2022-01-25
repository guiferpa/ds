import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserProfileMenuItem from '../UserProfileMenuItem';
import UserProfileMenuSection from '../UserProfileMenuSection';
import UserProfile from './UserProfile';
import Divider from '../Divider';

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
      <>
        <UserProfileMenuSection title="Troca de perfil" items={[
          { label: "Testing", href: "/#" }
        ]} />
        <Divider />
        <UserProfileMenuSection title="Configurações" items={[]} />
        <UserProfileMenuItem label='Testing' href='/#' />
      </>
    )
  }
};

