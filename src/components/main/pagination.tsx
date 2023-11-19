import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../store/page-slice';
import { PageProps } from '../../services/interfaces';

import './pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: PageProps) => state.pagination.currentPage
  );
  const limit = useSelector((state: PageProps) => state.pagination.limit);

  const pagePlus = () => {
    dispatch(pageActions.pagePlus());
  };

  const pageMinus = () => {
    dispatch(pageActions.pageMinus());
  };

  const getLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(pageActions.changeLimit(Number(e.target.value)));
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
          step="3"
          min="3"
          max="12"
          className="range"
          onChange={getLimit}
          defaultValue={9}
        />
        <span>{limit}</span>
      </div>
    </div>
  );
};

export { Pagination };
