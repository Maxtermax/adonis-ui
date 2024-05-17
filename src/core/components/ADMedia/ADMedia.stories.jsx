import { ADMedia } from "components/ADMedia/ADMedia";
import { Mock } from "./mock";
import { setProducts } from "mutations/products";

const withScript = (Story, args) => {
  const mock = new Mock();
  const products = mock.getProducts();
  const [product] = products;
  setProducts(products);
  console.log({ product });

  return <Story {...product} {...args} discount={product.discount} />;
};

export default {
  title: "Basic/ADMedia",
  component: ADMedia,
  decorators: [withScript],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <ADMedia {...args} />;

export const Primary = Template.bind({});
