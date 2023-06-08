import { FC } from "react";

import { Card as CardType } from "../../../setup/types/card.type";
import { rarities } from "../../../setup/utils/rarity.util";
import { Rarity } from "../../../setup/types/rarity.type";

interface IProps {
  data: CardType;
}

export const Card: FC<IProps> = ({ data }) => {
  return (
    <div className="col-span-4 h-30">
      <div
        className="rounded-lg overflow-hidden border border-gray-300 shadow-md"
        style={{ backgroundColor: data.rarity && rarities.find((rarity: Rarity) => rarity.value === data.rarity)?.color }}
      >
        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {data.name}
          </h2>
          <p className="text-gray-700 text-lg my-2">{data.rarity}</p>
          <p className="text-gray-700 text-sm">{data.text}</p>
        </div>
      </div>
    </div>
  );
};
