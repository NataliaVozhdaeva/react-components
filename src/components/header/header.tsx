import { Component } from 'react';
import './header.css';
import './search-bar.css';

interface Props {
  searchHandler: () => void;
}

export class Header extends Component<Props, { searchHandler: () => void }> {
  render() {
    return (
      <header className="header">
        <h4 className="title">Type here what you want to find</h4>
        <div className="search-container">
          <input id="search-bar" className="search-bar" type="text" />
          <button
            type="button"
            className="btn"
            onClick={() => this.props.searchHandler()}
          >
            Search
          </button>
        </div>
      </header>
    );
  }
}
