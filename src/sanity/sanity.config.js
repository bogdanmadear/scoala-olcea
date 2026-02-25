import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'scoala-olcea',
  title: 'Școala Olcea — CMS',
  projectId: '0y3z7qip',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})