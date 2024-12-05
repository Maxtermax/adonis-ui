import React, { useEffect, useRef } from "react";
import { useMutations } from "hermes-io";
import { uniqueId } from "lodash";
import { ChatMail } from "@styled-icons/fluentui-system-filled/ChatMail";
import ADPopup from "ADPopup";
import ADFlex from "ADFlex";
import ADText from "ADText";
import ADNotification from "ADNotification";
import ADButton from "ADButton";
import ADLoaderButton from "ADLoaderButton";
import { microNotificationStore } from "ADNotification/store/notification";
import { microTextFieldStore } from "ADTextField/store";
import { overlayMicroStore } from "ADOverlay/store";
import { setOpen } from "ADPopup/mutations";
import { actions } from "ADTextField/reducer";
import ADTextField from "ADTextField";
import useMediaQuery from "@/core/hooks/useMediaQuery";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { setLoader } from "ADLoaderButton/mutations/loader";
import loaderMicroStore from "ADLoaderButton/store";
import * as notificationMutations from "ADNotification/mutations/notification";

const Field = (props) => {
  const { state, onEvent } = useMutations({
    initialState: { isValid: false, isDirty: null },
    store: microTextFieldStore,
    id: props.id,
  });

  onEvent(actions.SET_VALUE, (value) => ({
    isDirty: value !== "",
    isValid: props.validate(value),
  }));
  const isNotValid = state.isDirty !== null && !state.isValid;

  return (
    <ADTextField
      color={isNotValid ? "error" : "primary"}
      helperText={isNotValid ? "Campo no válido" : ""}
      {...props}
    />
  );
};

export const ADNotifyPopup = ({ id = uniqueId("ad-notify-popup-") }) => {
  const loaderButtonId = id + "-loader-button";
  const emailFieldId = id + "-field-email";
  const successNotificationId = id + "-success-notification";
  const errorNotificationId = id + "-error-notification";
  const whatsappFieldId = id + "-field-whatsapp";
  const sendButtonRef = useRef(null);
  const validityHashRef = useRef({
    [whatsappFieldId]: false,
    [emailFieldId]: false,
  });
  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  useEffect(() => {
    sendButtonRef.current.disabled = true;
  }, []);

  const startLoader = () => {
    const store = loaderMicroStore.get(loaderButtonId);
    setLoader({ store, targets: [loaderButtonId], value: true });
  };

  const stopLoader = () => {
    const store = loaderMicroStore.get(loaderButtonId);
    setLoader({ store, targets: [loaderButtonId], value: false });
  };

  const closePopup = () => {
    setOpen({
      store: overlayMicroStore.get(id),
      id,
      value: false,
    });
  };

  const openNotificationSuccess = () => {
    notificationMutations.setOpen({
      store: microNotificationStore.get(successNotificationId),
      id: successNotificationId,
      value: true,
    });
  };

  const handleSend = () => {
    // onSend?.({ startLoader, stopLoader, closePopup, openNotificationSuccess });
    startLoader();
    setTimeout(() => {
      stopLoader();
      closePopup();
      openNotificationSuccess();
    }, 1000);
  };

  return (
    <>
      <ADPopup
        id={id}
        width={"460px"}
        height={"550px"}
        variant={isMobile ? "fullscreen" : "normal"}
        title={
          <ADFlex direction="row" gap={2}>
            <ChatMail size={40} />
            <ADText value="Notifícame" variant="title" />
          </ADFlex>
        }
      >
        <ADFlex
          sx={{
            width: "calc(100% - 60px)",
            height: "100%",
            justifyContent: "center",
            maxHeight: isMobile ? "475px" : "450px",
            marginTop: isMobile ? "0px" : "15px",
          }}
          direction="column"
          gap={4}
        >
          <ADText
            variant="text"
            value="Talla no está disponible 😞, te notificaremos cuando te disponible al instante 🏃"
          />
          <Field
            id={whatsappFieldId}
            type="tel"
            validate={(value) => {
              const isValid = value.length === 10;
              validityHashRef.current[whatsappFieldId] = isValid;
              sendButtonRef.current.disabled =
                !isValid && !validityHashRef.current[emailFieldId];
              return isValid;
            }}
            placeholder="Numero de whatsapp"
            label="Te escribimos al whatsapp"
            icon={<Whatsapp size={25} />}
          />
          <ADText variant="text" value="O" />
          <Field
            id={emailFieldId}
            validate={(value) => {
              const isValid = value.includes("@");
              validityHashRef.current[emailFieldId] = isValid;
              sendButtonRef.current.disabled =
                !isValid && !validityHashRef.current[whatsappFieldId];
              return isValid;
            }}
            type="email"
            icon={<EmailOutline size={25} />}
            placeholder="Correo electrónico"
            label="Te enviaremos un correo"
          />

          <ADLoaderButton
            id={loaderButtonId}
            loaderProps={{
              text: <ADText value="Enviando..." variant="subtitle" />,
            }}
            sx={{
              minHeight: "65px",
            }}
          >
            <ADButton
              ref={sendButtonRef}
              fullWidth
              variant="contained"
              onClick={handleSend}
              sx={{
                height: "50px",
              }}
            >
              ENVIAR
            </ADButton>
          </ADLoaderButton>

          <ADText
            variant="text"
            textTransform="uppercase"
            value={
              <>
                Nota: al enviar este formulario aceptas nuestra politica de{" "}
                <ADText
                  href="#"
                  variant="anchor"
                  value={"privacidad y tratamiento de datos."}
                  sx={{
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                />
              </>
            }
          />
        </ADFlex>
      </ADPopup>
      <ADNotification
        id={successNotificationId}
        text="Enviado con éxito"
        subtitle="¡Pronto te notificaremos!"
        variant="success"
      />
      <ADNotification id={errorNotificationId} text="Title" variant="error" />
    </>
  );
};
