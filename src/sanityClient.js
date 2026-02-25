import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '0y3z7qip',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-02-25',
})