import { Component } from 'react';
//import SearchFunction from '../../services/search-func';
import './search-bar.css';

export class SearchBar extends Component {
  // searchHandler = new SearchFunction();
  //event: MouseEvent<HTMLButtonElement, MouseEvent>): void

  searchHandler(): void {
    const searchItem = document.querySelector('input')?.value;
    console.log(searchItem);
  }

  render() {
    return (
      <>
        <h4 className="title">Type here what you want to find</h4>
        <div className="search-container">
          <input id="search-bar" className="search-bar" type="text" />
          <button type="button" className="btn" onClick={this.searchHandler}>
            Search
          </button>
        </div>
      </>
    );
  }
}
