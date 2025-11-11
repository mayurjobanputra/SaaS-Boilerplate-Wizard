import React from 'react';
import { useWizard } from '../WizardContext';
import { Radio, Stack, Text, Title } from '@mantine/core';
export function PaymentStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handlePaymentProviderChange = (value: string) => {
    updateState({
      payment: {
        provider: value
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          Payment Provider
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Select a payment provider for handling transactions in your SaaS
          application.
        </Text>
        <Radio.Group value={state.payment.provider} onChange={handlePaymentProviderChange}>
          <Stack spacing="md" className="mt-6">
            <Radio value="stripe" label="Stripe" description="Popular payment processor with extensive features" />
            <Radio value="lemon-squeezy" label="Lemon Squeezy" description="Merchant of record with built-in tax handling" />
            <Radio value="paypal" label="PayPal" description="Widely recognized payment platform" />
            <Radio value="none" label="None" description="Skip payment integration for now" />
          </Stack>
        </Radio.Group>
      </div>
    </Stack>;
}