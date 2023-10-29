import React, { ErrorInfo } from 'react';

interface MyState {
  hasError: boolean;
}

interface MyProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="errorBoundary">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
