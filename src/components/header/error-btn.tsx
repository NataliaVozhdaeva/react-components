import { useState, useEffect } from 'react';

function ErrorBtn(): JSX.Element {
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

export { ErrorBtn };
/* 

  render() {
    if (this.state.hasError) {
      throw new Error('Test error');
    }
    return (
      <button className="btn btn-error" onClick={this.handleError}>
        Show me an Error
      </button>
    );
  }
} */
