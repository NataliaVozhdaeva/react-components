interface Item {
  [key: string]: string;
}

interface MainProps {
  description: Item | Item[];
  isDefault: boolean;
}

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

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

export type {
  Item,
  HeaderProps,
  HeaderState,
  MainProps,
  ErrorState,
  ErrorProps,
  Person,
  PaginationProps,
};
