import * as React from 'react';

import {
  ListItem,
  ListItemLabel,
  ARTWORK_SIZES
} from "baseui/list";
import { ChevronRight } from "baseui/icon";


export const ScooterDescriptionListItem = (props: any) => {
  return (
    <ListItem
      // artwork={ChevronRight}
      artworkSize={ARTWORK_SIZES.LARGE}
      endEnhancer={() => (
        <ListItemLabel>{props.value}</ListItemLabel>
      )}
    >
      <ListItemLabel>{props.title}</ListItemLabel>
    </ListItem>
  );
}
