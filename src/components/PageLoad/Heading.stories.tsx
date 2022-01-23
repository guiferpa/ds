import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button';

import Heading from './PageLoad';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Page/Load',
  component: Heading,
  args: {
    isVisible: true
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <>
      <Heading {...args} />
      <Button label="Example" />
    </>
  );
}

export const Simple = Template.bind({});
Simple.args = {};
