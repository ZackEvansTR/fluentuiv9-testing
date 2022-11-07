import React from 'react';
import './TablistExample.css';
import { 
  Tab, 
  TabList, 
  SelectTabData, 
  SelectTabEvent 
} from "@fluentui/react-components";
import Wrapper from '../Wrapper/Wrapper';

function TablistExample() {
  const [selectedValue, setSelectedValue] = React.useState('practical-law');

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  const PanelPL = React.memo(() => (
    <div role="tabpanel" aria-labelledby="tab-pl" tabIndex="0">
      <p>Practical Law clauses</p>
    </div>
  ));

  const PanelSEC = React.memo(() => (
    <div role="tabpanel" aria-labelledby="tab-sec" tabIndex="0">
      <p>SEC agreement clauses</p>
    </div>
  ));

  const PanelInternal = React.memo(() => (
    <div role="tabpanel" aria-labelledby="tab-internal" tabIndex="0">
      <p>Internal agreement clauses</p>
    </div>
  ));

  return (
    <Wrapper heading="Tablist">
      <div className='tabpanel'>
        <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
          <Tab id="tab-pl" value="practical-law">
            Practical Law
          </Tab>
          <Tab id="tab-sec" value="sec-agreements">
            SEC agreements
          </Tab>
          <Tab id="tab-internal" value="internal-agreements">
            Internal agreements
          </Tab>
        </TabList>
        <React.Fragment>
          {selectedValue === 'practical-law' && <PanelPL />}
          {selectedValue === 'sec-agreements' && <PanelSEC />}
          {selectedValue === 'internal-agreements' && <PanelInternal />}
        </React.Fragment>
      </div>
    </Wrapper>
  );
}

export default TablistExample;
