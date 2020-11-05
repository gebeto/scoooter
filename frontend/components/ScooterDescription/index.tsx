import * as React from 'react';


export const ScooterDescription = ({ scooter }: any) => {
  if (!scooter) {
    return null;
  }

  return (
    <div>
      <b>Type: {scooter.type}</b>
      <br />
      <ul>
        <li>Name: {scooter.title}</li>
        <li>Battery: {scooter.battery}</li>
      </ul>
    </div>
  );
}
