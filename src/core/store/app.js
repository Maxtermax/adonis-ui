import { Store } from "hermes-io";
import { ProductsContext } from "contexts/Products";
import { ProductsObserver } from "observers/Products";

const app = new Store({ context: ProductsContext, observer: ProductsObserver });

export default app;
