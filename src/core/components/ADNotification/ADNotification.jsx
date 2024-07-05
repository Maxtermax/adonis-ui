import { uniqueId } from "lodash";
import { useStoreFactory } from "hermes-io";
import { ADButton } from "ADButton/ADButton";
import { ADText } from "ADText/ADText";
import { Warning } from "@styled-icons/entypo/Warning";
import { microNotification } from "ADNotification/store/notification";
import reducer from "ADNotification/reducer/notification";
import * as styles from "ADNotification/styles";
import { useEffect, useRef } from "react";

export const ADNotification = ({
  isOpen = false,
  timeout = 1000,
  direction = "top",
  className = "",
  id = uniqueId("ad-notification-"),
}) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const { width } = containerRef.current.getBoundingClientRect();
    containerRef.current.classList.remove("ad-notification-discard");
    containerRef.current.style.left = `calc(50% - ${width / 2}px)`;
  }, []);
  useStoreFactory(
    id,
    { timeout, direction, isOpen },
    reducer,
    microNotification,
  );

  const handleDicard = () =>
    containerRef.current.classList.add("ad-notification-discard");

  return (
    <styles.Wrapper onClick={handleDicard}>
      <styles.Container
        ref={containerRef}
        className={`ad-notification ${className}`}
      >
        <styles.Icon className="ad-notification__icon">
          <Warning size={35} />
        </styles.Icon>
        <styles.Content className="ad-notification__content">
          <ADText value="Title" variant="text" />
        </styles.Content>
        <styles.Actions className="ad-notification__actions">
          <ADButton onClick={() => {}} variant="text" noScaleOnHover>
            <p>Example</p>
          </ADButton>
        </styles.Actions>
      </styles.Container>
    </styles.Wrapper>
  );
};
