import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

import { Map } from './components/Map';
import { ScooterDescription } from './components/ScooterDescription';
import { Scooter } from './entities';


export const engine = new Styletron();

export const AppWrapper: React.FC = ({ children }) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      {children}
    </BaseProvider>
  </StyletronProvider>
);


const App = () => {
  const [scooter, setScooter] = React.useState<Scooter | undefined>(undefined);

  return (
    <AppWrapper>
      <ScooterDescription scooter={scooter} handleClose={() => setScooter(undefined)} />
      <Map onScooterSelect={setScooter} />
    </AppWrapper>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
