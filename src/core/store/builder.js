import { Store } from "hermes-io";
import { ThemeContext } from "contexts/Theme";
import { ThemeObserver } from "observers/Theme";

const builder = new Store({ context: ThemeContext, observer: ThemeObserver });

export default builder;