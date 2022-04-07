/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import './App.scss';

import LaunchButton from './Components/LaunchButton/LaunchButton';
import VerticalTabs from './Components/VerticalTabs/VerticalTabs';

function App() {
  // Hook permettant le lancement du diagnostic
  const [diagnosticLaunched, setDiagnosticLaunched] = useState(false);

  function handleClickDiagnostic() {
    setDiagnosticLaunched(!diagnosticLaunched);
  }

  return (
    <div className="App">
      <h1>ObayB</h1>
      <h2>Comment survivre au quotidien avec un bébé ?</h2>
      <span>
        Cohabiter avec un bébé dont on a même pas le mode d&apos;emploi c&apos;est dur !
        ObayB vous propose une collection d&apos;astuces sur la façon
        de gérer votre petit dém.. trésor au quotidien !
      </span>
      <LaunchButton handleClickDiagnostic={handleClickDiagnostic} />
      {diagnosticLaunched ? <VerticalTabs /> : '' }
    </div>
  );
}

export default App;
