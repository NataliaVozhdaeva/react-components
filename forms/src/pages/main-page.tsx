import { Link } from 'react-router-dom';
import { FilledForm } from '../components/error-catch/filled-form';
import { useSelector } from 'react-redux';
import { RootState } from '../store/hookForm-slice';

const MainPage = () => {
  const isFilled = useSelector((state: RootState) => state.dataHook.isFilled);

  return (
    <div className="main-wrapper">
      <h2 className="title">Fill the form below</h2>
      <div className="link-container">
        <Link to="withreactform" className="link link-to-form">
          Fill with reactform
        </Link>
        <Link to="withoutreactform" className="link link-to-form">
          Fill without reactform
        </Link>
      </div>

      <div className="form-data">
        {isFilled === true ? <FilledForm /> : null}
      </div>
    </div>
  );
};

export { MainPage };
