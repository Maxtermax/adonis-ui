import React, { useRef } from "react";
import ADText from "ADText";
import ADAccordion from "ADAccordion";
import ADCheckbox from "ADCheckbox";
import ADFlex from "ADFlex";
import * as styles from "./styles";

/*
        <ADAccordion
          data={[
            {
              content: [
                {
                  content: (
                    <ADPanel
                      style={{ height: "100%", margin: "8px", width: "100%" }}
                    >
                      <ADText value="test" variant="text" />
                    </ADPanel>
                  ),
                  id: 2,
                  type: "ACCORDION_CONTENT",
                },
              ],
            },
          ]}
        />
*/

export const Categories = ({ onChange }) => {
  const categoriesRef = useRef([
    {
      id: "elegant",
      label: "Elegante",
      checked: false,
    },
    {
      id: "urban",
      label: "Urbano",
      checked: false,
    },
    {
      id: "sport",
      label: "Deportivo",
      checked: false,
    },
    {
      id: "pant",
      label: "Pantalon",
      checked: false,
    },
    {
      id: "short",
      label: "Short",
      checked: false,
    },
    {
      id: "skirt",
      label: "Falda",
      checked: false,
    },
    {
      id: "dress",
      label: "Vestidos",
      checked: false,
    },
    {
      id: "one-piece",
      label: "Enterizos",
      checked: false,
    },
    {
      id: "set",
      label: "Conjuntos",
      checked: false,
    },
  ]);

  const handleChecked = (index) => {
    categoriesRef.current[index].checked = true;
    onChange?.({
      categories: categoriesRef.current
        .filter(({ checked }) => checked)
        .map(({ id }) => id),
    });
  };
  const handleUnChecked = (index) => {
    categoriesRef.current[index].checked = false;
    onChange?.({
      categories: categoriesRef.current
        .filter(({ checked }) => checked)
        .map(({ id }) => id),
    });
  };

  return (
    <styles.Container>
      <ADText value="Categorías" variant="title" />
      <ADFlex direction="column" gap={4} alignItems="stretch">
        {categoriesRef.current.map(({ id, label, checked }, index) => (
          <ADCheckbox
            key={id}
            label={label}
            defaultChecked={checked}
            onChecked={() => handleChecked(index)}
            onUnCheck={() => handleUnChecked(index)}
          />
        ))}
      </ADFlex>
    </styles.Container>
  );
};
