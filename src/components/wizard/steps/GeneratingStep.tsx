import React, { useEffect, useState } from 'react';
import { useWizard } from '../WizardContext';
import { Button, Group, Loader, Progress, Stack, Text, Title, Paper } from '@mantine/core';
import { Download, Twitter, Facebook } from 'lucide-react';
export function GeneratingStep() {
  const {
    state
  } = useWizard();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    const steps = [{
      progress: 10,
      status: 'Setting up project structure...'
    }, {
      progress: 20,
      status: 'Configuring development environment...'
    }, {
      progress: 30,
      status: 'Adding authentication...'
    }, {
      progress: 45,
      status: 'Setting up database connections...'
    }, {
      progress: 60,
      status: 'Implementing API endpoints...'
    }, {
      progress: 75,
      status: 'Installing UI framework...'
    }, {
      progress: 85,
      status: 'Adding requested features...'
    }, {
      progress: 95,
      status: 'Optimizing and finalizing...'
    }, {
      progress: 100,
      status: 'Complete! Your boilerplate is ready.'
    }];
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].progress);
        setStatus(steps[currentStep].status);
        currentStep++;
        if (currentStep === steps.length) {
          setIsComplete(true);
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  const handlePost = (platform: string) => {
    alert(`Posting to ${platform}!`);
  };
  return <Stack spacing="xl" className="py-4">
      <div className="text-center">
        <Title order={2} className="mb-2 text-black">
          {isComplete ? 'Your SaaS Boilerplate is Ready!' : 'Generating Your SaaS Boilerplate'}
        </Title>
        <Text c="gray">
          {isComplete ? 'Download your custom boilerplate and start building right away.' : 'Please wait while we prepare your custom boilerplate...'}
        </Text>
      </div>
      <div>
        <Group position="apart" mb="xs">
          <Text size="sm" fw={500} className="text-black">
            {status}
          </Text>
          <Text size="sm" fw={500} className="text-black">
            {progress}%
          </Text>
        </Group>
        <Progress value={progress} size="xl" radius="xl" striped={!isComplete} animate={!isComplete} color="black" />
      </div>
      {!isComplete && <div className="flex justify-center items-center py-4">
          <Loader size={32} color="black" />
        </div>}
      {isComplete && <Stack spacing="md">
          <Button size="lg" color="dark" leftIcon={<Download size={18} />} className="mx-auto">
            Download Boilerplate
          </Button>
          <div className="mt-6">
            <Text size="sm" fw={500} className="mb-4 text-center text-black">
              Share your recipe with others:
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Paper withBorder p="md" radius="md" className="border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Twitter size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <Text fw={600} size="sm" className="text-black mb-1">
                      Your Name
                    </Text>
                    <Text size="xs" c="gray">
                      @yourusername
                    </Text>
                  </div>
                </div>
                <Text size="sm" className="mb-3 text-black">
                  Just created my perfect SaaS boilerplate with SAAS Machine! 🚀
                  <br />
                  <br />
                  Recipe ID: {state.recipeId.substring(0, 8)}
                  <br />
                  <br />
                  Try it yourself at saasmachine.co
                </Text>
                <Button fullWidth color="dark" onClick={() => handlePost('Twitter')}>
                  Post to Twitter
                </Button>
              </Paper>
              <Paper withBorder p="md" radius="md" className="border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Facebook size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <Text fw={600} size="sm" className="text-black">
                      Your Name
                    </Text>
                  </div>
                </div>
                <Text size="sm" className="mb-3 text-black">
                  Just created my perfect SaaS boilerplate with SAAS Machine! 🚀
                  <br />
                  <br />
                  Recipe ID: {state.recipeId.substring(0, 8)}
                  <br />
                  <br />
                  Try it yourself at saasmachine.co
                </Text>
                <Button fullWidth color="dark" onClick={() => handlePost('Facebook')}>
                  Post to Facebook
                </Button>
              </Paper>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mt-4 border border-gray-200">
            <Text size="sm" ta="center" className="text-black">
              Your Recipe ID:{' '}
              <span className="font-mono font-medium">
                {state.recipeId.substring(0, 8)}
              </span>
              <br />
              Use this ID to regenerate this exact boilerplate configuration
              anytime.
            </Text>
          </div>
        </Stack>}
    </Stack>;
}