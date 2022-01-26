import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import UserProfileMenu from './UserProfileMenu';
import UserProfileMenuSection from '../UserProfileMenuSection';
import UserProfileMenuItem from '../UserProfileMenuItem';
import Divider from '../Divider';

const StyledStoryContainer = styled.div`
  width: 400px;
  position: relative;
`

export default {
  title: 'Components/UserProfileMenu',
  component: UserProfileMenu
} as ComponentMeta<typeof UserProfileMenu>;

const Template: ComponentStory<typeof UserProfileMenu> = (args) => {
  return (
    <StyledStoryContainer>
      <UserProfileMenu {...args}>
        <UserProfileMenuSection title="Troca de perfil" items={[
          { label: "Item 1", href: "/#" }
        ]} />
        <Divider />
        <UserProfileMenuSection title="Configurações" items={[
          { label: "Item 2", href: "/#" }
        ]} />
        <UserProfileMenuItem label='Item 3' href='/#' />
      </UserProfileMenu>
    </StyledStoryContainer>
  )
}

export const Simple = Template.bind({});
Simple.args = {};