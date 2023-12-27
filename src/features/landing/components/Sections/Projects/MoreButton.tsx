import { Button } from "@/components";
import { Link } from "react-router-dom";

const MoreButton = () => {
  return (
    <div className="text-right">
      <Button type="primary" variant="underlined" size="small">
        <Link to="/projects/">View All</Link>
      </Button>
    </div>
  );
};

export default MoreButton;
