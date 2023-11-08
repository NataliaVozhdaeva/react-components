/* interface Item {
  name: string,
  url: string
}
 */
/*   interface MainProps {
description: Item | Item[];
  isDefault: boolean;
}
 */
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
} /* 
  height: string;
  mass: string;
  birth_year: string; 
}*/

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
  //MainProps,
  ErrorState,
  ErrorProps,
  Pokemon,
  PaginationProps,
  OutletProps,
  DetailsProps,
};
