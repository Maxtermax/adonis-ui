import { useRef, forwardRef } from "react";
import { uniqueId } from "lodash";
import { useObservableStore, useMutations } from "hermes-io";
import { ADText } from "ADText/ADText";
import { Warning } from "@styled-icons/entypo/Warning";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { NotificationsActive } from "@styled-icons/material/NotificationsActive";
import { microNotificationStore } from "ADNotification/store/notification";
import { useDirection } from "ADNotification/hooks/useDirection";
import { useCountDown } from "ADNotification/hooks/useCountDown";
import { setOpen } from "ADNotification/mutations/notification";
import reducer from "ADNotification/reducer/notification";
import { events } from "ADNotification/reducer/notification";
import * as styles from "ADNotification/styles";

export const ADNotification = forwardRef(function ADNotification(
  {
    timeout = 3000,
    direction = "top",
    className = "",
    variant = "primary",
    text = "",
    id = uniqueId("ad-notification-"),
  },
  ref,
) {
  const containerRef = useRef(null);
  useDirection(containerRef, direction);
  const { startCountDown, stopCountDown } = useCountDown(timeout);
  useObservableStore(
    id,
    { timeout, direction, isOpen: false },
    reducer,
    microNotificationStore,
  );

  const { state, onEvent } = useMutations({
    id,
    initialState: { direction, isOpen: false },
    store: microNotificationStore,
    noUpdate: true,
  });

  onEvent(events.SET_OPEN, (isOpen) => {
    const $node = containerRef.current;
    if (isOpen) {
      $node.classList.remove("ad-notification-hidden");
      $node.classList.add("ad-notification-open");
      $node.classList.remove("ad-notification-discard");
      startCountDown(() =>
        setOpen({ store: microNotificationStore.get(id), id, value: false }),
      );
    } else {
      $node.classList.add("ad-notification-discard");
      $node.classList.remove("ad-notification-open");
      stopCountDown();
    }
    return { isOpen };
  });

  const handleDicard = () =>
    setOpen({ store: microNotificationStore.get(id), id, value: false });

  let icon = <NotificationsActive size={35} />;
  if (variant === "warning" || variant === "error")
    icon = <Warning size={35} />;
  if (variant === "success") icon = <CheckCircleFill size={35} />;

  return (
    <styles.Wrapper
      ref={ref}
      onClick={handleDicard}
      direction={state.direction}
      variant={variant}
    >
      <styles.Container
        ref={containerRef}
        className={`ad-notification ad-notification-hidden ad-notification-discard ${className}`}
      >
        <styles.Icon className="ad-notification__icon">{icon}</styles.Icon>
        <styles.Content className="ad-notification__content">
          <ADText value={text} variant="text" />
        </styles.Content>
      </styles.Container>
    </styles.Wrapper>
  );
});
