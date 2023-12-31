import { Row } from "..";

const SpinnerLoading = () => {
  return (
    <div className="text-center p-8">
      <Row className="mx-auto w-8 h-8 justify-center">
        <div className="custom-animate-bounce bg-gray-300 h-4 w-4 rounded-full m-1" />
        <div className="custom-animate-bounce bg-gray-300 h-4 w-4 rounded-full m-1 animate-delay" />
        <div className="custom-animate-bounce bg-gray-300 h-4 w-4 rounded-full m-1" />
        <div className="custom-animate-bounce bg-gray-300 h-4 w-4 rounded-full m-1 animate-delay" />
      </Row>
    </div>
  );
};

export default SpinnerLoading;
