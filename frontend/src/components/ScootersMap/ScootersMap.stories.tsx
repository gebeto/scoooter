import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ScootersMap, ScootersMapProps } from './index';
import { ScooterType } from '../../entitites/Scooter';


export default {
    title: 'Scooter/ScootersMap',
    component: ScootersMap,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;


const Template: Story<ScootersMapProps> = (args) => <ScootersMap {...args} />;


export const Default = Template.bind({});
Default.args = {
    center: [49.8360948918759, 24.025636129081246],
    scooters: [
        {
            type: ScooterType.kiwi,
            id: 1,
            title: "Kiwi Scooter",
            battery: 98,
            location: {
                lat: 49.8360948918759,
                lon: 24.025636129081246,
            },
        },
        {
            type: ScooterType.ewings,
            id: 1,
            title: "Ewings Scooter",
            battery: 98,
            location: {
                lat: 49.8360948918759,
                lon: 24.025636129081246,
            },
        }
    ],
};
