import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
  //setting up state for the topic tabs
  const [ selectedTopic, setSelectedTopic ] = useState();
  //handles the change that happens when a topic is selected
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  // sets the default content for the tabs
  let tabContent = <p>Please select a topic.</p>;
  // if one of the tabs is clicked, then it'll show this code
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>)
  };

  return (  
    <Section title="Examples" id="examples">
      <Tabs buttons={        
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')} >
            Components
          </TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')} >
            JSX
          </TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')} >
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')} >
            State
          </TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}