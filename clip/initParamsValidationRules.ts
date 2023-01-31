export default {
  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        images: { type: "array", items: { type: "string" } },
        name: { type: "string" },
        description: { type: "string" },
      },
    },
  },
};
