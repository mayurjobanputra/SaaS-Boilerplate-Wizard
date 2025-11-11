import React from 'react';
import { useWizard } from './WizardContext';
import { Button, Flex, Group, Progress, Stack, Text, Title } from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WelcomeStep } from './steps/WelcomeStep';
import { AiAssistantsStep } from './steps/AiAssistantsStep';
import { CodeEditorStep } from './steps/CodeEditorStep';
import { AuthStep } from './steps/AuthStep';
import { DatabaseStep } from './steps/DatabaseStep';
import { ApiStep } from './steps/ApiStep';
import { PaymentStep } from './steps/PaymentStep';
import { UiStep } from './steps/UiStep';
import { FeaturesStep } from './steps/FeaturesStep';
import { SummaryStep } from './steps/SummaryStep';
import { GeneratingStep } from './steps/GeneratingStep';
export function WizardLayout() {
  const {
    state,
    nextStep,
    prevStep
  } = useWizard();
  const renderStep = () => {
    switch (state.currentStep) {
      case 0:
        return <WelcomeStep />;
      case 1:
        return <AiAssistantsStep />;
      case 2:
        return <CodeEditorStep />;
      case 3:
        return <AuthStep />;
      case 4:
        return <DatabaseStep />;
      case 5:
        return <ApiStep />;
      case 6:
        return <PaymentStep />;
      case 7:
        return <UiStep />;
      case 8:
        return <FeaturesStep />;
      case 9:
        return <SummaryStep />;
      case 10:
        return <GeneratingStep />;
      default:
        return <WelcomeStep />;
    }
  };
  const getStepTitle = () => {
    switch (state.currentStep) {
      case 0:
        return 'Welcome to SAAS Machine';
      case 1:
        return 'AI Assistants';
      case 2:
        return 'Code Editor';
      case 3:
        return 'Authentication';
      case 4:
        return 'Database';
      case 5:
        return 'API & Middleware';
      case 6:
        return 'Payment Provider';
      case 7:
        return 'UI Framework';
      case 8:
        return 'Features';
      case 9:
        return 'Summary';
      case 10:
        return 'Generating Your Boilerplate';
      default:
        return 'SAAS Machine';
    }
  };
  const progress = state.currentStep / state.totalSteps * 100;
  return <div className="min-h-screen bg-white flex flex-col w-full">
      <header className="bg-black border-b border-gray-800 py-4">
        <div className="max-w-[900px] mx-auto px-4">
          <Title order={3} className="text-white">
            saasmachine.co
          </Title>
        </div>
      </header>
      <div className="max-w-[900px] w-full mx-auto px-4 flex-grow py-8">
        <Stack spacing="xl">
          {state.currentStep > 0 && state.currentStep < state.totalSteps && <>
              <div>
                <Flex justify="space-between" align="center" mb="xs">
                  <Text size="sm" fw={500} c="gray">
                    Step {state.currentStep} of {state.totalSteps - 1}
                  </Text>
                  <Text size="sm" fw={500} c="gray">
                    {Math.round(progress)}%
                  </Text>
                </Flex>
                <Progress value={progress} size="sm" radius="xl" color="black" />
              </div>
              <Title order={2} className="text-black">
                {getStepTitle()}
              </Title>
            </>}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {renderStep()}
          </div>
          {state.currentStep !== 10 && state.currentStep !== 0 && <Group position="apart">
              <Button variant="outline" color="dark" onClick={prevStep} leftIcon={<ArrowLeft size={16} />}>
                Back
              </Button>
              <Button color="dark" onClick={nextStep} rightIcon={<ArrowRight size={16} />}>
                {state.currentStep === 9 ? 'Generate Boilerplate' : 'Continue'}
              </Button>
            </Group>}
        </Stack>
      </div>
      <footer className="bg-black border-t border-gray-800 py-4 mt-auto">
        <div className="max-w-[900px] mx-auto px-4">
          <Text size="sm" c="gray" ta="center">
            © 2023 SAAS Machine. Create your perfect SaaS boilerplate in
            minutes.
          </Text>
        </div>
      </footer>
    </div>;
}