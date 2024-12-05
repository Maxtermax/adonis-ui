import { forwardRef } from "react";
import { uniqueId } from "lodash";
import ADFlex from "ADFlex";

export const ADMessage = forwardRef(function ADMessage(
  { icon = null, content = null, id = uniqueId("ad-message"), ...rest },
  ref,
) {
  return (
    <ADFlex
      ref={ref}
      className="ad-message"
      id={id}
      gap={3}
      alignItems="center"
      direction="column"
      {...rest}
    >
      {icon}
      {content}
    </ADFlex>
  );
});
