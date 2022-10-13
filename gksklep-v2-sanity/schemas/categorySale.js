import { GiPayMoney } from "react-icons/gi";

export default {
  name: "categorySale",
  title: "CategorySale",
  type: "document",
  icon: GiPayMoney,
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