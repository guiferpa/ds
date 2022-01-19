import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return (
    <Avatar {...args} />
  );
}

export const PlaceholderSmall = Template.bind({});
PlaceholderSmall.args = {
  src: ""
};

export const PlaceholderMedium = Template.bind({});
PlaceholderMedium.args = {
  src: "",
  medium: true
};

export const PlaceholderLarge = Template.bind({});
PlaceholderLarge.args = {
  src: "",
  large: true
};

export const PlaceholderExtraLarge = Template.bind({});
PlaceholderExtraLarge.args = {
  src: "",
  xlarge: true
};

const imageURL: string = "https://loremflickr.com/cache/resized/65535_51433944648_af5f972d37_c_500_500_nofilter.jpg";

export const ImageSmall = Template.bind({});
ImageSmall.args = {
  src: imageURL
};

export const ImageMedium = Template.bind({});
ImageMedium.args = {
  src: imageURL,
  medium: true
};

export const ImageLarge = Template.bind({});
ImageLarge.args = {
  src: imageURL,
  large: true
};

export const ImageExtraLarge = Template.bind({});
ImageExtraLarge.args = {
  src: imageURL,
  xlarge: true
};

export const Editable = Template.bind({});
Editable.args = {
  src: imageURL,
  large: true,
  isEditable: true
};

export const Notification = Template.bind({});
Notification.args = {
  src: imageURL,
  medium: true,
  hasNotification: true
};