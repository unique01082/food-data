import { Input } from "antd";
import useRequest from "@ahooksjs/use-request";

import { useAppContext } from "./context";
import { searchFoods } from "./services";

const SearchBox = () => {
  const { setSearchResult } = useAppContext();
  const { loading, run: search } = useRequest(searchFoods, {
    manual: true,
    onSuccess: setSearchResult,
  });

  return (
    <Input.Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={search}
      loading={loading}
    />
  );
};

export default SearchBox;
