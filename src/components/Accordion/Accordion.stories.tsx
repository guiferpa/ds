import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';

import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    title: "It's a accordion title kfjshdkjfsahdfasjdhfasdjhfkasdjfghkjasdfgkjsadgfjasdhgfjksadhgfjksadgfjkashgfjaksdgfjasdhgfkjasdhgfjkasdgfkasdgfjkasdhgfkjasdhgfjkasdhfgaksjdhgfajksdhfgasjkdfgasjdhfgaskjdhfgaskjdhfgsadjkfhgsajdhf"
  }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [isAccordionOpened, setIsAccordionOpened] = useState("isAccordionOpened", false);

  return (
    <Accordion 
      {...args} 
      isOpened={isAccordionOpened} 
      onToggle={() => setIsAccordionOpened(!isAccordionOpened)}
    >
      <span>Testing</span>
    </Accordion>
  );
}

export const Simple = Template.bind({});
Simple.args = {};
