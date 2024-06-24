import { useMutations } from "hermes-io";
import { ADButton } from "ADButton/ADButton";
import { ChevronLeft } from "@styled-icons/evaicons-solid/ChevronLeft";
import { ChevronRight } from "@styled-icons/evaicons-solid/ChevronRight";
import { getOpen } from "ADDrawer/queries/drawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import { SET_DRAWER_OPEN } from "constants";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import * as styles from "ADDrawer/styles";

export const Controls = ({ container, id }) => {
  const closeDrawer = () => {
    const overlay = container?.current?.querySelector?.('ad-drawer__overlay');
    container?.current?.classList?.remove?.("ad-drawer--close");
    container?.current?.classList?.add?.("ad-drawer--open");
    overlay?.remove?.("appear"); 
    overlay?.add?.("appear"); 
  };
  const openDrawer = () => {
    const overlay = container?.current?.querySelector?.('ad-drawer__overlay');
    container?.current?.classList?.remove?.("ad-drawer--add");
    container?.current?.classList?.add?.("ad-drawer--close");
    overlay?.remove?.("disappear"); 
    overlay?.add?.("appear"); 
  };
  const { state } = useMutations({
    events: [SET_DRAWER_OPEN],
    initialState: { isOpen: false },
    onChange: () => {
      const store = drawerMicroStore.get(id);
      const isOpen = getOpen(store);
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
      return { isOpen };
    },
    store: drawerMicroStore,
    id,
  });
  const handleToggle = () => {
    const store = drawerMicroStore.get(id);
    setOpen({
      id,
      store,
      value: !getOpen(store),
    });
  };

  return (
    <styles.Control className="ad-drawer__control">
      {state.isOpen ? (
        <ADButton noScaleOnHover variant="text" onClick={handleToggle}>
          <ChevronLeft />
        </ADButton>
      ) : (
        <ADButton noScaleOnHover variant="text" onClick={handleToggle}>
          <ChevronRight />
        </ADButton>
      )}
    </styles.Control>
  );
};
