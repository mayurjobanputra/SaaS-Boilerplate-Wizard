import React from 'react';
import { useWizard } from '../WizardContext';
import { Badge, Button, CopyButton, Divider, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { Check, Copy } from 'lucide-react';
export function SummaryStep() {
  const {
    state
  } = useWizard();
  const renderSection = (title: string, content: React.ReactNode) => <Paper withBorder p="md" radius="md">
      <Title order={5} className="mb-3">
        {title}
      </Title>
      {content}
    </Paper>;
  return <Stack spacing="xl">
      <div className="text-center mb-2">
        <Title order={3}>Your SaaS Boilerplate Configuration</Title>
        <Text c="dimmed">
          Review your selections before generating your boilerplate
        </Text>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
        <div>
          <Text fw={600}>Recipe ID</Text>
          <Text size="sm">
            Use this ID to recreate or share your configuration
          </Text>
        </div>
        <Group spacing="xs">
          <Text fw={500} className="font-mono bg-white px-3 py-1 rounded border">
            {state.recipeId.substring(0, 8)}
          </Text>
          <CopyButton value={state.recipeId}>
            {({
            copied,
            copy
          }) => <Button variant="subtle" size="sm" onClick={copy} leftIcon={copied ? <Check size={16} /> : <Copy size={16} />}>
                {copied ? 'Copied' : 'Copy'}
              </Button>}
          </CopyButton>
        </Group>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderSection('Development Environment', <div>
            <Group spacing="xs" mb="xs">
              <Text fw={500}>AI Assistants:</Text>
              {state.devEnvironment.aiAssistants.length > 0 ? <Group spacing="xs">
                  {state.devEnvironment.aiAssistants.map(assistant => <Badge key={assistant} size="sm">
                      {assistant === 'copilot' ? 'GitHub Copilot' : assistant === 'claude' ? 'Claude' : assistant === 'gpt' ? 'GPT-4 / ChatGPT' : assistant === 'codewhisperer' ? 'CodeWhisperer' : 'None'}
                    </Badge>)}
                </Group> : <Text size="sm" c="dimmed">
                  None selected
                </Text>}
            </Group>
            <Group spacing="xs">
              <Text fw={500}>Code Editor:</Text>
              <Text>{state.devEnvironment.codeEditor || 'Not specified'}</Text>
            </Group>
          </div>)}
        {renderSection('Authentication', <div>
            <Group spacing="xs" mb="xs">
              <Text fw={500}>Enabled:</Text>
              <Badge color={state.auth.enabled ? 'green' : 'red'} size="sm">
                {state.auth.enabled ? 'Yes' : 'No'}
              </Badge>
            </Group>
            {state.auth.enabled && <>
                <Group spacing="xs" mb="xs">
                  <Text fw={500}>Provider:</Text>
                  <Text>{state.auth.provider || 'Not selected'}</Text>
                </Group>
                <Text fw={500} mb="xs">
                  Features:
                </Text>
                {state.auth.features.length > 0 ? <Group spacing="xs">
                    {state.auth.features.map(feature => <Badge key={feature} size="sm">
                        {feature === 'registration' ? 'Registration' : feature === 'email_verification' ? 'Email Verification' : feature === 'password_reset' ? 'Password Reset' : feature === 'social_login' ? 'Social Login' : feature === '2fa' ? '2FA' : feature === 'rbac' ? 'RBAC' : feature}
                      </Badge>)}
                  </Group> : <Text size="sm" c="dimmed">
                    None selected
                  </Text>}
              </>}
          </div>)}
        {renderSection('Database', <div>
            <Group spacing="xs" mb="xs">
              <Text fw={500}>Type:</Text>
              <Text>{state.database.type || 'None selected'}</Text>
            </Group>
            {state.database.type && state.database.type !== 'none' && <Group spacing="xs">
                <Text fw={500}>ORM:</Text>
                <Text>{state.database.orm || 'Not selected'}</Text>
              </Group>}
          </div>)}
        {renderSection('API & Middleware', <div>
            <Group spacing="xs" mb="xs">
              <Text fw={500}>Type:</Text>
              <Text>{state.api.type || 'None selected'}</Text>
            </Group>
            {state.api.type && state.api.type !== 'none' && <>
                <Text fw={500} mb="xs">
                  Features:
                </Text>
                {state.api.features.length > 0 ? <Group spacing="xs">
                    {state.api.features.map(feature => <Badge key={feature} size="sm">
                        {feature === 'docs' ? 'Documentation' : feature === 'validation' ? 'Validation' : feature === 'rate_limiting' ? 'Rate Limiting' : feature === 'caching' ? 'Caching' : feature === 'logging' ? 'Logging' : feature === 'webhooks' ? 'Webhooks' : feature}
                      </Badge>)}
                  </Group> : <Text size="sm" c="dimmed">
                    None selected
                  </Text>}
              </>}
          </div>)}
        {renderSection('Payment Provider', <div>
            <Group spacing="xs">
              <Text fw={500}>Provider:</Text>
              <Text>
                {state.payment.provider === 'stripe' ? 'Stripe' : state.payment.provider === 'lemon-squeezy' ? 'Lemon Squeezy' : state.payment.provider === 'paypal' ? 'PayPal' : state.payment.provider === 'none' ? 'None' : 'Not selected'}
              </Text>
            </Group>
          </div>)}
        {renderSection('UI Framework', <div>
            <Group spacing="xs" mb="xs">
              <Text fw={500}>Framework:</Text>
              <Text>{state.ui.framework || 'None selected'}</Text>
            </Group>
            <Group spacing="xs">
              <Text fw={500}>Theme:</Text>
              <Text>
                {state.ui.theme === 'light' ? 'Light Mode Only' : state.ui.theme === 'dark' ? 'Dark Mode Only' : state.ui.theme === 'both' ? 'Light & Dark Mode Toggle' : state.ui.theme === 'system' ? 'System Preference' : 'Not selected'}
              </Text>
            </Group>
          </div>)}
        {renderSection('Features', <div>
            <Group spacing="xs">
              {Object.entries(state.features).map(([key, value]) => value ? <Badge key={key} size="sm">
                    {key === 'dashboard' ? 'Dashboard' : key === 'userProfile' ? 'User Profile' : key === 'settings' ? 'Settings' : key === 'billing' ? 'Billing' : key === 'analytics' ? 'Analytics' : key === 'admin' ? 'Admin Panel' : key}
                  </Badge> : null)}
              {Object.values(state.features).every(v => !v) && <Text size="sm" c="dimmed">
                  None selected
                </Text>}
            </Group>
          </div>)}
      </div>
    </Stack>;
}