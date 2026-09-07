import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { esESLocale } from '@sanity/locale-es-es'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'jm-aislamientos',
  title: 'JM Aislamientos y Revestimientos',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    esESLocale({ title: 'Español' }),
  ],
  schema: {
    types: schemaTypes,
  },
})
