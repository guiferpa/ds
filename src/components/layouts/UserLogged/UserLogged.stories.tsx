import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import useState from 'storybook-addon-state';

import {
  Button,
  Breadcrumb,
  Divider,
  UserProfileMenuSection,
  UserProfileMenuItem,
  Toast,
  Alert,
  Modal,
  Card,
  Accordion,
  UserProfileMenuItemWithBadge
} from '../..';

import { FolderIcon, PersonIcon, LabIcon } from '../../Icon';

import LayoutLogged from './UserLogged';
import Title from '../../Title';

const StyledToastContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 9;
  box-sizing: border-box;
  width: 300px;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`

const StyledAlertContainer = styled.div`
  position: absolute;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  z-index: 10;
`

export default {
  title: 'Layouts/UserLogged',
  component: LayoutLogged,
  args: {
    header: {
      profile: {
        user: {
          avatarURL: "",
          name: "Guilherme Paixão",
          role: "Tester"
        },
        hasNotification: true
      }
    }
  }
} as ComponentMeta<typeof LayoutLogged>;

const Template: ComponentStory<typeof LayoutLogged> = (args) => {
  const [isMenuOpened, setIsMenuOpened] = useState("toggleMenu", true);
  const [isMenuFolded, setIsMenuFolded] = useState("foldMenu", false);

  Object.assign(args, {
    header: {
      profile: {
        ...args.header.profile,
        menu: () => {
          return (
            <>
              <UserProfileMenuSection title="Troca de perfil" items={[
                { label: "Item 1", href: "/#" },
                { label: "Item 2", href: "/#", activated: true },
                { label: "Item 3", href: "/#" },
                { label: "Item 4", href: "/#" },
                { label: "Item 5", href: "/#" }
              ]} />
              <Divider />
              <UserProfileMenuSection title="Configurações" items={[
                { label: "Item 2", href: "/#" },
                { label: "Item 2", href: "/#", badge: "1" }
              ]} />
              <UserProfileMenuItemWithBadge label='Item 3' href='/#' danger />
            </>
          );
        }
      }
    },
    sidebar: {
      isOpened: isMenuOpened,
      isFolded: isMenuFolded,
      items: [
        { icon: FolderIcon, name: "Projetos", href: "/#" },
        { icon: PersonIcon, name: "Perfil de usuário", href: "/#" },
        { icon: LabIcon, name: "Experiências", href: "/#" }
      ],
      onToggle: () => setIsMenuOpened(!isMenuOpened),
      onFold: () => setIsMenuFolded(!isMenuFolded)
    }
  });

  return (
    <>
      {/**
       * 
      <>
        <Modal title="It's a modal title" message="It's a modal message" />
        <Modal title="It's a modal title 2" message="It's a modal message 2" />
      </>
       */}
       {/**
      <StyledAlertContainer>
        <Alert message="It's a alert message" />
      </StyledAlertContainer>
        * 
        */}
      <LayoutLogged {...args}>
        <Breadcrumb crumbs={[
          { name: "Example 1", path: "/#" },
          { name: "Example 2", path: "/#" }
        ]} />
        <Title>Projetos</Title>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
            <Accordion title={`Accordion example ${item}`} isOpened>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero libero facere repellat. Iure quam voluptate sed aliquid blanditiis itaque ullam vitae consectetur reiciendis earum qui, molestias, sint impedit explicabo assumenda.</p>
            </Accordion>
          ))}
        </div>
        {/*
        <StyledToastContainer>
          <Toast title='Test Title' message='Test Message' />
        </StyledToastContainer>
        */}
      </LayoutLogged>
    </>
  );
};

export const Simple = Template.bind({});

Simple.parameters = {
  layout: 'fullscreen'
};
