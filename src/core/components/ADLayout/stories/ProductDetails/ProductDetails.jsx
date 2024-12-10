import React, { useEffect } from "react";
import { useMutations } from "hermes-io";
import ADLayout, { ADLayoutBody, ADLayoutFooter } from "ADLayout";
import ADSlides from "ADSlides";
import useDataSource from "@/core/hooks/useDataSource";
import {
  datasourceMicroStore,
  DATASOURCE,
} from "@/core/hooks/useDataSource/store";
import makeDataSource from "@/core/datasource";
import { actions as datasourceAction } from "@/core/hooks/useDataSource/reducer";
import { Header } from "../components/Header/Header";
import { Carousell } from "../components/Carousell/Carousell";
import ADProductDetails from "ADLayout/components/ADProductDetails";
import { getProducts } from "../../mocks";

const datasource = makeDataSource();

export const ProductDetails = () => {
  const datasourceMutations = useMutations({
    noUpdate: true,
    store: datasourceMicroStore,
    id: DATASOURCE,
  });

  datasourceMutations.onEvent(datasourceAction.SEND_NOTIFY_PRODUCT, (value) => {
    const {
      product,
      startLoader,
      stopLoader,
      closePopup,
      openNotificationSuccess,
    } = value;
    console.log({ product });
    startLoader();
    setTimeout(() => {
      stopLoader();
      closePopup();
      openNotificationSuccess();
    }, 1000);
  });

  const { setRecommendations, setProducts } = useDataSource(datasource);

  useEffect(() => {
    setRecommendations();
    setProducts();
  }, []);

  const [product] = getProducts(1);

  return (
    <ADLayout
      header={() => <Header />}
      body={() => (
        <ADLayoutBody>
          <ADProductDetails product={product} />
          <ADSlides
            data={[
              {
                id: "a-1",
                title: "Completa tu outfit",
                subtitle: "¡Combina tu estilo!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNERS-WEB-01_2048x.jpg?v=1727302066",
              },
            ]}
          />
          <Carousell id="1" />
          
        </ADLayoutBody>
      )}
      footer={() => <ADLayoutFooter />}
    />
  );
};
