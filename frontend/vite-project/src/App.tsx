import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import HomePage from "./pages/HomePage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-[80px]">
        <HomePage></HomePage>
      </div>
    </QueryClientProvider>
  );
}

export default App;
