import { FaBrush } from "react-icons/fa";

export default {
  name: "art",
  title: "Art",
  type: "document",
  icon: FaBrush,
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
      to: [{ type: "categoryArt" }],
    },
    {
      name: "price",
      title: "Cena",
      type: "number",
    },
    {
      name: "description",
      title: "Opis",
      type: "text",
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
      title: 'rozmiarowka',
      name: 'rozmiarowka',
      type: 'array',
      of: [
         {
             title: 'size',
             name: 'size',
             type: 'object',
             fields: [
              {
                title: 'width',
                name: 'width',
                type: 'string'
              },
              {
                title: 'height',
                name: 'height',
                type: 'string'
              },
             ]
         },
      ]
     },
  ],
};