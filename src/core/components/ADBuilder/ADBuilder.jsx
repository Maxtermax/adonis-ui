import { useMutations, useStore } from "hermes-io";
import { useTheme } from "@emotion/react";
import { ADGrid } from "components/ADGrid/ADGrid";
import { ADCard } from "components/ADCard/ADCard";
// import { ADButton } from "components/ADButton/ADButton";
import buildTheme from "theme/theme";
import Colors from "./Colors/Colors";
import Header from "./Header/Header";
import store from "store/builder";
import reducer from "reducers/builder";
import { getTheme } from "queries/builder";
import {
  THEME,
  SAVE_THEME,
  SET_THEME_FIELD,
  COMPONENTS_TARGETS,
} from "constants";
import * as styles from "./styles";

const id = "ad-builder";

export const Content = ({ className = "", ...rest }) => {
  const theme = useTheme();
  return (
    <styles.Content className={`__content ${className}`} {...rest}>
      <Colors values={theme.colors} />
    </styles.Content>
  );
};

export const Footer = () => {
  const handleSave = () => {
    store.mutate({
      type: SAVE_THEME,
      targets: [id],
    });
  };

  return (
    <p>
      <button onClick={handleSave}>
        <p>Example</p>
      </button>
    </p>
  );
};

const Main = ({ render, base }) => {
  const { state: customTheme } = useMutations({
    onChange: () => store.query(getTheme),
    events: [SET_THEME_FIELD],
    initialState: {},
    store,
    id: COMPONENTS_TARGETS.ADBUILDER,
  });
  return render({ ...base, ...customTheme });
};

export const ADBuilder = ({ render }) => {
  const BASE_THEME = buildTheme(THEME.LIGHT);
  useStore({
    store,
    reducer,
    data: { ...BASE_THEME },
  });

  return (
    <styles.Container className="ad-builder__container">
      <ADGrid
        className="__grid"
        alignCenter
        justifyCenter
        fullHeight
        cols="1fr 300px"
        rows="1fr"
      >
        <styles.Left className="__left-col">
          <Main render={render} base={BASE_THEME} />
        </styles.Left>
        <styles.Right className="__right-col">
          <ADCard
            width={(theme) => `calc(100% - ${theme.spacing.medium})`}
            height={(theme) => `calc(100% - ${theme.spacing.medium})`}
            alignContent="flex-start"
            Content={() => <Content />}
            Header={() => <Header name={THEME.LIGHT} />}
            Footer={() => <Footer />}
            noScaleOnHover
            elevation="none"
            gap="regular"
            shape="sharp"
            variant="contained"
          />
        </styles.Right>
      </ADGrid>
    </styles.Container>
  );
};
