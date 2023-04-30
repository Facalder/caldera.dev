import { media } from './object/media'

export const authors = {
  name: 'author',
  label: 'Author',
  path: 'content/authors',
  format: 'mdx',
  fields: [
    {
      name: 'draft',
      label: 'Draft',
      type: 'boolean',
    },
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      required: true,
      isTitle: true,
      ui: {
        component: 'text',
      },
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'string',
      ui: {
        component: true,
      },
    },
    media,
    {
      name: 'social',
      label: 'Social Media',
      type: 'object',
      list: true,
      fields: [
        {
          name: 'name',
          label: 'Sosial Media',
          type: 'string',
          ui: {
            component: 'text',
          },
        },
        {
          name: 'link',
          label: 'Link Social Media',
          type: 'string',
          ui: {
            component: 'text',
          },
        },
      ],
    },
  ],
}
