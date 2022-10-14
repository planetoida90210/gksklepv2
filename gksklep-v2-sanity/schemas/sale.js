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
     title: 'colors',
     name: 'colors',
     type: 'array',
     of: [
        {
            title: 'color',
            name: 'color',
            type: 'string'
        }
     ]
    },
    {
      name: "description",
      title: "Opis",
      type: "blockContent",
    },
  ],
};