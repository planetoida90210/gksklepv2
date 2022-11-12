import { MdMoney } from "react-icons/md";

export default {
  name: "sale",
  title: "Sale",
  type: "document",
  icon: MdMoney,
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
      to: [{ type: "categorySale" }],
    },
    {
      name: "price",
      title: "Cena",
      type: "number",
    },
    {
      name: "salePrice",
      title: "Promocyjna Cena",
      type: "number"
    },
    {
     title: 'colors',
     name: 'colors',
     type: 'array',
     of: [
        {
            title: 'color',
            name: 'color',
            type: 'object',
            fields: [
              {
                title: 'color',
                name: 'color',
                type: 'text'
              }
            ]
        }
     ]
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
      title: 'Rozmiar',
      name: 'rozmiar',
      type: 'object',
      fieldsets: [
        {name: 'size', title: 'Avilable sizes'}
      ],
      fields: [
          {
          title: 'S',
          name: 's',
          type: 'boolean',
          fieldset: 'size'
        },
          {
          title: 'M',
          name: 'm',
          type: 'boolean',
          fieldset: 'size'
        },
          {
          title: 'L',
          name: 'l',
          type: 'boolean',
          fieldset: 'size'
        },
          {

          title: 'XL',
          name: 'xl',
          type: 'boolean',
          fieldset: 'size'
        },
          {
          title: 'XXL',
          name: 'xxl',
          type: 'boolean',
          fieldset: 'size'
        },
      ],
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
     {
      name: "description",
      title: "Opis",
      type: "text",
    },
  ],
};