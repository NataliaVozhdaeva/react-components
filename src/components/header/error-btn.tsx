import { useState, useEffect } from 'react';

export function ErrorBtn(): JSX.Element {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      throw new Error('ta-ta-ta-ta-ta-ta-ta-ta-taaa');
    }
  }, [hasError]);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <button className="btn btn-error" onClick={handleError}>
      Show me an Error
    </button>
  );
}
