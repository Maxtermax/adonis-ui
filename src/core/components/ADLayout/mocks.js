import _, { delay } from "lodash";
import mock from "ADMedia/mock";

const { uniqueId } = _;

export const getProducts = (total) =>
  new Array(total).fill(null).map(() => ({ ...mock, id: uniqueId() }));

