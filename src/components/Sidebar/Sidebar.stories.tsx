import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from './Sidebar';

import { FolderIcon, LabIcon, PersonIcon } from '../Icon';

export default {
  title: 'Components/Sidebar',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} items={[
    { icon: FolderIcon, name: "Projetos", href: "/#" },
    { icon: PersonIcon, name: "Perfil de usuário", href: "/#" },
    { icon: LabIcon, name: "Experiências", href: "/#" }
  ]} />
)

export const Unfold = Template.bind({});
Unfold.args = {
  open: true,
  fold: false
};

export const Fold = Template.bind({});
Fold.args = {
  open: true,
  fold: true
};