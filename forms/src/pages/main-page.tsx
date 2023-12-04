import { Link } from 'react-router-dom';

const MainPage = () => {
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
    </div>
  );
};

export { MainPage };
