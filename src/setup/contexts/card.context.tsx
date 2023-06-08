import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { Card } from "../types/card.type";
import { ApiService } from "../services/api.service";

type Context = {
    data: Card[];
    filteredData: Card[];
    setFilteredData: Dispatch<SetStateAction<Card[]>>
    types: string[];
};

const CardContext = createContext<Context>({
    data: [],
    filteredData: [],
    setFilteredData: () => {},
    types: [],
});

export const CardProvider: FC = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState<Card[]>([]);
    const [filteredData, setFilteredData] = useState<Card[]>([]);
    const [types, setTypes] = useState<string[]>([]);

    const handleFetch = async () => {
        const response = await ApiService.getCard();
        setData(response);
        setFilteredData(response);
        const uniqueTypes = [...new Set(response.map((card) => card.type))];
        setTypes(uniqueTypes);
      };
    
      useEffect(() => {
        handleFetch();
      }, []);


  return <CardContext.Provider value={{data, filteredData, setFilteredData, types}}>{children}</CardContext.Provider>;
};

export const useCard = () => useContext<Context>(CardContext);