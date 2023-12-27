import { Text } from "@/components";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="text-center pt-4 border-t border-slate-600 mt-2">
      <Text className="text-gray-400 text-sm font-light">
        © 2023 <Link to="/">Alro</Link>. All rights reserved.
      </Text>
    </div>
  );
};

export default Copyright;
