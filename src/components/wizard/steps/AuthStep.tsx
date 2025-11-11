import React from 'react';
import { useWizard } from '../WizardContext';
import { Checkbox, Radio, Stack, Switch, Text, Title } from '@mantine/core';
export function AuthStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleAuthEnabledChange = (checked: boolean) => {
    updateState({
      auth: {
        ...state.auth,
        enabled: checked
      }
    });
  };
  const handleProviderChange = (value: string) => {
    updateState({
      auth: {
        ...state.auth,
        provider: value
      }
    });
  };
  const handleFeatureChange = (value: string) => {
    let newFeatures = [...state.auth.features];
    if (newFeatures.includes(value)) {
      newFeatures = newFeatures.filter(item => item !== value);
    } else {
      newFeatures.push(value);
    }
    updateState({
      auth: {
        ...state.auth,
        features: newFeatures
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          Authentication
        </Title>
        <div className="flex items-center mb-4">
          <Switch checked={state.auth.enabled} onChange={event => handleAuthEnabledChange(event.currentTarget.checked)} label="Enable Authentication" size="md" />
        </div>
      </div>
      {state.auth.enabled && <>
          <div>
            <Title order={4} className="mb-2">
              Authentication Provider
            </Title>
            <Text size="sm" c="dimmed" className="mb-4">
              Select your preferred authentication method.
            </Text>
            <Radio.Group value={state.auth.provider} onChange={handleProviderChange}>
              <Stack spacing="md" className="mt-6">
                <Radio value="jwt" label="JWT (JSON Web Tokens)" />
                <Radio value="oauth" label="OAuth (Google, GitHub, etc.)" />
                <Radio value="firebase" label="Firebase Authentication" />
                <Radio value="auth0" label="Auth0" />
                <Radio value="supabase" label="Supabase Auth" />
                <Radio value="clerk" label="Clerk" />
                <Radio value="custom" label="Custom Solution" />
              </Stack>
            </Radio.Group>
          </div>
          <div>
            <Title order={4} className="mb-2">
              Authentication Features
            </Title>
            <Text size="sm" c="dimmed" className="mb-4">
              Select the authentication features you need.
            </Text>
            <Stack spacing="md" className="mt-6">
              <Checkbox label="User Registration" checked={state.auth.features.includes('registration')} onChange={() => handleFeatureChange('registration')} />
              <Checkbox label="Email Verification" checked={state.auth.features.includes('email_verification')} onChange={() => handleFeatureChange('email_verification')} />
              <Checkbox label="Password Reset" checked={state.auth.features.includes('password_reset')} onChange={() => handleFeatureChange('password_reset')} />
              <Checkbox label="Social Login" checked={state.auth.features.includes('social_login')} onChange={() => handleFeatureChange('social_login')} />
              <Checkbox label="Two-Factor Authentication" checked={state.auth.features.includes('2fa')} onChange={() => handleFeatureChange('2fa')} />
              <Checkbox label="Role-based Access Control" checked={state.auth.features.includes('rbac')} onChange={() => handleFeatureChange('rbac')} />
            </Stack>
          </div>
        </>}
    </Stack>;
}