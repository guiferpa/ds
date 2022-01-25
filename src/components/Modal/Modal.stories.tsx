import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

import Modal from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    title: "I'm a title",
    message: "Hey, I'm a message that just for full some space in this modal simple, there's no another goal for this."
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args} actions={[
      <Button secondary label='Cancelar' key={0} />,
      <Button label='Confirmar' key={1} />
    ]} />
  );
}

export const Simple = Template.bind({});
Simple.args = {};