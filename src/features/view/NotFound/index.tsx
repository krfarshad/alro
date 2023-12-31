import { SpinnerLoading, Title } from "@/components";
import { Suspense, lazy } from "react";

const LazyLottie = lazy(() => import("./Animation"));

const NotFound = () => {
  return (
    <div className="text-center">
      <Suspense fallback={<SpinnerLoading />}>
        <LazyLottie />
      </Suspense>
      <Title>Nothing found!</Title>
    </div>
  );
};

export default NotFound;
