import { useState } from 'react';
import { PaginationProps } from '../../services/interfaces';

const Pagination = ({ callbackPage }: PaginationProps) => {
  const [currentPage, setPage] = useState(1);

  const pagePlus = () => {
    setPage(currentPage + 1);
    pageHandler();
  };

  const pageMinus = () => {
    setPage(currentPage - 1);
    pageHandler();
  };

  const pageHandler = () => {
    callbackPage(currentPage);
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
