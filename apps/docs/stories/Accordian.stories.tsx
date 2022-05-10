import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordian } from 'bcl-ui-components/src';


const meta: Meta = {
  title: 'Accordian',
  component: Accordian,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ items, renderBody, alwaysOpen }) => {
  return (
    // @ts-ignore
    <Accordian items={items} renderBody={renderBody} alwaysOpen={alwaysOpen} />
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
const commonArgs = {
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
  // @ts-ignore
  renderBody: ({ body, strongText }) => {
    return (
      <>
        <strong>{strongText}</strong>
        {body}
      </>
    );
  },
};
export const Default = Template.bind({});
Default.args = { ...commonArgs };

export const AlwaysOpen = Template.bind({});
AlwaysOpen.args = { ...commonArgs, alwaysOpen: true };
