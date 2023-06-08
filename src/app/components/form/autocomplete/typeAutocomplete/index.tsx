import { Dispatch, FC, SetStateAction } from "react";

import { useCard } from "../../../../../setup/contexts/card.context";
import { SearchCredentials } from "../../../../../setup/types/searchCredential.type";

interface IProps {
  typeFocus: boolean;
  typesSelected: string[];
  credentials: SearchCredentials;
  setCredentials: Dispatch<SetStateAction<SearchCredentials>>;
}

export const TypeAutocomplete: FC<IProps> = ({ typeFocus, credentials, setCredentials, typesSelected }) => {
  const { types } = useCard();
  return (
    <div className={`w-full`}>
      <ul
        className={`${typeFocus ? "visible" : "hidden"} h-36 overflow-scroll`}
      >
        {types
          .filter((type: string) => type.includes(credentials.type) && !typesSelected.includes(type))
          .map((type: string, index: number) => (
            <li
              key={index}
              onClick={() => setCredentials({ ...credentials, type })}
            >
              {type}
            </li>
          ))}
      </ul>
    </div>
  );
};
