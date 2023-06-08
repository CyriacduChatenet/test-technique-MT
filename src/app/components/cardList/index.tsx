import { FC } from "react";

import { Card as CardType } from "../../../setup/types/card.type";
import { useCard } from "../../../setup/contexts/card.context";
import { Card } from "../card";

export const CardList: FC = () => {
    const { filteredData } = useCard();
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 xl:grid-cols-12 gap-5 my-8">
      {filteredData.map((card: CardType) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};
