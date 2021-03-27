import * as React from 'react';
import { ProgressBar, SIZE } from "baseui/progress-bar";


import interpolate from 'color-interpolate'; 
const colormap = interpolate(['#e74c3c', '#f1c40f', '#2ecc71']);


export const Battery = (props: any) => {
  return (
    <ProgressBar
      showLabel
      value={props.value}
      getProgressLabel={value => `Battery: ${value}%`}
      size={SIZE.large}
      successValue={100}
      overrides={{
        BarProgress: {
          style: ({$theme}) => ({
            backgroundColor: colormap(props.value / 100),
          }),
        },
        Bar: {
          style: ({$theme}) => ({
            height: $theme.sizing.scale800,
          }),
        },
      }}
    />
  );
}
