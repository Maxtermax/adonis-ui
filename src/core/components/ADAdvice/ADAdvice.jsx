import ADFlex from "ADFlex";
import ADText from "ADText";
import ADButton from "ADButton";
import { Whatsapp } from "@styled-icons/bootstrap";

export const ADAdvice = ({ link = "", message = "", variant = "contained", ...rest }) => {
  return (
    <ADFlex sx={{ textAlign: "center" }} direction="column" gap={4} {...rest}>
      <ADText
        value={message}
        variant="subtitle"
        sx={{
          textAlign: "center",
        }}
      />

      <ADText
        target="_blank"
        value={
          <ADButton
            variant={variant}
            sx={{
              width: "100%",
              display: "flex",
              padding: "5px",
              gap: "10px",
            }}
          >
            <Whatsapp size={25} />
            <span>Whatsapp</span>
          </ADButton>
        }
        href={link}
        variant="anchor"
        sx={{
          color: "white",
          width: "100%",
        }}
      />
    </ADFlex>
  );
};
