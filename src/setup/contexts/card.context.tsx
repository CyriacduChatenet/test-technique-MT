import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from "react";

import { Card } from "../types/card.type";
import { ApiService } from "../services/api.service";

type Context = {
    data: Card[];
    filteredData: Card[];
    setFilteredData: Dispatch<SetStateAction<Card[]>>
};

const CardContext = createContext<Context>({
    data: [],
    filteredData: [],
    setFilteredData: () => {},
});

export const CardProvider: FC = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState<Card[]>([]);
    const [filteredData, setFilteredData] = useState<Card[]>([]);

    const handleFetch = async () => {
        const response = await ApiService.getCard();
        setData(response);
        setFilteredData(response);
        console.log(response);
      };
    
      useEffect(() => {
        handleFetch();
      }, []);


  return <CardContext.Provider value={{data, filteredData, setFilteredData}}>{children}</CardContext.Provider>;
};

export const useCard = () => useContext<Context>(CardContext);