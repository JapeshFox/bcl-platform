import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'bcl-ui-components/src';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Story = Template.bind({});

Story.args = {
    variant: "primary",
    label: "Call to Action",
    buttonAction: () => { console.log(`Button`)}
};