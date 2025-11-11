import React, { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
export type WizardState = {
  currentStep: number;
  totalSteps: number;
  devEnvironment: {
    aiAssistants: string[];
    codeEditor: string;
  };
  auth: {
    enabled: boolean;
    provider: string;
    features: string[];
  };
  database: {
    type: string;
    orm: string;
  };
  api: {
    type: string;
    features: string[];
  };
  payment: {
    provider: string;
  };
  ui: {
    framework: string;
    theme: string;
  };
  features: {
    dashboard: boolean;
    userProfile: boolean;
    settings: boolean;
    billing: boolean;
    analytics: boolean;
    admin: boolean;
  };
  recipeId: string;
};
const initialState: WizardState = {
  currentStep: 0,
  totalSteps: 10,
  devEnvironment: {
    aiAssistants: [],
    codeEditor: ''
  },
  auth: {
    enabled: false,
    provider: '',
    features: []
  },
  database: {
    type: '',
    orm: ''
  },
  api: {
    type: '',
    features: []
  },
  payment: {
    provider: ''
  },
  ui: {
    framework: '',
    theme: ''
  },
  features: {
    dashboard: false,
    userProfile: false,
    settings: false,
    billing: false,
    analytics: false,
    admin: false
  },
  recipeId: uuidv4()
};
type WizardContextType = {
  state: WizardState;
  updateState: (updates: Partial<WizardState>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetWizard: () => void;
};
const WizardContext = createContext<WizardContextType | undefined>(undefined);
export function WizardProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<WizardState>(initialState);
  const updateState = (updates: Partial<WizardState>) => {
    setState(prev => ({
      ...prev,
      ...updates
    }));
  };
  const nextStep = () => {
    if (state.currentStep < state.totalSteps) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
    }
  };
  const prevStep = () => {
    if (state.currentStep > 0) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1
      }));
    }
  };
  const goToStep = (step: number) => {
    if (step >= 0 && step <= state.totalSteps) {
      setState(prev => ({
        ...prev,
        currentStep: step
      }));
    }
  };
  const resetWizard = () => {
    setState({
      ...initialState,
      recipeId: uuidv4()
    });
  };
  return <WizardContext.Provider value={{
    state,
    updateState,
    nextStep,
    prevStep,
    goToStep,
    resetWizard
  }}>
      {children}
    </WizardContext.Provider>;
}
export function useWizard() {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}