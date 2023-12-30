import { Row, Text } from "@/components";
import { Danger } from "iconsax-react";

const ErrorBoundary = () => {
  return (
    <Row className="p-4 text-center h-96 items-center justify-center">
      <div>
        <Danger size="60" className="!text-red-600 mx-auto" />
        <Text className="text-center !text-red-600 !text-lg">
          ooops? <br /> Something went wrong :(
        </Text>
      </div>
    </Row>
  );
};

export default ErrorBoundary;
