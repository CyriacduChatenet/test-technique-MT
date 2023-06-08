import { Dispatch, FC, SetStateAction } from "react";
import { rarities } from "../../../../../setup/utils/rarity.util";
import { Rarity } from "../../../../../setup/types/rarity.type";

interface IProps {
    credentials: {type: string, rarity: string, name: string};
    setCredentials: Dispatch<SetStateAction<{type: string, rarity: string, name: string}>>
    rarityFocus: boolean;
}

export const RarityAutocomplete: FC<IProps> = ({ credentials, setCredentials, rarityFocus }) => {
  return (
      <ul className={`w-1/3 ${rarityFocus ? "visible": "hidden"}`}>
        {rarities
          .filter((rarity: Rarity) => rarity.value.includes(credentials.rarity))
          .map((rarity: Rarity, index: number) => (
            <li key={index} onClick={() => setCredentials({...credentials, rarity: rarity.value})}>{rarity.value}</li>
          ))}
      </ul>
  );
};
