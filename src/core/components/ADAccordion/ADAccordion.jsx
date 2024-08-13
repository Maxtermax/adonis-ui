import React, { forwardRef, useEffect, useRef } from "react";
import { useObservableStore } from "hermes-io";
import { KeyboardArrowDown } from "@styled-icons/material/KeyboardArrowDown";
import { KeyboardArrowRight } from "@styled-icons/material-outlined/KeyboardArrowRight";
import ADText from "ADText";
import ADButton from "ADButton";
import reducer from "ADAccordion/reducer/accordion";
import { accordionStore } from 'ADAccordion/store/accordion';
import { uniqueId } from "lodash";
import { ACCORDION_PANEL, SET_PANEL_STATE } from "constants";
import * as styles from "./styles";
import usePanel from "ADAccordion/hooks/usePanel";

const Label = ({ children, isExpanded, onToggle }) => {
  return (
    <styles.Label className="__label" onClick={onToggle}>
      <ADText variant="heading" value={children} />
      <ADButton noScaleOnHover variant="text" className={"__button"}>
        {isExpanded ? (
          <KeyboardArrowDown className="__close" size={24} />
        ) : (
          <KeyboardArrowRight className="__open" size={24} />
        )}
      </ADButton>
    </styles.Label>
  );
};

const Item = ({ children, isExpanded }) => {
  return (
    <styles.Item>
      <styles.Content isExpanded={isExpanded} className="__content">
        {children}
      </styles.Content>
    </styles.Item>
  );
};

const Content = ({ inner, isExpanded, children }) => {
  const contentRef = useRef(null);
  const maxRef = useRef("");
  useEffect(() => {
    const padding = "100px";
    if (!maxRef.current) {
      maxRef.current = `${contentRef.current.clientHeight}px`;
    }
    contentRef.current.style.maxHeight = `${isExpanded ? `calc(${maxRef.current} + ${padding})` : "0px"}`;
  }, [isExpanded]);

  return (
    <styles.Content
      ref={contentRef}
      className="__content"
      inner={inner}
      isExpanded={isExpanded}
    >
      {children}
    </styles.Content>
  );
};

const Panels = forwardRef(function Panels(
  { label, isExpanded, id, data, inner },
  ref,
) {
  const panels = mapDataToComponentsTree(data);
  const { store } = useObservableStore(id, data, reducer, accordionStore);
  const state = usePanel({ store: accordionStore, initialState: { isExpanded }, id });

  const handleToggle = async () => {
    const notify = !state.isExpanded;
    const payload = {
      value: {
        isExpanded: notify,
      },
      id,
    };
    store.mutate({
      targets: [id],
      type: SET_PANEL_STATE,
      payload,
    });
  };

  return (
    <styles.Container ref={ref} className="ad-accordion">
      {label ? (
        <Label isExpanded={state.isExpanded} onToggle={handleToggle}>
          {label}
        </Label>
      ) : null}
      <Content isExpanded={state.isExpanded} inner={inner}>
        {panels}
      </Content>
    </styles.Container>
  );
});

const mapDataToComponentsTree = (data = [], isChildPanel = false) => {
  return data.map(({ label, isExpanded, content, type, id }) => {
    if (type === ACCORDION_PANEL) {
      isChildPanel = true;
      return (
        <Panels
          isExpanded={isExpanded}
          key={id}
          label={label}
          inner={isChildPanel}
          id={id}
          data={content}
        >
          {Array.isArray(content) && mapDataToComponentsTree(content, false)}
        </Panels>
      );
    }
    return (
      <styles.InnerContent key={id}>
        {label ? (
          <Item className="__item" isExpanded>
            <ADText variant="heading" value={label} />
          </Item>
        ) : null}
        {content}
      </styles.InnerContent>
    );
  });
};

export const ADAccordion = forwardRef(function ADAccordion(
  { data = [], id = uniqueId("ad-accordion") },
  ref,
) {
  const [{ isExpanded }] = data;
  return <Panels isExpanded={isExpanded} id={id} data={data} ref={ref} />;
});
