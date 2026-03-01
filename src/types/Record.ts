export type SpeciesType =
  | "Xenomorph"
  | "Yautja"
  | "Engineer"
  | "Human"
  | "Synthetic"
  | "Hybrid";

export interface Character {
  id: string;
  name: string;
  species: SpeciesType;
  affiliation: string;
  origin: string;
  status: "Alive" | "Deceased" | "Destroyed" | "Unknown";
  description: string;
  dangerLevel: number;
  imageUrl: string;
  metadata?: {
    modelNumber?: string;
    firstAppearance: string;
  };
}

export interface MovieRecord {
  id: number;
  title: string;
  year: string;
  plot: string;
  category: "Predator" | "AvP" | "Alien";
  image: string;
}
