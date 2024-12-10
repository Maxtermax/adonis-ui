import React, { useEffect, useState } from "react";
import { delay, uniqueId } from "lodash";
import { useMutations } from "hermes-io";
import ADLayout, {
  ADLayoutBody,
  ADLayoutFooter,
  ADProductFilter,
} from "ADLayout";
import ADSlides from "ADSlides";
import ADDrawer from "ADDrawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import loaderMicroStore from "ADLoaderButton/store";
import { setLoader } from "ADLoaderButton/mutations";
import ADProductsGrid from "ADProductsGrid";
import { getProducts } from "../../mocks";
import makeDataSource from "@/core/datasource";
import useDataSource from "@/core/hooks/useDataSource";
import {
  datasourceMicroStore,
  DATASOURCE,
} from "@/core/hooks/useDataSource/store";
import { actions as datasourceAction } from "@/core/hooks/useDataSource/reducer";
import { Header } from "../components/Header/Header";
import { Carousell } from "../components/Carousell/Carousell";

const datasource = makeDataSource();

function loadProducts({ id = "", setProducts, products = [], max = 5 }) {
  const store = loaderMicroStore.get(id);
  setLoader({ store, targets: [id], value: true });
  return new Promise((resolve) => {
    setTimeout(() => {
      setLoader({ store, targets: [id], value: false });
      if (typeof document !== "undefined" && document.startViewTransition) {
        document.startViewTransition(() =>
          setProducts([...products, ...getProducts(max)]),
        );
      } else {
        setProducts([...products, ...getProducts(max)]);
      }
      resolve();
    }, 1000);
  });
}

const ProductsManager = (props = {}) => {
  const [products, setProducts] = useState(getProducts(5));
  const drawerId = `${props.id}-drawer`;

  const setFilterState = ({ open }) => {
    const drawerStore = drawerMicroStore.get(drawerId);
    setOpen({
      store: drawerStore,
      id: drawerId,
      value: open,
    });
  };

  const handleLoaderMore = async (id = "") => {
    await loadProducts({ id, setProducts, products, max: 5 });
    const $productsGrid = document.getElementById(
      `ad-products-grid-${props.id}`,
    );
    delay(
      () =>
        $productsGrid?.scrollIntoView?.({ behavior: "smooth", block: "end" }),
      250,
    );
  };

  const handleFilter = async (filters = {}, id = "") => {
    await loadProducts({ id, setProducts, products, max: 3 });
    setFilterState({ open: false });
    const $productsGrid = document.getElementById(
      `ad-products-grid-${props.id}`,
    );
    delay(
      () =>
        $productsGrid?.scrollIntoView?.({ behavior: "smooth", block: "end" }),
      250,
    );
  };

  return (
    <>
      <ADProductsGrid
        id={props.id}
        onOpenFilter={() => setFilterState({ open: true })}
        onLoadMore={handleLoaderMore}
        data={products}
      />
      <ADDrawer
        content={
          <ADProductFilter
            id={`${props.id}-product-filter`}
            onFilter={handleFilter}
            onClose={() => setFilterState({ open: false })}
          />
        }
        height="100%"
        id={`${props.id}-drawer`}
        subtitle="subtitle"
        title="Title"
        variant="left"
        width="350px"
      />
    </>
  );
};

export const Landing = () => {
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

  return (
    <ADLayout
      header={() => <Header />}
      body={() => (
        <ADLayoutBody>
          <ADSlides
            data={[
              {
                link: "#",
                id: "1",
                title: "Descuentos",
                subtitle: "!hasta el 50%!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNERS-WEB-01_2048x.jpg?v=1727302066",
              },

              {
                link: "#",
                id: "2",
                title: "Tendencias",
                subtitle: "¡Ultima moda!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNER-NEW_BALANCE-DESKTOP_bf513dc8-4243-432c-9efa-4341f1470bc6_3072x.jpg?v=1721073702",
              },
              {
                link: "#",
                id: "3",
                title: "Conjuntos",
                subtitle: "!Estilo que combina!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/EDITORIAL-FCF100-04.jpg?v=1728743060&width=2048",
              },
            ]}
          />
          <Carousell id="1" />
          <ADSlides
            data={[
              {
                id: "a-1",
                title: "Descuentos",
                subtitle: "¡Hasta 50% de descuento!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/BANNERS-WEB-01_2048x.jpg?v=1727302066",
              },
            ]}
          />

          <ProductsManager id="discount-products" />
          <ADSlides
            data={[
              {
                id: "a-2",
                title: "Conjuntos",
                subtitle: "!Estilo que combina!",
                src: "https://www.brokenchains.com.co/cdn/shop/files/EDITORIAL-FCF100-04.jpg?v=1728743060&width=2048",
              },
            ]}
          />
          <ProductsManager id="sets-products" />
        </ADLayoutBody>
      )}
      footer={() => <ADLayoutFooter />}
    />
  );
};
