import { useMutations, useStore } from "hermes-io";
import { Global, css } from '@emotion/react'
import emotionNormalize from "emotion-normalize";
import { ThemeProvider, useTheme } from "@emotion/react";
import { ADGrid } from "components/ADGrid/ADGrid";
import { ADCard } from "components/ADCard/ADCard";
import { ADAccordion } from "components/ADAccordion/ADAccordion";
// import { ADButton } from "components/ADButton/ADButton";
import buildTheme from "theme/theme";
import Colors from "ADThemeBuilder/components/Colors/Colors";
import Header from "ADThemeBuilder/components/Header/Header";
import store from "ADThemeBuilder/store/builder";
import reducer from "ADThemeBuilder/reducer/builder";
import { getTheme } from "ADThemeBuilder/queries/builder";
import {
  THEME,
  SAVE_THEME,
  SET_THEME_FIELD,
  COMPONENTS_TARGETS,
  ACCORDION_CONTENT,
  ACCORDION_PANEL,
} from "constants";
import * as styles from "./styles";

export const Content = ({ className = "", ...rest }) => {
  const theme = useTheme();
  const data = [
    {
      id: "colors-panel",
      type: ACCORDION_PANEL,
      label: "Colors",
      isExpanded: true,
      content: [
        {
          id: "colors",
          type: ACCORDION_CONTENT,
          isExpanded: true,
          content: <Colors values={theme.colors} />,
        },
      ],
    },
  ];

  return (
    <styles.Content className={`__content ${className}`} {...rest}>
      <ADAccordion id="root" data={data} />
    </styles.Content>
  );
};

export const Footer = () => {
  const handleSave = () => {
    store.mutate({
      type: SAVE_THEME,
      targets: [COMPONENTS_TARGETS.AD_THEME_BUILDER],
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
    id: COMPONENTS_TARGETS.AD_THEME_BUILDER,
  });
  return render({ ...base, ...customTheme });
};

export const ADThemeBuilder = ({ render, isEnabled = false }) => {
  const BASE_THEME = buildTheme(THEME.LIGHT);
  useStore({
    store,
    reducer,
    data: { ...BASE_THEME },
  });
  if (!isEnabled) {
    return <Main render={render} base={BASE_THEME} />;
  }

  return (
    <ThemeProvider theme={BASE_THEME}>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            background: white;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <styles.Container className="ad-builder__container">
        <ADGrid
          className="__grid"
          alignCenter
          justifyCenter
          fullHeight
          cols="1fr 380px"
          rows="1fr"
        >
          <styles.Left className="__left-col">
            <Main render={render} base={BASE_THEME} />
          </styles.Left>
          <styles.Right className="__right-col">
            <ADCard
              width={(theme) => `calc(100% - ${theme.spacing.low})`}
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
    </ThemeProvider>
  );
};
