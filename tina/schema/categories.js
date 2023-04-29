export const category = {
  name: 'category',
  label: 'Category',
  path: 'content/category',
  format: 'mdx',
  fields: [
    {
      name: 'name',
      label: 'Category',
      required: true,
      type: 'string',
      description: 'Enter the name of the category here',
      ui: {
        component: 'text',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      description: 'Enter the description of the category here',
      ui: {
        component: 'textarea',
      },
    },
    {
      component: 'text',
      name: 'icon',
      label: 'Icon',
      type: 'string',
      description:
        'Enter the remix icon class of the category here (fill with -)',
      ui: {
        component: 'text',
      },
    },
  ],
}
