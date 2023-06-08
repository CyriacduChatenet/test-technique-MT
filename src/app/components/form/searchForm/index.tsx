import { ChangeEvent, FC, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import { useCard } from "../../../../setup/contexts/card.context";
import { Card } from "../../../../setup/types/card.type";
import { RarityAutocomplete } from "../autocomplete/rarityAutocomplete";
import { TypeAutocomplete } from "../autocomplete/typeAutocomplete";
import { SearchCredentials } from "../../../../setup/types/searchCredential.type";

export const SearchForm: FC = () => {
  const [credentials, setCredentials] = useState<SearchCredentials>({
    type: "",
    rarity: "",
    name: "",
  });
  const [typeFocus, setTypeFocus] = useState<boolean>(false);
  const [rarityFocus, setRarityFocus] = useState<boolean>(false);
  const [types, setTypes] = useState<string[]>([]);

  const { filteredData, setFilteredData } = useCard();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeDelete = (index: number) => {
    setTypes((prev) => prev.filter((type: string, i: number) => i !== index));
  };

  const handleSubmit = () => {
    console.log(credentials);
    if (
      credentials.type.length > 0 ||
      credentials.rarity.length > 0 ||
      credentials.name.length > 0
    ) {
      const filtered = filteredData.filter((card: Card) => {
        return (
          (types.includes(card.type) && card.rarity === credentials.rarity) ||
          card.name === credentials.name
        );
      });

      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (credentials.type.length > 0) {
        setTypes((prev) => [...prev, credentials.type]);
        setCredentials((prev) => ({
          ...prev,
          type: "",
        }));
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [credentials.type]);

  return (
    <section>
      <div className="w-full my-4">
        <ul className="w-1/3 flex justify-between items-center">
          {types.map((type: string, index: number) => (
            <li
              key={index}
              className="rounded-full py-2 px-4 bg-gray-100 flex justify-between items-center"
            >
              <span>{type}</span>
              <button className="ml-4" onClick={() => handleTypeDelete(index)}>
                <Icon icon="material-symbols:close" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form>
        <div className="flex items-center py-2">
          <div
            className="w-1/3"
            onMouseEnter={() => setTypeFocus(true)}
            onMouseLeave={() => setTypeFocus(false)}
          >
            <label htmlFor="" className="font-bold">
              Type
            </label>
            <input
              className="appearance-none bg-transparent border-b border-blue-700 w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
              type="text"
              name="type"
              placeholder="Search by type"
              aria-label="Search by type"
              onChange={handleChange}
              value={credentials.type}
            />
            <TypeAutocomplete
              typeFocus={typeFocus}
              credentials={credentials}
              setCredentials={setCredentials}
            />
          </div>
          <div
            className="w-1/3"
            onMouseEnter={() => setRarityFocus(true)}
            onMouseLeave={() => setRarityFocus(false)}
          >
            <label htmlFor="" className="font-bold">
              Rarity
            </label>
            <input
              className="appearance-none bg-transparent border-b border-blue-700 w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
              type="text"
              name="rarity"
              placeholder="Search by rarity"
              aria-label="Search by rarity"
              onChange={handleChange}
              value={credentials.rarity}
            />
            <RarityAutocomplete
              credentials={credentials}
              setCredentials={setCredentials}
              rarityFocus={rarityFocus}
            />
          </div>
          <div className="w-1/3">
            <label htmlFor="" className="font-bold">
              Name
            </label>
            <input
              className="appearance-none bg-transparent border-b border-blue-700 w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
              type="text"
              name="name"
              placeholder="Search by name"
              aria-label="Search by name"
              onChange={handleChange}
              value={credentials.name}
            />
          </div>
          <button
            className="flex-shrink-0 bg-blue-700 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
