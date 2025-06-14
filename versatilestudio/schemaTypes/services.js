export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation:Rule=>Rule.required().error("This Field is Required."),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name:'button',
        title:'Button Name',
        type:'string',
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'url',
        validation:Rule=>Rule.required().error("This Field is Required."),
      },
      {
        name: 'badgeIconUrl',
        title: 'Badge Icon URL',
        type: 'url',
      },   
      {
        name: 'badgeText',
        title: 'Badge Text',
        type: 'string',
      },  
    ],
  };
  