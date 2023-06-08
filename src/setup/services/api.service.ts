import { Card } from "../types/card.type";

const getCard = async (): Promise<Card[]> => {
  try {
    const response = await fetch("https://api.magicthegathering.io/v1/cards");
    const data = await response.json();
    return data.cards;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const ApiService = {
  getCard,
};
