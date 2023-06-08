export type Card = {
    artist: string;
    cmc: number;
    colorIdentity: string[];
    colors: string[];
    foreignNames: {
        flavor: string;
        imageUrl: string;
        language: string;
        multiverseid: number;
        name: string;
        text: string;
        type: string;
    }[];
    id: string;
    imageUrl: string;
    layout: string;
    legalities: {
        format: string;
        legality: string;
    }[];
    manaCost: string;
    multiverseid: number;
    name: string;
    number: string;
    originalText: string;
    originalType: string;
    power: string;
    rarity: string;
    subtypes: string[];
    text: string;
    toughness: string;
    type: string;
    types: string[];
    variations: string[];
}