import React from 'react';
import { useWizard } from '../WizardContext';
import { Checkbox, Radio, Stack, Text, Title } from '@mantine/core';
export function ApiStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleApiTypeChange = (value: string) => {
    updateState({
      api: {
        ...state.api,
        type: value
      }
    });
  };
  const handleFeatureChange = (value: string) => {
    let newFeatures = [...state.api.features];
    if (newFeatures.includes(value)) {
      newFeatures = newFeatures.filter(item => item !== value);
    } else {
      newFeatures.push(value);
    }
    updateState({
      api: {
        ...state.api,
        features: newFeatures
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          API Type
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Select how you want to handle API requests in your application.
        </Text>
        <Radio.Group value={state.api.type} onChange={handleApiTypeChange}>
          <Stack spacing="md" className="mt-6">
            <Radio value="rest" label="REST API" />
            <Radio value="graphql" label="GraphQL" />
            <Radio value="trpc" label="tRPC" />
            <Radio value="rpc" label="JSON-RPC" />
            <Radio value="none" label="No API (Client-only)" />
          </Stack>
        </Radio.Group>
      </div>
      {state.api.type !== 'none' && state.api.type !== '' && <div>
          <Title order={4} className="mb-2">
            API Features
          </Title>
          <Text size="sm" c="dimmed" className="mb-4">
            Select additional API features you want to include.
          </Text>
          <Stack spacing="md" className="mt-6">
            <Checkbox label="API Documentation (Swagger/OpenAPI)" checked={state.api.features.includes('docs')} onChange={() => handleFeatureChange('docs')} />
            <Checkbox label="Request Validation" checked={state.api.features.includes('validation')} onChange={() => handleFeatureChange('validation')} />
            <Checkbox label="Rate Limiting" checked={state.api.features.includes('rate_limiting')} onChange={() => handleFeatureChange('rate_limiting')} />
            <Checkbox label="Caching" checked={state.api.features.includes('caching')} onChange={() => handleFeatureChange('caching')} />
            <Checkbox label="Logging & Monitoring" checked={state.api.features.includes('logging')} onChange={() => handleFeatureChange('logging')} />
            <Checkbox label="Webhook Support" checked={state.api.features.includes('webhooks')} onChange={() => handleFeatureChange('webhooks')} />
          </Stack>
        </div>}
    </Stack>;
}