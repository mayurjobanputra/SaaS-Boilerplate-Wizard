import React from 'react';
import { WizardProvider } from './components/wizard/WizardContext';
import { WizardLayout } from './components/wizard/WizardLayout';
export function App() {
  return <WizardProvider>
      <WizardLayout />
    </WizardProvider>;
}