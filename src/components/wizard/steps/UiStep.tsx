import React from 'react';
import { useWizard } from '../WizardContext';
import { Radio, Stack, Text, Title } from '@mantine/core';
export function UiStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleFrameworkChange = (value: string) => {
    updateState({
      ui: {
        ...state.ui,
        framework: value
      }
    });
  };
  const handleThemeChange = (value: string) => {
    updateState({
      ui: {
        ...state.ui,
        theme: value
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          UI Framework
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Select your preferred UI component library.
        </Text>
        <Radio.Group value={state.ui.framework} onChange={handleFrameworkChange}>
          <Stack spacing="md" className="mt-6">
            <Radio value="none" label="None (CSS only)" />
            <Radio value="tailwind" label="Tailwind CSS" />
            <Radio value="shadcn" label="shadcn/ui (Tailwind + Radix)" />
            <Radio value="mantine" label="Mantine" />
            <Radio value="chakra" label="Chakra UI" />
            <Radio value="mui" label="Material UI" />
            <Radio value="antd" label="Ant Design" />
            <Radio value="bootstrap" label="React Bootstrap" />
          </Stack>
        </Radio.Group>
      </div>
      <div>
        <Title order={4} className="mb-2">
          Theme
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Choose a theme system for your application.
        </Text>
        <Radio.Group value={state.ui.theme} onChange={handleThemeChange}>
          <Stack spacing="md" className="mt-6">
            <Radio value="light" label="Light Mode Only" />
            <Radio value="dark" label="Dark Mode Only" />
            <Radio value="both" label="Light & Dark Mode Toggle" />
            <Radio value="system" label="System Preference" />
          </Stack>
        </Radio.Group>
      </div>
    </Stack>;
}