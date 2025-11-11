import React from 'react';
import { useWizard } from '../WizardContext';
import { Radio, Stack, Text, Title } from '@mantine/core';
export function CodeEditorStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleCodeEditorChange = (value: string) => {
    updateState({
      devEnvironment: {
        ...state.devEnvironment,
        codeEditor: value
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          Code Editor
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Choose your preferred code editor so we can include relevant
          configuration files.
        </Text>
        <Radio.Group value={state.devEnvironment.codeEditor} onChange={handleCodeEditorChange}>
          <Stack spacing="md" className="mt-6">
            <Radio value="vscode" label="Visual Studio Code" />
            <Radio value="intellij" label="IntelliJ / WebStorm" />
            <Radio value="vim" label="Vim / NeoVim" />
            <Radio value="sublime" label="Sublime Text" />
            <Radio value="other" label="Other" />
          </Stack>
        </Radio.Group>
      </div>
    </Stack>;
}