import React from 'react';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
   
    this.setState({ hasError: true });
    
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
    
    }

   
    return this.props.children;
  }
}

export default ErrorBoundary;
