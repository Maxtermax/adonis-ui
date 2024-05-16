import { ADMedia } from "components/ADMedia/ADMedia";
import { Mock } from "./mock";
import { setProducts } from "mutations/products";

const mock = new Mock();
const products = mock.getProducts();
setProducts(products);

export default {
  title: "Basic/ADMedia",
  component: ADMedia,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => <ADMedia {...args} />;

export const Primary = Template.bind({});

Primary.args = { ...products[0] };
