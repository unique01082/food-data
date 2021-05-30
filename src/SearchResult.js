import { Empty, List } from "antd";
import React from "react";

import { useAppContext } from "./context";
import Food from "./Food";

const SearchResult = () => {
  const { searchResult } = useAppContext();

  console.log("searchResult :>> ", searchResult);

  if (!searchResult?.foods) {
    return null;
  }

  if (!searchResult.foods.length) {
    return <Empty style={{ margin: "auto", padding: "auto" }} />;
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={searchResult.foods}
      renderItem={(item) => <Food food={item} />}
    />
  );
};

export default SearchResult;
