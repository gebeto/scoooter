import * as React from 'react';
import { Drawer, ANCHOR } from "baseui/drawer";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { Display4 } from 'baseui/typography';

import { Battery } from './Battery';
import { ScooterDescriptionListItem } from './ScooterDescriptionListItem';
import { Scooter } from '../../entities';


export type ScooterDescriptionProps = {
  handleClose: () => void;
  scooter?: Scooter;
}

export const ScooterDescription: React.FC<ScooterDescriptionProps> = ({ scooter, handleClose }) => {
  if (!scooter) {
    return null;
  }

  return (
    <Modal
      onClose={() => handleClose()}
      closeable
      isOpen={true}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.alertdialog}
    >
      <ModalHeader>{scooter.type} | {scooter.title}</ModalHeader>
      <ModalBody>
        <ul>
          <ScooterDescriptionListItem title="Type" value={scooter.type} />
          <ScooterDescriptionListItem title="Name" value={scooter.title} />
          <ScooterDescriptionListItem title="Battery" value={`${scooter.battery}%`} />
        </ul>
        <Battery value={scooter.battery} />
      </ModalBody>
      {/* <ModalFooter>
        <ModalButton size="mini">
          Close
        </ModalButton>
      </ModalFooter> */}
    </Modal>
  );
}

