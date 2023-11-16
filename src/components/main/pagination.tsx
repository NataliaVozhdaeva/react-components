import { useState, useEffect } from 'react';
import { PaginationProps, PageProps } from '../../services/interfaces';
import { pageActions } from '../../store/store-page';
import { useDispatch, useSelector } from 'react-redux';

import './pagination.css';

const Pagination = ({ callbackPage }: PaginationProps) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: PageProps) => state.currentPage);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    callbackPage(currentPage, limit);
  }, [currentPage, limit]);

  const pagePlus = () => {
    dispatch(pageActions.pagePlus());
  };

  const pageMinus = () => {
    dispatch(pageActions.pageMinus());
  };

  const getLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <div className="pagination">
      <div className="page-contaner">
        <button className="btn page-btn page-prev" onClick={pageMinus}>
          &#10148;
        </button>
        <div className="page-number">{currentPage}</div>
        <button className="btn page-btn page-next" onClick={pagePlus}>
          &#10148;
        </button>
      </div>
      <div className="range-wrapper">
        <label htmlFor="itemAmount" className="label">
          Items per page
        </label>
        <input
          id="itemAmount"
          type="range"
          step="5"
          min="5"
          max="20"
          className="range"
          onChange={getLimit}
        />
        <span>{limit}</span>
      </div>
    </div>
  );
};

export { Pagination };
