interface HeaderProps {
  callbackSearch: (search: string) => void;
}

interface PaginationProps {
  callbackPage: (search: number) => void;
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

interface OutletProps {
  context?: unknown;
}

interface DetailsProps {
  person: [][];
}

interface Pokemon {
  name: string;
  img: string;
  abilities?: [];
}

export type {
  Item,
  HeaderProps,
  HeaderState,
  ErrorState,
  ErrorProps,
  Pokemon,
  PaginationProps,
  OutletProps,
  DetailsProps,
};
