interface HeaderProps {
  callbackSearch: (search: string) => void;
}

interface PageProps {
  pagination: { currentPage: number; limit: number };
}

interface AppProps {
  loading: { isFetching: boolean };
  pokeList: { pokelist: Item[] };
}

interface PaginationProps {
  callbackPage: (currentPage: number, limit: number) => void;
}

interface MainProps {
  description: Item[];
  limit: number;
}

interface HeaderState {
  term: string;
}

interface ErrorState {
  hasError: boolean;
}

interface ErrorProps {
  children?: JSX.Element;
}

interface Item {
  name: string;
  url: string;
}

interface FetchBody {
  results: [];
}

interface CardProps {
  item: Item;

  callbackUpdate?: (name: string) => void;
}

interface OutletProps {
  context?: unknown;
}

type Pokemon = {
  name: string;
  sprites: { other: { dream_world: { front_default: string } } };
  //img: string
  abilities: [];
};

type Abilities = {
  ability: { name: string; url: string };
};

export type {
  Item,
  HeaderProps,
  HeaderState,
  ErrorState,
  ErrorProps,
  Pokemon,
  PaginationProps,
  OutletProps,
  CardProps,
  MainProps,
  Abilities,
  PageProps,
  AppProps,
  FetchBody,
};
