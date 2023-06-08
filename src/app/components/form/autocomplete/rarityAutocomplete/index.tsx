import { Dispatch, FC, SetStateAction } from "react";

import { rarities } from "../../../../../setup/utils/rarity.util";
import { Rarity } from "../../../../../setup/types/rarity.type";
import { SearchCredentials } from "../../../../../setup/types/searchCredential.type";

interface IProps {
    credentials: SearchCredentials;
    setCredentials: Dispatch<SetStateAction<SearchCredentials>>
    rarityFocus: boolean;
}

export const RarityAutocomplete: FC<IProps> = ({ credentials, setCredentials, rarityFocus }) => {
  return (
      <ul className={`w-1/3 ${rarityFocus ? "visible": "hidden"} h-36 overflow-scroll`}>
        {rarities
          .filter((rarity: Rarity) => rarity.value.includes(credentials.rarity))
          .map((rarity: Rarity, index: number) => (
            <li key={index} onClick={() => setCredentials({...credentials, rarity: rarity.value})}>{rarity.value}</li>
          ))}
      </ul>
  );
};
