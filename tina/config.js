import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = 'feature/content';
process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

const clientId = '6a0fdd3f-9126-4403-b8a7-544fa4a2b79d';
const token = 'f21180dcfe2fdb1d61ac88666795ff7a940826c0';

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
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
