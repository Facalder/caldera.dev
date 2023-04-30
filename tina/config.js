import { defineConfig } from 'tinacms'

import { authors } from './schema/authors'
import { categories } from './schema/categories'
import { posts } from './schema/posts'

const branch =
  process.env.HEAD ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  'feature/content' ||
  process.env.NEXT_PUBLIC_TINA_CLOUD_BRANCH

const clientId =
  // process.env.NEXT_PUBLIC_TINA_CLOUD_CLIENT_ID ||
  // process.env.TINA_CLOUD_CLIENT_ID
  '6a0fdd3f-9126-4403-b8a7-544fa4a2b79d'
const token =
  // process.env.NEXT_PUBLIC_TINA_CLOUD_TOKEN || process.env.TINA_CLOUD_TOKEN
  'f21180dcfe2fdb1d61ac88666795ff7a940826c0'

export default defineConfig({
  branch,
  clientId: clientId,
  token: token,

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
    collections: [posts, categories, authors],
  },
})
