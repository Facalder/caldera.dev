export const categories = {
  name: 'category',
  label: 'Category',
  path: 'content/categories',
  format: 'mdx',
  fields: [
    {
      name: 'draft',
      label: 'Draft',
      type: 'boolean',
    },
    {
      name: 'name',
      label: 'Category',
      type: 'string',
      required: true,
      isTitle: true,
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
    {
      name: 'icon',
      label: 'Icon',
      type: 'string',
    },
  ],
}
