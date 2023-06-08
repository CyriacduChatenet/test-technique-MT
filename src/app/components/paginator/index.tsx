import { Dispatch, FC, SetStateAction } from "react";

import { Card } from "../../../setup/types/card.type";

interface IProps {
    itemsPerPage : number;
    setPage: Dispatch<SetStateAction<number>>;
    filteredData: Card[];
}

export const Paginator: FC<IProps> = ({ itemsPerPage, setPage, filteredData }) => {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    window.scrollTo(0, 0);
    setPage(page);
  };
  return (
    <div className="w-1/2 flex justify-evenly items-center my-8">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className="px-4 py-2 bg-blue-700 text-white font-bold"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
