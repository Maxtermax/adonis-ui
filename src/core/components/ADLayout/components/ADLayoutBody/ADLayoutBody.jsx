import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import ADCarousell from "ADCarousell";
import ADDrawer from "ADDrawer";
import ADMedia from "ADMedia";
import { SEARCH_DRAWE_ID, FOCUS_OPTION, BLUR_OPTION } from "constants";
import { layoutMicroStore, layoutHeaderStore } from "ADLayout/store/layout";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import * as styles from "./styles";

export const ADLayoutBody = () => {
  const containerRef = useRef(null);
  const { onEvent } = useMutations({
    store: layoutMicroStore,
    id: layoutHeaderStore,
  });

  onEvent(FOCUS_OPTION, () => {
    containerRef.current.style.filter = "blur(20px) grayscale(1)";
    containerRef.current.style.pointerEvents = "none";
  });

  onEvent(BLUR_OPTION, () => {
    setTimeout(() => {
      containerRef.current.style.filter = "blur(0px) grayscale(0)";
      containerRef.current.style.pointerEvents = "auto";
    }, 350);
  });

  const handleClose = () => {
    const store = drawerMicroStore.get(SEARCH_DRAWE_ID);
    setOpen({ store, id: SEARCH_DRAWE_ID, value: false });
  };

  return (
    <styles.Container ref={containerRef}>
      <ADCarousell>
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
      </ADCarousell>

      <ADDrawer
        content={
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        }
        className="search-drawer"
        height="100%"
        id={SEARCH_DRAWE_ID}
        subtitle="subtitle"
        title="Title"
        variant="left"
        width="100%"
      />
    </styles.Container>
  );
};
