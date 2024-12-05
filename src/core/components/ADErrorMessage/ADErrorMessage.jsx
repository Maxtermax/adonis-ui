import { forwardRef } from "react";
import { uniqueId } from "lodash";
import { AlertCircle } from "@styled-icons/feather/AlertCircle";
import ADFlex from "ADFlex";
import ADText from "ADText";

export const ADErrorMessage = forwardRef(function ADErrorMessage(
  { message = "", id = uniqueId("ad-error-message") },
  ref,
) {
  return (
    <ADFlex
      ref={ref}
      className="ad-error-message"
      id={id}
      gap={3}
      alignItems="center"
      direction="column"
    >
      <AlertCircle size={50} />
      <ADText variant="text" value={message} />
    </ADFlex>
  );
});
