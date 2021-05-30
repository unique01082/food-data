import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import React from "react";

function getCarbonhydrateLevel(value) {
  if (value !== 0 && !value) {
    return "secondary";
  } else if (value < 5) {
    return "success";
  } else if (value < 13) {
    return "warning";
  } else {
    return "danger";
  }
}

const FoodDescription = ({ food: { foodNutrients } }) => {
  const carbonhydrate = foodNutrients.find((i) => i.nutrientId === 1005);

  return (
    <>
      <Paragraph>
        <ul>
          <li>
            Carbonhydrate:{" "}
            <Text strong type={getCarbonhydrateLevel(carbonhydrate?.value)}>
              {carbonhydrate?.value + carbonhydrate?.unitName}
            </Text>
          </li>
        </ul>
      </Paragraph>
    </>
  );
};

export default FoodDescription;
