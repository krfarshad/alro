import { AppProvider } from "@/context";
import { ErrorFallback } from "./features/errorBoundary";

function App() {
  return (
    <ErrorFallback>
      <AppProvider />
    </ErrorFallback>
  );
}

export default App;
