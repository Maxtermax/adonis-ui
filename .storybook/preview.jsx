/** @type { import('@storybook/react').Preview } */
import ADProvider from "components/ADProvider/ADProvider";
import reducer from "reducers/products";
import store from "store/app";

const preview = {
  decorators: [
    (Story) => {
      console.log("preview");
      return (
        <ADProvider
          initialData={{ products: [] }}
          reducer={reducer}
          store={store}
        >
          <Story />
        </ADProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
