import { Component } from 'react';
import './header.css';
import './search-bar.css';

interface HeaderProps {
  callbackSearch: (search: string) => void;
  description: string[];
}

interface HeaderState {
  term: string;
}

export class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      term: '',
    };
  }

  handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({ term: e.target.value });
  };

  searchHandler = () => {
    this.props.callbackSearch(this.state.term);
  };

  render() {
    return (
      <header className="header">
        <h4 className="title">Type here what you want to find</h4>
        <div className="search-container">
          <input
            id="search-bar"
            className="search-bar"
            type="text"
            onChange={this.handleInput}
          />
          <button type="button" className="btn" onClick={this.searchHandler}>
            Search
          </button>
        </div>
      </header>
    );
  }
}
