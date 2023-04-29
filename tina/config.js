import { defineConfig } from 'tinacms'

import { category } from './schema/categories'
import { post } from './schema/posts'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'feature/content'

const clientId = '6a0fdd3f-9126-4403-b8a7-544fa4a2b79d'
const token = 'f21180dcfe2fdb1d61ac88666795ff7a940826c0'

export default defineConfig({
  branch,
  clientId: clientId,
  token: token, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [post, category],
  },
})
