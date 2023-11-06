import { useState, useEffect } from 'react';
import { PaginationProps } from '../../services/interfaces';

const Pagination = ({ callbackPage }: PaginationProps) => {
  const [currentPage, setPage] = useState(1);
  useEffect(() => {
    callbackPage(currentPage);
  }, [currentPage]);

  const pagePlus = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const pageMinus = () => {
    setPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="page-contaner">
      <button className="btn page-btn page-prev" onClick={pageMinus}>
        &#10148;
      </button>
      <div className="page-number">{currentPage}</div>
      <button className="btn page-btn page-next" onClick={pagePlus}>
        &#10148;
      </button>
    </div>
  );
};

export { Pagination };
