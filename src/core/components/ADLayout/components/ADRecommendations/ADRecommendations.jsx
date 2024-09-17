import React from "react";
import { ArrowRight } from "@styled-icons/bootstrap";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADFlex from "ADFlex";
import formatCurrency from "../../../../../utils/formatCurrency";
import * as styles from "./styles";

const Product = ({ data = [] }) => {
  return data.map(
    ({
      name = "",
      discount = 0,
      thubmnail = "",
      link = "#",
      price,
      id = "",
    }, index) => (
      <ADFlex
        gap={5}
        direction="column"
        alignItems="flex-start"
        fullWidth
        key={id}
      >
        <ADFlex direction="column" alignItems="flex-start" fullWidth gap={2}>
          <styles.Link delay={index / 4} href={link}>
            <styles.Thumbnail src={thubmnail} />
            <ADFlex alignItems="flext-start" direction="column">
              <ADFlex gap={2} alignItems="flext-start">
                <ADText variant="text" value={name} />
                <ArrowRight size={20} />
              </ADFlex>
              <ADFlex gap={2} alignItems="flext-start">
                {discount ? (
                  <ADText
                    lineThrough
                    variant="subtitle"
                    value={formatCurrency(price * discount) + " / "}
                  />
                ) : null}
                <ADText variant="subtitle" value={formatCurrency(price)} />
              </ADFlex>
            </ADFlex>
          </styles.Link>
        </ADFlex>
      </ADFlex>
    ),
  );
};

export const ADRecommendations = ({ data = [] }) => {
  return (
    <ADGrid
      width="calc(100% - 20px)"
      gap={6}
      lg={{
        margin: "20px auto",
        cols: 2,
        rows: 1,
      }}
      cols={"repeat(2, 1fr)"}
      justifyItems="stretch"
    >
      {data.map(({ id = "", name = "", products = [] }) => (
        <ADFlex alignItems="flex-start" direction="column" gap={4} key={id}>
          <ADText variant="title" value={name} />
          <Product key={id} data={products} />
        </ADFlex>
      ))}
    </ADGrid>
  );
};
