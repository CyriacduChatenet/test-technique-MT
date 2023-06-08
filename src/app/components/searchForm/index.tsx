import { ChangeEvent, FC, useState } from "react";
import { useCard } from "../../../setup/contexts/card.context";
import { Card } from "../../../setup/types/card.type";

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

  const { filteredData, setFilteredData } = useCard();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
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
          (card.type[0] === credentials.type &&
            card.rarity === credentials.rarity) ||
          card.name === credentials.name
        );
      });

      setFilteredData(filtered);
    }
  };

  return (
    <form>
      <div className="flex items-center border-b border-blue-700 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="type"
          placeholder="Search by type"
          aria-label="Search by type"
          onChange={handleChange}
        />
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="rarity"
          placeholder="Search by rarity"
          aria-label="Search by rarity"
          onChange={handleChange}
        />
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="name"
          placeholder="Search by name"
          aria-label="Search by name"
          onChange={handleChange}
        />

        <button
          className="flex-shrink-0 bg-blue-700 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};
