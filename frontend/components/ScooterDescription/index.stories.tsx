import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AppWrapper } from '../../index';
import { ScooterDescription, ScooterDescriptionProps } from './index';

export default {
  title: 'Scooter/ScooterDescription',
  component: ScooterDescription,
  decorators: [
    (Story) => (
      <AppWrapper>
        <Story />
      </AppWrapper>
    )
  ]
} as Meta;

const Template: Story<any> = (args) => {
  const [scooter, setScooter] = React.useState<ScooterDescriptionProps["scooter"]>();

  return (
    <React.Fragment>
      <button onClick={() => setScooter(args.scooter)}>Open</button>
      <ScooterDescription scooter={scooter} handleClose={() => setScooter(undefined)} />
    </React.Fragment>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  scooter: {
    type: 'Scooter',
    title: 'LV04',
    battery: 89,
  },
};
