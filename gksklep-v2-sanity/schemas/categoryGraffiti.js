import { BiSprayCan } from "react-icons/bi";

export default {
  name: "categoryGraffiti",
  title: "CategoryGraffiti",
  type: "document",
  icon: BiSprayCan,
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