import { Row, Text } from "@/components";
import { Danger } from "iconsax-react";
import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorFallback extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Row className="p-4 text-center h-96 items-center justify-center">
          <div>
            <Danger size="60" className="!text-red-600 mx-auto" />
            <Text className="text-center !text-red-600 !text-lg">
              Ooops! <br /> Something went wrong :(
            </Text>
          </div>
        </Row>
      );
    }

    return this.props.children;
  }
}
