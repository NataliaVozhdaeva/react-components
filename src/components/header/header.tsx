import { Component } from 'react';
import { SearchBar } from './search-bar';

import './header.css';


export class Header extends Component {
  render() {

    return    (
    <header className='header'>
    <SearchBar />
    </header>)
  }
}
