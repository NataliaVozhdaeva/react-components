import { useState, useEffect } from 'react';
import { ErrorBtn } from './error-btn';
import { HeaderProps } from '../../services/interfaces';
import './search-bar.css';
import './header.css';

export function Header({ callbackSearch }: HeaderProps): JSX.Element {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const savedTerm = localStorage.getItem('term') || '';
    setTerm(savedTerm);
  }, []);

  const searchHandler = () => {
    callbackSearch(term);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTerm(e.target.value);
    localStorage.setItem('term', e.target.value);
  };

  return (
    <header className="header">
      <h4 className="title">Type here what you want to find</h4>
      <div className="wrapper">
        <div className="search-container">
          <input
            id="search-bar"
            className="search-bar"
            type="text"
            onChange={handleInput}
            data-testid="search-input"
            value={term}
          />
          <button type="button" className="btn" onClick={searchHandler}>
            Search
          </button>
        </div>
        <ErrorBtn />
      </div>
    </header>
  );
}
