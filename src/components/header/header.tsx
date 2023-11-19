import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../store/search-slice';
import { ErrorBtn } from './error-btn';
import { Term } from '../../services/interfaces';

import './search-bar.css';
import './header.css';

export function Header(): JSX.Element {
  const dispatch = useDispatch();
  let term = useSelector((state: Term) => state.search.term);

  const handleInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    term = e.target.value;
  };

  const searchHandler = () => {
    dispatch(searchActions.changeTerm(term));
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
