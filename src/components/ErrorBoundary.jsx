import React from 'react';
import '../App.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('Error:', error);
    console.log('Error Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h2 className='error-message'>Whoops....Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Go Back
          </button>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
