import { List } from "antd";
import React from "react";

import FoodImage from "./FoodImage";
import FoodName from "./FoodName";
import FoodDescription from "./FoodDescription";

const SearchResult = ({ food }) => (
  <List.Item>
    <List.Item.Meta
      avatar={<FoodImage food={food} />}
      title={<FoodName food={food} />}
      description={<FoodDescription food={food} />}
    />
  </List.Item>
);

export default SearchResult;
