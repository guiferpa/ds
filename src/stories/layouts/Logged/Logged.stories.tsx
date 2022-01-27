import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';

import {
  Button,
  Breadcrumb,
  Divider,
  UserProfileMenuSection,
  UserProfileMenuItem
} from '../../../components';

import LayoutLogged from './Logged';

export default {
  title: 'Layouts/Logged',
  component: LayoutLogged,
  args: {
    header: {
      profile: {
        user: {
          avatarURL: "",
          name: "Guilherme Paixão",
          role: "Tester"
        }
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
                { label: "Item 1", href: "/#" }
              ]} />
              <Divider />
              <UserProfileMenuSection title="Configurações" items={[
                { label: "Item 2", href: "/#" }
              ]} />
              <UserProfileMenuItem label='Item 3' href='/#' />
            </>
          );
        }
      }
    },
    sidebar: {
      isOpened: isMenuOpened,
      isFolded: isMenuFolded,
      onToggle: () => setIsMenuOpened(!isMenuOpened),
      onFold: () => setIsMenuFolded(!isMenuFolded)
    }
  });

  return (
    <LayoutLogged {...args}>
      <Breadcrumb crumbs={[
        { name: "Example 1", path: "/#" },
        { name: "Example 2", path: "/#" }
      ]} />
      <Button label="Sample" />
    </LayoutLogged>
  );
};

export const Simple = Template.bind({});

Simple.parameters = {
  layout: 'fullscreen'
};
