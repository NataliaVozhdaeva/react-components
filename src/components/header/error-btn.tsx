import { Component } from 'react';
import { ErrorProps } from '../../services/interfaces';

export class ErrorBtn extends Component<ErrorProps> {
  constructor(props: ErrorProps) {
    super(props);
    this.handleError = this.handleError.bind(this);
  }

  state = {
    hasError: false,
  };

  handleError() {
    this.setState({ hasError: true });
  }

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
}
