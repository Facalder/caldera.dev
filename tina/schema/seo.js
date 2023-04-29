export const seo = {
  name: 'seo',
  label: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      label: 'Meta Title',
      type: 'string',
      description: 'Meta tag title and meta og:title',
      ui: {
        component: 'text',
      },
    },
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'string',
      description: 'Meta tag description and meta og:description',
      ui: {
        component: 'textarea',
      },
    },
    {
      name: 'metaType',
      label: 'Meta Type',
      type: 'string',
      description: 'Meta tag type and og:type (Type of your website)',
      ui: {
        component: 'text',
      },
    },
    {
      name: 'metaImage',
      label: 'Meta Image',
      type: 'object',
      description: 'Upload image for Meta tag og:image',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'image',
          description: 'Upload Image',
        },
        {
          name: 'alt',
          label: 'Meta Image ALT',
          type: 'string',
          description: 'Meta tag og:alt',
          ui: {
            component: 'text',
          },
        },
      ],
    },
  ],
}
