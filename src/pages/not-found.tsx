import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <div className="main-card">
        <p>This page wasn&#39;t found</p>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export { NotFoundPage };
