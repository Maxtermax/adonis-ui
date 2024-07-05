import { uniqueId } from "lodash";
import { useStoreFactory } from "hermes-io";
import { ADButton } from "ADButton/ADButton";
import { ADText } from "ADText/ADText";
import { Warning } from "@styled-icons/entypo/Warning";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { NotificationsActive } from "@styled-icons/material/NotificationsActive";
import { microNotification } from "ADNotification/store/notification";
import reducer from "ADNotification/reducer/notification";
import * as styles from "ADNotification/styles";
import { useEffect, useRef } from "react";

export const ADNotification = ({
  isOpen = false,
  timeout = 1000,
  direction = "top",
  className = "",
  variant = "primary",
  text = "",
  id = uniqueId("ad-notification-"),
}) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const { width } = containerRef.current.getBoundingClientRect();
    containerRef.current.classList.remove("ad-notification-discard");
    if (["top", "bottom"].includes(direction)) {
      containerRef.current.style.left = `calc(50% - ${width / 2}px)`;
    }
    if (direction === "left") {
      containerRef.current.style.left = "0px";
    }
  }, [direction]);
  const { store } = useStoreFactory(
    id,
    { timeout, direction, isOpen },
    reducer,
    microNotification,
  );

  const handleDicard = () =>
    containerRef.current.classList.add("ad-notification-discard");

  let icon = <NotificationsActive size={35} />;
  if (variant === "warning" || variant === "error")
    icon = <Warning size={35} />;
  if (variant === "success") icon = <CheckCircleFill size={35} />;

  return (
    <styles.Wrapper
      onClick={handleDicard}
      direction={store.state.direction}
      variant={variant}
    >
      <styles.Container
        ref={containerRef}
        className={`ad-notification ${className}`}
      >
        <styles.Icon className="ad-notification__icon">{icon}</styles.Icon>
        <styles.Content className="ad-notification__content">
          <ADText value={text} variant="text" />
        </styles.Content>
      </styles.Container>
    </styles.Wrapper>
  );
};
