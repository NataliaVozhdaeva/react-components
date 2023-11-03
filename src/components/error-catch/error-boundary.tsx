import { Component } from 'react';
import { ErrorProps, ErrorState } from '../../services/interfaces';
import './error-boundary.css';

export default class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state: ErrorState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    console.log('Uncaught error:', error);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="err-body">
          <h1 className="err-title">Sorry.. there was an error</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
