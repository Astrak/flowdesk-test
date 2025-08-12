import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TickerInfo } from "./components/TickerInfo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TickerInfo />
    </QueryClientProvider>
  );
}

export default App;
