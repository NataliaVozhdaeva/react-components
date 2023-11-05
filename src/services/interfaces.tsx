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

interface HeaderState {
  term: string;
}

interface ErrorState {
  hasError: boolean;
}

interface ErrorProps {
  children?: JSX.Element;
}

export type {
  Item,
  HeaderProps,
  HeaderState,
  MainProps,
  ErrorState,
  ErrorProps,
};
