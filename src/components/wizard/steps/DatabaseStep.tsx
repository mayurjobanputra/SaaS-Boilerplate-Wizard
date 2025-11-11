import React from 'react';
import { useWizard } from '../WizardContext';
import { Radio, Stack, Text, Title } from '@mantine/core';
export function DatabaseStep() {
  const {
    state,
    updateState
  } = useWizard();
  const handleDatabaseTypeChange = (value: string) => {
    updateState({
      database: {
        ...state.database,
        type: value
      }
    });
  };
  const handleORMChange = (value: string) => {
    updateState({
      database: {
        ...state.database,
        orm: value
      }
    });
  };
  return <Stack spacing="xl">
      <div>
        <Title order={4} className="mb-2">
          Database Type
        </Title>
        <Text size="sm" c="dimmed" className="mb-4">
          Select the type of database you want to use in your project.
        </Text>
        <Radio.Group value={state.database.type} onChange={handleDatabaseTypeChange}>
          <Stack spacing="md" className="mt-6">
            <Radio value="postgresql" label="PostgreSQL" />
            <Radio value="mysql" label="MySQL" />
            <Radio value="mongodb" label="MongoDB" />
            <Radio value="sqlite" label="SQLite" />
            <Radio value="neon" label="Neon (Serverless Postgres)" />
            <Radio value="supabase" label="Supabase" />
            <Radio value="firebase" label="Firebase Firestore" />
            <Radio value="none" label="No Database" />
          </Stack>
        </Radio.Group>
      </div>
      {state.database.type !== 'none' && state.database.type !== '' && <div>
          <Title order={4} className="mb-2">
            ORM / Database Access
          </Title>
          <Text size="sm" c="dimmed" className="mb-4">
            Select how you want to interact with your database.
          </Text>
          <Radio.Group value={state.database.orm} onChange={handleORMChange}>
            <Stack spacing="md" className="mt-6">
              {(state.database.type === 'postgresql' || state.database.type === 'mysql' || state.database.type === 'sqlite' || state.database.type === 'neon') && <>
                  <Radio value="prisma" label="Prisma" />
                  <Radio value="typeorm" label="TypeORM" />
                  <Radio value="sequelize" label="Sequelize" />
                </>}
              {state.database.type === 'mongodb' && <>
                  <Radio value="mongoose" label="Mongoose" />
                  <Radio value="prisma" label="Prisma (MongoDB connector)" />
                </>}
              {state.database.type === 'supabase' && <Radio value="supabase-js" label="Supabase JS Client" />}
              {state.database.type === 'firebase' && <Radio value="firebase-sdk" label="Firebase SDK" />}
              <Radio value="raw" label="Raw SQL / Native Queries" />
              <Radio value="other" label="Other" />
            </Stack>
          </Radio.Group>
        </div>}
    </Stack>;
}