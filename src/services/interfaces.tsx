interface HeaderProps {
  callbackSearch: (search: string) => void;
}

interface PaginationProps {
  callbackPage: (search: number) => void;
}

interface CallbackUpdate {
  callbackUpdate: (pokemon: Pokemon) => void;
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

interface CardProps {
  item: Item;
  callbackUpdate?: (name: string) => void;
}

interface OutletProps {
  context?: unknown;
}

type Pokemon = {
  name: string;
  img: string;
  abilities?: [];
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
  CallbackUpdate,
  MainProps,
};
