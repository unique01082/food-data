import React from "react";
import { Tag, Typography } from "antd";
import Text from "antd/lib/typography/Text";

const { Title } = Typography;

const FoodName = ({ food: { description, foodCategory } }) => {
  const [shortName, ...tags] = description
    .split(",")
    .map((text) => text.trim());

  return (
    <>
      <Title level={5}>
        {shortName}{" "}
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Title>
      <Text keyboard>{foodCategory}</Text>
    </>
  );
};

export default FoodName;
