import { FaTshirt } from "react-icons/fa";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: FaTshirt,
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
      to: [{ type: "categoryProduct" }],
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
      name: "price",
      title: "Cena",
      type: "number",
    },
    {
      name: "description",
      title: "Opis",
      type: "text",
    },
    
  ],
};