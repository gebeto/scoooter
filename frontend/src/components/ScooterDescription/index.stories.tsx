import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ScooterDescription, ScooterDescriptionProps } from './index';
import { ScooterType } from '../../entitites/Scooter';

export default {
  title: 'Scooter/ScooterDescription',
  component: ScooterDescription,
} as Meta;

const Template: Story<ScooterDescriptionProps> = (args) => (
  <ScooterDescription  {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  handleClose: () => {},
  scooter: {
    id: 111,
    type: ScooterType.kiwi,
    title: 'LV04',
    battery: 89,
    location: {
      lat: 1,
      lon: 1,
    },
  },
};
