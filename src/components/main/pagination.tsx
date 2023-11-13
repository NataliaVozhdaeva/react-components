import { useState, useEffect } from 'react';
import { PaginationProps } from '../../services/interfaces';
import './pagination.css';

const Pagination = ({ callbackPage }: PaginationProps) => {
  const [currentPage, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    callbackPage(currentPage, limit);
  }, [currentPage, limit]);

  const pagePlus = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const pageMinus = () => {
    setPage((currentPage) => currentPage - 1);
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
        <span>5</span>
        <input
          id="itemAmount"
          type="range"
          step="5"
          min="5"
          max="20"
          className="range"
          onChange={getLimit}
        />
        <span>20</span>
      </div>
    </div>
  );
};

export { Pagination };
