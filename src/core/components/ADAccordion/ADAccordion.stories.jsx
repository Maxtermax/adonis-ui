import { ACCORDION_PANEL, ACCORDION_CONTENT } from "constants";
import { ADAccordion } from "components/ADAccordion/ADAccordion";
import { ADPanel } from "components/ADPanel/ADPanel";
import { ADText } from "components/ADText/ADText";

const mock = [
  {
    id: 1,
    label: "One",
    type: ACCORDION_PANEL,
    isExpanded: true,
    content: [
      {
        id: 2,
        type: ACCORDION_CONTENT,
        content: (
          <ADPanel
            style={{
              margin: "8px",
              width: "100%",
              height: "100%",
            }}
          >
            <ADText value="test" variant="text" />
          </ADPanel>
        ),
      },
      {
        id: 3,
        label: "Two",
        type: ACCORDION_PANEL,
        isExpanded: true,
        content: [
          {
            id: 4,
            type: ACCORDION_CONTENT,
            content: (
              <ADPanel
                style={{
                  margin: "8px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ADText value="test" variant="text" />
              </ADPanel>
            ),
          },
        ],
      },
    ],
  },
];

export default {
  title: "Basic/ADAccordion",
  component: ADAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      table: { disable: true },
    },
    id: {
      table: { disable: true },
    },
  },
};

export const Accordion = (args) => (
  <>
    <ADAccordion data={mock} {...args} />
  </>
);
