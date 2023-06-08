import { ChangeEvent, FC, useState } from "react";
import { useCard } from "../../../../setup/contexts/card.context";
import { Card } from "../../../../setup/types/card.type";
import { RarityAutocomplete } from "../autocomplete/rarityAutocomplete";

export const SearchForm: FC = () => {
  const [credentials, setCredentials] = useState<{
    type: string;
    rarity: string;
    name: string;
  }>({
    type: "",
    rarity: "",
    name: "",
  });
  const [typeFocus, setTypeFocus] = useState<boolean>(false);
  const [rarityFocus, setRarityFocus] = useState<boolean>(false);

  const { filteredData, setFilteredData } = useCard();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeFocus = () => {
    setTypeFocus(true);
  };

  const handleTypeBlur = () => {
    setTypeFocus(false);
  };

  const handleRarityFocus = () => {
    setRarityFocus(true);
  };

  const handleRarityBlur = () => {
    setRarityFocus(false);
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
          (card.type === credentials.type &&
            card.rarity === credentials.rarity) ||
          card.name === credentials.name
        );
      });

      setFilteredData(filtered);
    }
  };

  return (
    <section>
      <form>
        <div className="flex items-center py-2">
          <div className="w-1/3">
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
              onFocus={handleTypeFocus}
              onBlur={handleTypeBlur}
              value={credentials.type}
            />
          </div>
          <div className="w-1/3">
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
              onFocus={handleRarityFocus}
              onBlur={handleRarityBlur}
              value={credentials.rarity}
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
      <div className="w-full flex">
        <div className={`w-1/3`}>
          <ul className={`${typeFocus ? "visible" : "hidden"}`}>
            <li>test</li>
          </ul>
        </div>
        <RarityAutocomplete
          credentials={credentials}
          setCredentials={setCredentials}
          rarityFocus={rarityFocus}
        />
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};
