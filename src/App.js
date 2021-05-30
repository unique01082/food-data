import { Affix } from "antd";
import { useState } from "react";

import { AppContextProvider } from "./context";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

function App() {
  const [searchResult, setSearchResult] = useState();

  return (
    <AppContextProvider
      searchResult={searchResult}
      setSearchResult={setSearchResult}
    >
      <Affix offsetTop>
        <SearchBox />
      </Affix>
      <SearchResult />
    </AppContextProvider>
  );
}

export default App;
