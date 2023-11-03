interface State {
  description: Item[];
  isDefault: boolean;
}

interface Item {
  'this is': string;
  'name or title': string;
  [key: string]: string;
}

export type { State, Item };
