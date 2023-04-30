export const media = {
  name: 'media',
  label: 'Media',
  type: 'object',
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'image',
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'string',
      ui: {
        component: 'text',
      },
    },
    {
      name: 'alt',
      label: 'ALT',
      type: 'string',
      ui: {
        component: 'text',
      },
    },
  ],
}
