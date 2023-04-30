export const media = {
  name: 'media',
  label: 'Media',
  type: 'object',
  fields: [
    {
      name: 'image',
      label: 'image',
      type: 'image',
    },
    {
      name: 'caption',
      label: 'caption',
      type: 'string',
      required: true,
      ui: {
        component: 'text',
      },
    },
    {
      name: 'alt',
      label: 'alt',
      type: 'string',
      ui: {
        component: 'text',
      },
    },
  ],
}
