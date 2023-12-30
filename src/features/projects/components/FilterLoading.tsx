import { Row } from "@/components";

const FilterLoading = () => {
  return (
    <Row className="w-full h-96">
      <div className="h-full w-1/2 md:w-1/3 p-1">
        <div className="bg-slate-200 w-full h-full rounded-sm"></div>
      </div>
      <div className="h-full w-1/2 md:w-1/3 rounded-sm p-1">
        <div className="bg-slate-200 w-full h-full rounded-sm"></div>
      </div>
      <div className="h-full hidden md:block w-1/3 rounded-sm p-1">
        <div className="bg-slate-200 w-full h-full rounded-sm"></div>
      </div>
    </Row>
  );
};
export default FilterLoading;
