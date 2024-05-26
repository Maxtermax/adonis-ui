// import { useMutations, useStore } from "hermes-io";
import { useTheme } from "@emotion/react";
import { ADGrid } from "components/ADGrid/ADGrid";
import { ADCard } from "components/ADCard/ADCard";
// import { ADButton } from "components/ADButton/ADButton";
import buildTheme from "theme/theme";
import Colors from "./Colors";
import { THEME, SAVE_THEME } from "constants";
import * as styles from "./styles";
import store from "store/builder";
// import reducer from "reducers/builder";

const id = "ad-builder";

export const Content = ({ className = "", ...rest }) => {
  const theme = useTheme();
  return (
    <styles.Container className={`ad-builder ${className}`} {...rest}>
      <Colors values={theme.colors} />
    </styles.Container>
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
      <button onClick={handleSave} variant="contained">
        <p>Example</p>
      </button>
    </p>
  );
};

export const ADBuilder = ({ render }) => {
  /*
  useStore({
    store,
    reducer,
    data: {},
  });

  const { state: customEntries } = useMutations({
    onChange: ({ value }) => {
      // setCustomEntries((oldEntries) => ({ ...oldEntries, ...value })),
      return {};
    },
    events: [SAVE_THEME],
    initialState: {},
    store,
    id,
  });
  console.log({ customEntries });

  const customTheme = (rootTheme) => ({
    ...rootTheme,
  });
  */

  // const content = render(buildTheme(THEME.LIGHT));
  const content = [];

  return (
    <styles.Container>
      <ADGrid alignCenter justifyCenter fullHeight cols="1fr 300px" rows="1fr">
        <styles.Left>{content}</styles.Left>
        {/*
        <styles.Right>
          <ADCard
            width={(theme) => `calc(100% - ${theme.spacing.medium})`}
            height={(theme) => `calc(100% - ${theme.spacing.medium})`}
            alignContent="flex-start"
            Content={() => <Content />}
            Header={() => <p>HEADER</p>}
            Footer={() => <Footer />}
            noScaleOnHover
            elevation="none"
            gap="regular"
            shape="sharp"
            variant="contained"
          />
        </styles.Right>
      */}
      </ADGrid>
    </styles.Container>
  );
};
