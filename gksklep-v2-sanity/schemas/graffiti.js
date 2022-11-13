import { GiSpray } from "react-icons/gi";

export default {
  name: "graffiti",
  title: "Graffiti",
  type: "document",
  icon: GiSpray,
  fields: [
    {
      name: "title",
      title: "Tytuł",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
        name: 'location',
        type: 'geopoint',
        title: 'Location'
    },
    {
      name: "image",
      title: "Zdjęcie",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Kategoria",
      type: "reference",
      to: [{ type: "categoryGraffiti" }],
    },
    {
      title: 'dodatkowe Informacje',
      name: 'additionalInfo',
      type: 'array',
      of: [
         {
             title: 'info',
             name: 'info',
             type: 'object',
             fields: [
              {
                title: 'text',
                name: 'text',
                type: 'string'
              },
             ]
         },
      ]
     },
     {
      name: "description",
      title: "Opis",
      type: "text",
    },
  ],
};