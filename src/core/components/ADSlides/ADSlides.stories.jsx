import { ADSlides } from "./ADSlides";

export default {
  title: "Basic/ADSlides",
  component: ADSlides,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Basic = () => (
  <ADSlides
    data={[
      {
        link: "#",
        id: 1,
        title: "Product 1",
        src: "https://placehold.co/1200x700",
      },

      {
        link: "#",
        id: 2,
        title: "Product 2",
        src: "https://placehold.co/1200x700",
      },

      {
        link: "#",
        id: 3,
        title: "Product 3",
        src: "https://placehold.co/1200x700",
      },
    ]}
  />
);
