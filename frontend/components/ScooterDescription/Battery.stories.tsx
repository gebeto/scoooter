import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AppWrapper } from '../../index';
import { Battery } from './Battery';

export default {
  title: 'Scooter/Battery',
  component: Battery,
  decorators: [
    (Story) => (
      <AppWrapper>
        <Story />
      </AppWrapper>
    )
  ]
} as Meta;

const Template: Story<any> = (args) => <Battery {...args} />;

export const Battery_0 = Template.bind({});
Battery_0.args = {
  value: 0,
};

export const Battery_25 = Template.bind({});
Battery_25.args = {
  value: 25,
};

export const Battery_50 = Template.bind({});
Battery_50.args = {
  value: 50,
};

export const Battery_75 = Template.bind({});
Battery_75.args = {
  value: 75,
};

export const Battery_100 = Template.bind({});
Battery_100.args = {
  value: 100,
};
