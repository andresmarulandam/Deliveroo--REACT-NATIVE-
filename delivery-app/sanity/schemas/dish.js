export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },
  ],
}
