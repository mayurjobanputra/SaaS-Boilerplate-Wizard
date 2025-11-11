import React from 'react';
import { useWizard } from '../WizardContext';
import { Checkbox, Stack, Text, Title } from '@mantine/core';
export function AiAssistantsStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleAIAssistantChange = (value: string) => {
    let newAssistants = [...state.devEnvironment.aiAssistants];
    if (newAssistants.includes(value)) {
      newAssistants = newAssistants.filter(item => item !== value);
    } else {
      newAssistants.push(value);
    }
    updateState({
      devEnvironment: {
        ...state.devEnvironment,
        aiAssistants: newAssistants
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2 text-black">
          AI Assistants
        </Title>
        <Text size="sm" c="gray" className="mb-6">
          Select the AI coding assistants you plan to use with this project.
          Your boilerplate will include optimized markdown documentation files
          to help you get started quickly with your chosen AI assistants.
        </Text>
        <Stack spacing="md" className="mt-8">
          <Checkbox label={<span className="text-black">GitHub Copilot</span>} checked={state.devEnvironment.aiAssistants.includes('copilot')} onChange={() => handleAIAssistantChange('copilot')} color="dark" />
          <Checkbox label={<span className="text-black">Claude</span>} checked={state.devEnvironment.aiAssistants.includes('claude')} onChange={() => handleAIAssistantChange('claude')} color="dark" />
          <Checkbox label={<span className="text-black">GPT-4 / ChatGPT</span>} checked={state.devEnvironment.aiAssistants.includes('gpt')} onChange={() => handleAIAssistantChange('gpt')} color="dark" />
          <Checkbox label={<span className="text-black">Amazon CodeWhisperer</span>} checked={state.devEnvironment.aiAssistants.includes('codewhisperer')} onChange={() => handleAIAssistantChange('codewhisperer')} color="dark" />
          <Checkbox label={<span className="text-black">None / Other</span>} checked={state.devEnvironment.aiAssistants.includes('none')} onChange={() => handleAIAssistantChange('none')} color="dark" />
        </Stack>
      </div>
    </Stack>;
}