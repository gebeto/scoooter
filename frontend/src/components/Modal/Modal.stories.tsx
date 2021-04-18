import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal, ModalProps } from './Modal';

export default {
    title: 'Example/Modal',
    component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setOpen(true)} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">Hello</button>
            <Modal {...args} open={open} />
        </React.Fragment>
    );
}

export const Primary = Template.bind({});
Primary.args = {
    // label: 'Button',
};
