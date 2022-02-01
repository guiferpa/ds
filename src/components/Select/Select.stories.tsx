import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  component: Select,
  args: {
    placeholder: "Select option",
    options: [
      { label: "Option 1", value: "opt1" },
      { label: "Option 2", value: "opt2" },
      { label: "Option 3", value: "opt3" },
      { label: "Option 4", value: "opt4" }
    ]
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Simple = Template.bind({});
Simple.args = {};

export const Multiple = Template.bind({});
Multiple.args = {
  multi: true,
  placeholder: "Select some options"
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label"
};
