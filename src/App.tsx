import { FC, useEffect, useState } from "react";

import { ApiService } from "./setup/services/api.service";
import { Card as CardType } from "./setup/types/card.type";
import { Layout } from "./app/components/layout";
import { Card } from "./app/components/card";

const App: FC = () => {
  const [data, setData] = useState<CardType[]>([]);

  const handleFetch = async () => {
    const response = await ApiService.getCard();
    setData(response);
    console.log(response);
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-5 mt-8">
        {data.map((card: CardType) => <Card key={card.id} data={card} color="" />)}
      </div>
    </Layout>
  );
};

export default App;
