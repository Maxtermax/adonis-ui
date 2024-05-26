import { ADMedia } from "components/ADMedia/ADMedia";
import ADProvider from "components/ADProvider/ADProvider";
import reducer from "reducers/products";
import store from "store/app";
import { Mock } from "./mock";

const mock = new Mock();
const products = mock.getProducts();
const [product] = products;
const { discount, price, name, id, images, thumbnails, sizes } = product;

export default {
  title: "Basic/ADMedia",
  component: ADMedia,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => (
  <ADProvider reducer={reducer} store={store} data={{ products }}>
    <ADMedia {...args} />
  </ADProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  thumbnails,
  sizes,
  discount,
  price,
  name,
  id,
  images,
};
