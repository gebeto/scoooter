import * as React from 'react';

import { SideSheet, Button, Paragraph, Position, Menu, CornerDialog } from 'evergreen-ui';
import { Drawer, ANCHOR } from "baseui/drawer";
import { Display4 } from 'baseui/typography';

import { ScooterDescriptionListItem } from './ScooterDescriptionListItem';


export type ScooterDescriptionProps = {
  handleClose: () => void;
  scooter?: {
    type: string;
    title: string;
    battery: number;
  };
}

export const ScooterDescription: React.FC<ScooterDescriptionProps> = ({ scooter, handleClose }) => {
  if (!scooter) {
    return null;
  }

  return (
      <CornerDialog
        title={scooter.title}
        // position={Position.BOTTOM}
        isShown={!!scooter}
        onCloseComplete={handleClose}
      >
        <Menu>
          <Menu.Group>
            <Menu.Item>Type: {scooter.type}</Menu.Item>
            <Menu.Item>Name: {scooter.title}</Menu.Item>
            <Menu.Item>Battery: {scooter.battery}</Menu.Item>
          </Menu.Group>
          {/* <Menu.Divider />
          <Menu.Group>
            <Menu.Item intent="danger">Delete...</Menu.Item>
          </Menu.Group> */}
        </Menu>
      </CornerDialog>
  );

  // return (
  //   <Drawer autoFocus isOpen={!!scooter} onClose={handleClose} anchor={ANCHOR.bottom}>
  //     <Display4>{scooter.title}</Display4>
  //     <ul>
  //       <ScooterDescriptionListItem title="Type" value={scooter.type} />
  //       <ScooterDescriptionListItem title="Name" value={scooter.title} />
  //       <ScooterDescriptionListItem title="Battery" value={scooter.battery} />
  //     </ul>
  //   </Drawer>
  // );
}
