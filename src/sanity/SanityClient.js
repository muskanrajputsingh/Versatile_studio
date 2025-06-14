import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'zysshxf3', 
  dataset: 'versatile',
  apiVersion: '2025-06-14', // use a fixed date
  useCdn: true, // use `false` if you want fresh data
});
