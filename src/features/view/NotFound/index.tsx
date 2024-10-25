import { SpinnerLoading, Title } from "@/components";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

const LazyLottie = lazy(() => import("./Animation"));

const NotFound = () => {
  return (
    <div className="text-center">
      <Suspense fallback={<SpinnerLoading />}>
        <LazyLottie />
      </Suspense>
      <Title>Nothing found!</Title>
      <Link
        to="/"
        className="bg-slate-700 text-white px-14 py-4 mt-6 rounded-md text-sm inline-block mx-auto transition-all hover:transition-all hover:bg-slate-900"
      >
        BACK TO HOME PAGE
      </Link>
    </div>
  );
};

export default NotFound;
