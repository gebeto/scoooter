import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {StatefulInput} from 'baseui/input';

import { Drawer, ANCHOR } from "baseui/drawer";

import { Map } from './components/Map';
import { ScooterDescription } from './components/ScooterDescription';


const engine = new Styletron();


const App = () => {
  const [scooter, setScooter] = React.useState<any>(null);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Drawer autoFocus isOpen={!!scooter} onClose={() => setScooter(null)} anchor={ANCHOR.bottom}>
          <ScooterDescription scooter={scooter} />
        </Drawer>
        <Map onScooterSelect={setScooter} />
      </BaseProvider>
    </StyletronProvider>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
