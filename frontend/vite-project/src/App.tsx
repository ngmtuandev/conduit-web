import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "./layout/Layout";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-[80px]">
        <Layout></Layout>
      </div>
    </QueryClientProvider>
  );
}

export default App;
