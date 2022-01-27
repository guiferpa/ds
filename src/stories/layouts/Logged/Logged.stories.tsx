import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';

import Button from '../../../components/Button';
import Divider from '../../../components/Divider';
import UserProfileMenuSection from '../../../components/UserProfileMenuSection';
import UserProfileMenuItem from '../../../components/UserProfileMenuItem';
import Breadcrumb from '../../../components/Breadcrumb';

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
        { name: "Projects", path: "/#" },
        { name: "Projects 2", path: "/#" }
      ]} />
      <Button label="Example" onClick={() => console.log("Conseguiu clicar!!!")} />
    </LayoutLogged>
  );
};

export const Simple = Template.bind({});

Simple.parameters = {
  layout: 'fullscreen'
};
