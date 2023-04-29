import { seo } from './seo'

export const post = {
  name: 'post',
  label: 'Blog Post',
  path: 'content/posts',
  format: 'mdx',
  fields: [
    {
      name: 'draft',
      label: 'Draft',
      type: 'boolean',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      description: 'Enter the title of the post here',
      ui: {
        component: 'text',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      description: 'Enter the description of the post here',
      ui: {
        component: 'textarea',
      },
    },
    seo,
  ],
}
