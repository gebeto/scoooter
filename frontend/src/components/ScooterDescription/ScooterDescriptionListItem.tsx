import * as React from 'react';


export const ScooterDescriptionListItem = (props: any) => {
  return (
    <button className="text-gray-900 group flex rounded-md items-center justify-between w-full px-2 py-2 text-sm" role="menuitem" tabIndex={-1}>
      <span>{props.title}</span>
      <span>{props.value}</span>
    </button>
  );
}
