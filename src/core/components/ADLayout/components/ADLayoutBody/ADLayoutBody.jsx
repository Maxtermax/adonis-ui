import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import { BLUR_LAYOUT_BODY, FOCUS_OPTION, BLUR_OPTION } from "constants";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store/layout";
import ADMedia from "ADMedia";
import ADCarousell from "ADCarousell";
import * as styles from "./styles";

export const ADLayoutBody = () => {
  const containerRef = useRef(null);
  const { onEvent } = useMutations({
    store: layoutMicroStore,
    id: LAYOUT_HEADER_STORE,
  });
  const blurBackground = () => {
    containerRef.current.style.filter = "blur(20px)";
    containerRef.current.style.pointerEvents = "none";
  };

  onEvent(FOCUS_OPTION, blurBackground);
  onEvent(BLUR_LAYOUT_BODY, blurBackground);

  onEvent(BLUR_OPTION, () => {
    setTimeout(() => {
      containerRef.current.style.filter = "blur(0px) grayscale(0)";
      containerRef.current.style.pointerEvents = "auto";
    }, 350);
  });

  return (
    <styles.Container ref={containerRef}>
      <ADMedia
        discount={{
          before: 1000000,
          now: 500000,
          percentage: "50%",
        }}
        id={1}
        images={[
          {
            description: "test",
            id: 1,
            productId: 1,
            selected: true,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
          },
          {
            description: "test2",
            id: 2,
            productId: 1,
            selected: false,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
          },
          {
            description: "test3",
            id: 3,
            productId: 1,
            selected: false,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675230/Vestido-linea-A-en-tejido-fino---Crema-Negro---H-M-CO.jpg?v=638511012049670000",
          },
        ]}
        name="Vestido"
        price="150000000"
        sizes={["M", "S", "XS", "L"]}
        thumbnails={[
          {
            belongsTo: 1,
            description: "test",
            id: 1,
            productId: 1,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675203-483-725?v=638511011914100000&width=483&height=725&aspect=true",
          },
          {
            belongsTo: 2,
            description: "test2",
            id: 2,
            productId: 1,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675229-483-725?v=638511012045930000&width=483&height=725&aspect=true",
          },
          {
            belongsTo: 3,
            description: "test3",
            id: 3,
            productId: 1,
            src: "https://hmcolombia.vtexassets.com/arquivos/ids/3675230/Vestido-linea-A-en-tejido-fino---Crema-Negro---H-M-CO.jpg?v=638511012049670000",
          },
        ]}
      />
    </styles.Container>
  );
};
