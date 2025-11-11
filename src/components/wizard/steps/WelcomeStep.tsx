import React from 'react';
import { Button, List, Stack, Text, Title } from '@mantine/core';
import { useWizard } from '../WizardContext';
import { ArrowRight, Check } from 'lucide-react';
export function WelcomeStep() {
  const {
    nextStep
  } = useWizard();
  return <Stack spacing="xl">
      <div className="text-center">
        <Title order={1} className="text-black text-4xl mb-2">
          saasmachine.co
        </Title>
        <Text size="lg" c="gray">
          Create your perfect SaaS boilerplate in minutes
        </Text>
      </div>
      <Button size="lg" color="dark" onClick={nextStep} rightIcon={<ArrowRight size={16} />} className="mx-auto">
        Let's Get Started
      </Button>
      <div>
        <Text className="mb-4 text-black">
          Welcome to SAAS Machine, your personal SaaS boilerplate generator.
          We'll help you create a custom boilerplate tailored to your specific
          needs, without all the bloat.
        </Text>
        <Text fw={600} className="mb-2 text-black">
          With SAAS Machine, you can:
        </Text>
        <List spacing="sm" size="md" center className="mt-4" icon={<div className="bg-black rounded-full p-1">
              <Check size={12} className="text-white" />
            </div>}>
          <List.Item>
            <span className="text-black">
              Select your preferred development environment and AI assistants
            </span>
          </List.Item>
          <List.Item>
            <span className="text-black">
              Choose authentication methods that fit your project
            </span>
          </List.Item>
          <List.Item>
            <span className="text-black">
              Configure database and API settings
            </span>
          </List.Item>
          <List.Item>
            <span className="text-black">
              Pick your favorite UI framework and components
            </span>
          </List.Item>
          <List.Item>
            <span className="text-black">Add only the features you need</span>
          </List.Item>
          <List.Item>
            <span className="text-black">
              Share your configuration with others
            </span>
          </List.Item>
        </List>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
        <Text fw={600} className="mb-1 text-black">
          Recipe ID System
        </Text>
        <Text size="sm" className="text-gray-700">
          Each configuration generates a unique Recipe ID that you can save and
          share. Come back anytime and use your Recipe ID to regenerate the same
          boilerplate.
        </Text>
      </div>
    </Stack>;
}