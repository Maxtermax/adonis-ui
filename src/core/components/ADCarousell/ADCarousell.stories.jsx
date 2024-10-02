import { useMutations } from "hermes-io";
import mock from "ADMedia/mock";
import ADCarousell from "ADCarousell";
import { actions } from "./reducer";
import { newPage } from "./mutations";
import { microCarousellStore } from "./store";
import _ from "lodash";

const { uniqueId } = _;

const data = new Array(5).fill(null).map(() => {
  const uniq = uniqueId();
  return { ...mock, name: mock.name + " " + uniq, id: uniq };
});

export default {
  title: "Basic/ADCarousell",
  component: ADCarousell,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const id = "carousell";

const Template = () => {
  const { onEvent } = useMutations({
    noUpdate: true,
    store: microCarousellStore,
    id,
  });

  onEvent(actions.NEXT_PAGE, (_, resolver) => {
    setTimeout(() => {
      resolver();
      newPage({
        value: new Array(5).fill(null).map(() => {
          const uniq = uniqueId();
          return {
            ...mock,
            name: mock.name + " " + uniq,
            id: uniq,
          };
        }),
        store: microCarousellStore.get(id),
        id,
      });
    }, 1000);
  });

  return <ADCarousell id={id} data={data} />;
};

export const Primary = Template.bind({});
