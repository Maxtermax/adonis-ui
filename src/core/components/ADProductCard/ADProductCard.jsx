import React, { memo, useRef, useState } from "react";
import { uniqueId } from "lodash";
import { useObservableStore, useMutations } from "hermes-io";
import ADCard from "ADCard";
import ADText from "ADText";
import ADButton from "ADButton";
import ADFlex from "ADFlex";
import ADSlideIndicator from "ADSlides/components/ADSlideIndicator";
import { useIntersection } from "ADSlides/components/ADSlideIndicator/hooks/useIntersection";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";
import productMicroStore from "./store";
import { actions, productReducer } from "./reducer";
import { setFocusImage } from "./mutations";
import formatCurrency from "../../../utils/formatCurrency";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";
import * as styles from "./styles";

const DotsIndicator = ({
  isPaused = true,
  onToggleAnimationState,
  id,
  data,
}) => {
  const { state, onEvent } = useMutations({
    initialState: { selectedId: data[0].id },
    store: productMicroStore,
    id,
  });

  onEvent(actions.SELECT_IMAGE, (selectedId) => ({ selectedId }));

  const handleIndicatorClick = (indicatorId) => {
    const store = productMicroStore.get(id);
    setFocusImage({ store, targets: [id], value: indicatorId });
  };

  return (
    <styles.Indicator>
      <ADSlideIndicator
        isPaused={isPaused}
        onToggleAnimationState={onToggleAnimationState}
        onClick={handleIndicatorClick}
        selectedId={state.selectedId}
        data={data}
      />
    </styles.Indicator>
  );
};

const Indicator = ({
  data = [],
  id = uniqueId("ad-product-card-indicator-"),
  isPaused = true,
  onToggleAnimationState,
  containerRef,
}) => {
  const isTransitioningRef = useRef(false);
  const { onEvent } = useMutations({
    noUpdate: true,
    store: productMicroStore,
    id,
  });

  onEvent(actions.SELECT_IMAGE, function scrollToNode(selectedId) {
    const container = containerRef.current;
    const node = container?.querySelector?.(`[id="${selectedId}"]`);
    if (node) {
      const { offsetLeft } = node;
      isTransitioningRef.current = offsetLeft === 0;
      container.scrollTo({
        left: offsetLeft,
        behavior: "smooth",
      });
    }
  });

  useIntersection({
    forceObserver: true,
    itemsSelector: ".intersection-item",
    containerRef,
    isPaused,
    onIntersection: (_, entry) => {
      const isTransitioning = isTransitioningRef.current;
      if (isTransitioning) {
        isTransitioningRef.current = false;
        return;
      }
      const store = productMicroStore.get(id);
      setFocusImage({ store, targets: [id], value: entry.target.id });
      isTransitioningRef.current = false;
    },
  });

  return (
    <DotsIndicator
      data={data}
      id={id}
      isPaused={isPaused}
      onToggleAnimationState={onToggleAnimationState}
      containerRef={containerRef}
    />
  );
};

const Content = ({ id, images = [], expand }) => {
  const containerRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);
  const [isPaused, setPaused] = useState(true);
  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.md})`,
  );

  const { onEvent } = useMutations({
    noUpdate: true,
    store: productMicroStore,
    id,
  });

  onEvent(actions.SELECT_IMAGE, function disableButtons() {
    const store = productMicroStore.get(id);
    const { data = [] } = store.state;
    const selectedIndex = data.findIndex(({ selected }) => selected);
    leftArrowRef.current.disabled = selectedIndex === 0;
    rightArrowRef.current.disabled = selectedIndex === data.length - 1;
  });

  const handlePrevious = () => {
    const store = productMicroStore.get(id);
    const { data = [] } = store.state;
    const selectedIndex = data.findIndex(({ selected }) => selected);
    setFocusImage({
      store,
      targets: [id],
      value: data.at(selectedIndex - 1)?.id,
    });
  };

  const handleNext = () => {
    const store = productMicroStore.get(id);
    const { data = [] } = store.state;
    const selectedIndex = data.findIndex(({ selected }) => selected);
    setFocusImage({
      store,
      targets: [id],
      value: data.at(selectedIndex + 1)?.id,
    });
  };

  const play = () => setPaused(false);

  const pause = () => setPaused(true);

  return (
    <styles.Container isMobile={isMobile} className="ad-product-card">
      <styles.Content
        onMouseLeave={pause}
        onMouseEnter={() => !isPaused && play()}
        expand={expand}
        ref={containerRef}
      >
        {images.map((image) => (
          <styles.Image
            className="intersection-item"
            id={image.id}
            key={image.src}
            src={image.src}
            alt={image.alt}
          />
        ))}
        <Indicator
          onToggleAnimationState={() => setPaused(!isPaused)}
          isPaused={isPaused}
          containerRef={containerRef}
          data={images}
          id={id}
        />
      </styles.Content>
      <ADButton
        className="ad-product-card__arrows-slider"
        variant="sharp"
        onClick={handlePrevious}
        ref={leftArrowRef}
      >
        <ChevronLeft size={35} />
      </ADButton>

      <ADButton
        className="ad-product-card__arrows-slider"
        variant="sharp"
        onClick={handleNext}
        ref={rightArrowRef}
      >
        <ChevronLeft style={{ transform: "rotate(180deg)" }} size={35} />
      </ADButton>
    </styles.Container>
  );
};

export const ADProductCard = memo(
  ({
    id = uniqueId("ad-product-card-"),
    name,
    discount,
    price,
    images = [],
    ...rest
  }) => {
    useObservableStore(
      id,
      {
        data: images.map((image, index) => ({
          ...image,
          selected: index === 0,
        })),
      },
      productReducer,
      productMicroStore,
    );

    return (
      <ADCard
        id={id}
        elevation="none"
        gap="high"
        shape="sharp"
        variant="contained"
        Content={() => <Content id={id} images={images} />}
        Footer={() => (
          <styles.Footer>
            <ADText value={name} variant="title" />

            {discount ? (
              <ADFlex
                direction="row"
                alignItems="flex-start"
                fullWidth
                gap={0.5}
              >
                <ADText
                  value={formatCurrency(discount.before)}
                  variant="text"
                  lineThrough
                />
                /
                <ADText value={formatCurrency(discount.now)} variant="text" />
              </ADFlex>
            ) : (
              <ADText value={formatCurrency(price)} variant="text" />
            )}
            <styles.Button>
              <ADButton onClick={() => {}} variant="sharp">
                <p>Ver</p>
              </ADButton>
            </styles.Button>
          </styles.Footer>
        )}
        {...rest}
      />
    );
  },
);
