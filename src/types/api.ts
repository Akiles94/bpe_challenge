export type ListResponse = {
  results: Pokemon[];
};

export type Pokemon = {
  id?: number;
  name?: string;
  url?: string;
  types?: {slot: number; type: {name: string; url: string}}[];
  weight?: number;
  sprites?: {
    front_default: string;
    back_default: string;
    back_shiny: string;
    front_shiny: string;
  };
  moves?: {
    move: {
      name: string;
    };
  }[];
};
