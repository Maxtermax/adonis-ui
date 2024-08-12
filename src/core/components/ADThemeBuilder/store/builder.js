import { Store } from "hermes-io";
import { ThemeContext } from "ADThemeBuilder/context/Theme";
import { ThemeObserver } from "ADThemeBuilder/observer/Theme";

const builder = new Store({ context: ThemeContext, observer: ThemeObserver });

export default builder;
