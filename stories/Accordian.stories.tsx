import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordian } from '../src';

const meta: Meta = {
  title: 'Accordian',
  component: Accordian,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ items, renderBody, ...args }) => (
  <Accordian items={items} renderBody={renderBody} {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  items: [
    {
      title: 'Accordian value 1',
      strongText: 'strong text 1',
      body: 'Accordian body value 1',
    },
    {
      title: 'Accordian value 1',
      strongText: 'strong text 2',
      body: 'Accordian body value 1',
    },
  ],
  renderBody: ({ body, strongText }) => {
    return (
      <>
        <strong>{strongText}</strong>
        {body}
      </>
    );
  },
};
