import { Component } from 'react';
import './search-bar.css';



export class SearchBar extends Component {
  render() {
    return (
      <>
      <h4 className='title'>Type here what you want to find</h4>
    <input id="search-bar" className='search-bar'   type="text"  /></> );
  }
}
