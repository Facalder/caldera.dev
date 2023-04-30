import { media } from './object/media'
import { seo } from './object/seo'

export const posts = {
  name: 'post',
  label: 'Post',
  path: 'content/posts',
  format: 'mdx',
  fields: [
    {
      name: 'draft',
      label: 'Draft',
      type: 'boolean',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      isTitle: true,
      required: true,
      ui: {
        component: 'text',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      ui: {
        component: 'textarea',
      },
    },
    media,
    {
      name: 'post',
      label: 'Content Post',
      type: 'rich-text',
      isBody: true,
    },
    {
      name: 'category',
      label: 'Category',
      type: 'reference',
      collections: ['category'],
    },
    {
      name: 'author',
      label: 'Author',
      type: 'reference',
      collections: ['author'],
    },
    {
      name: 'publishedAt',
      label: 'Published At',
      type: 'datetime',
    },
    seo,
  ],
}
