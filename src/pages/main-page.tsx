import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-wrapper">
      главная
      <div className="link-container">
        <Link to="withreactform" className="link link-to-form">
          fill with reactform
        </Link>
        <Link to="withoutreactform" className="link link-to-form">
          fill without reactform
        </Link>
      </div>
    </div>
  );
};

export { MainPage };
