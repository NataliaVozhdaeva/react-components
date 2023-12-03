interface PageProps {
  pagination: { currentPage: number; limit: number };
}

interface AppProps {
  loading: { isFetching: boolean };
  pokeList: { pokelist: Item[] };
}

interface CardProps {
  item: string;
}

interface PaginationProps {
  callbackPage: (currentPage: number, limit: number) => void;
}

interface Term {
  search: { term: string };
}

interface Limit {
  pagination: { limit: number };
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

interface Pokemon {
  //sprites: { other: { dream_world: { front_default: string } } };
  img: string;
  name: string;
  abilities: [];
}

interface FetchBody {
  pokeList: Item[];
  /* sprites: { other: { dream_world: { front_default: string } } };
  name: string;
  abilities: []; */
}

type Abilities = {
  ability: { name: string; url: string };
};

interface HeaderProps {
  callbackSearch: (search: string) => void;
}

export type {
  Pokemon,
  Item,
  CardProps,
  ErrorState,
  ErrorProps,
  PaginationProps,
  Term,
  Abilities,
  PageProps,
  AppProps,
  FetchBody,
  HeaderProps,
  Limit,
};
