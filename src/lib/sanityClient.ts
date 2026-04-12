import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '1v5mp0as',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
