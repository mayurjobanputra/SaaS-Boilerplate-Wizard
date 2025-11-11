import React from 'react';
import { useWizard } from '../WizardContext';
import { Checkbox, Stack, Text, Title } from '@mantine/core';
export function FeaturesStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleFeatureChange = (feature: string, checked: boolean) => {
    updateState({
      features: {
        ...state.features,
        [feature]: checked
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          Features
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Select the features you want to include in your SaaS boilerplate.
        </Text>
        <Stack spacing="md" className="mt-6">
          <Checkbox label="Dashboard" description="Admin dashboard with overview statistics" checked={state.features.dashboard} onChange={event => handleFeatureChange('dashboard', event.currentTarget.checked)} />
          <Checkbox label="User Profile" description="User profile management pages" checked={state.features.userProfile} onChange={event => handleFeatureChange('userProfile', event.currentTarget.checked)} />
          <Checkbox label="Settings" description="User settings and preferences" checked={state.features.settings} onChange={event => handleFeatureChange('settings', event.currentTarget.checked)} />
          <Checkbox label="Billing & Subscription" description="Payment integration and subscription management" checked={state.features.billing} onChange={event => handleFeatureChange('billing', event.currentTarget.checked)} />
          <Checkbox label="Analytics" description="User behavior tracking and analytics" checked={state.features.analytics} onChange={event => handleFeatureChange('analytics', event.currentTarget.checked)} />
          <Checkbox label="Admin Panel" description="Administrative tools and user management" checked={state.features.admin} onChange={event => handleFeatureChange('admin', event.currentTarget.checked)} />
        </Stack>
      </div>
    </Stack>;
}