import { ADProvider } from "components/ADProvider/ADProvider";
import "@/index.css";

const preview = {
  decorators: [
    (Story) => (
      <ADProvider>
        <Story />
      </ADProvider>
    ),
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
