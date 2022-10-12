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
        type: 'document',
        fields: [
            {
            title: 'S',
            name: 's',
            type: 'boolean'
          },
            {
            title: 'M',
            name: 'm',
            type: 'boolean'
          },
            {
            title: 'L',
            name: 'l',
            type: 'boolean'
          },
            {
            title: 'XL',
            name: 'xl',
            type: 'boolean'
          },
            {
            title: 'XXL',
            name: 'xxl',
            type: 'boolean'
          },
        ]
      },
      {
        title: 'Rozmiarowka',
        name: 'rozmiarowka',
        type: 'document',
        fields: [
            {
            title: 'S',
            name: 's',
            type: 'number'
          },
            {
            title: 'M',
            name: 'm',
            type: 'number'
          },
            {
            title: 'L',
            name: 'l',
            type: 'number'
          },
            {
            title: 'XL',
            name: 'xl',
            type: 'number'
          },
            {
            title: 'XXL',
            name: 'xxl',
            type: 'number'
          },
        ]
      },
    {
      name: "price",
      title: "Cena",
      type: "number",
    },
    {
      name: "description",
      title: "Opis",
      type: "blockContent",
    },
  ],
};