export default {
    name: 'dropdownService',
    type: 'document',
    title: 'Dropdown Service',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Dropdown Title',
      },
      {
        name: 'items',
        type: 'array',
        title: 'Dropdown Items',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'label', type: 'string', title: 'Label' },
              { name: 'url', type: 'url', title: 'Link URL' },
            ]
          }
        ]
      }
    ]
  }
  