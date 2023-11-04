interface State {
  description: Item | Item[];
  isDefault: boolean;
}

interface Item {
  [key: string]: string;
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

export type { State, Item, HeaderProps, HeaderState, ErrorState, ErrorProps };
