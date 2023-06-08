import { FC } from "react";

import { Layout } from "./app/components/layout";
import { SearchForm } from "./app/components/form/searchForm";
import { CardList } from "./app/components/cardList";

const App: FC = () => {
  return (
    <Layout>
      <>
      <SearchForm />
      <CardList />
      </>
    </Layout>
  );
};

export default App;
