import React from 'react';

const PokemonDetailsContext = React.createContext([
  {
    name: '',
    img: '',
    abilities: [],
  },
]);

export { PokemonDetailsContext };
