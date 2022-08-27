import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("Logging error---> ", error, errorInfo);
  }
  render() {
    // So if there is an error anywhere inside the error boundary it will show a fallback ui or else it will show props.children which means the other components ---> see react props.children if you get confused.
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
