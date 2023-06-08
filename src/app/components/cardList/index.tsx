import { FC, useState } from "react";

import { Card as CardType } from "../../../setup/types/card.type";
import { useCard } from "../../../setup/contexts/card.context";
import { Card } from "../card";
import { Paginator } from "../paginator";

export const CardList: FC = () => {
  const [page, setPage] = useState(1);

  const { filteredData } = useCard();
  const ITEM_PER_PAGE = 30;

  const indexOfLastItem = page * ITEM_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEM_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <section>
      <div className="grid grid-cols-4 lg:grid-cols-12 xl:grid-cols-12 gap-5 my-8">
        {currentItems.map((card: CardType) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <div className="w-full flex justify-center">
      <Paginator itemsPerPage={ITEM_PER_PAGE} setPage={setPage} filteredData={filteredData} page={page} />
      </div>
    </section>
  );
};
