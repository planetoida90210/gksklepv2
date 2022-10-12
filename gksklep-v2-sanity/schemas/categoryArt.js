import { BiBrushAlt } from "react-icons/bi";

export default {
  name: "categoryArt",
  title: "CategoryArt",
  type: "document",
  icon: BiBrushAlt,
  fields: [
    {
      name: "title",
      title: "Title",
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
  ],
};