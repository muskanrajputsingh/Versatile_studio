export default {
    name: 'workHighlight',
    title: 'Work Highlight',
    type: 'document',
    fields: [
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Example: UI/UX Design, Webflow Development, Animation',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Example: E54 · Marketing Efficiency Platform',
        validation:Rule=>Rule.required().error("This Field is Required."),
      },
      {
        name: 'liveLink',
        title: 'View Live Site URL',
        type: 'url',
      },
      {
        name: 'projectImageUrl',
        title: 'Project Image URL',
        type: 'url',
        description: 'Paste hosted image URL (e.g. Cloudinary, CDN, etc.)',
        validation:Rule=>Rule.required().error("This Field is Required."),
      },
      {
        name: 'projectIcon',
        title: 'Project Icon Url',
        type: 'url',
        description: 'Enter Icon Image Url',
      },
      {
        name: 'feedback',
        title: 'Client Feedback',
        type: 'text',
      },
      {
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
      },
      {
        name: 'clientTitle',
        title: 'Client Title & Company',
        type: 'string',
        description: 'Example: Co-founder – e54.io',
      },
      {
        name: 'clientImageUrl',
        title: 'Client Image URL',
        type: 'url',
      },
    ],
  };
  