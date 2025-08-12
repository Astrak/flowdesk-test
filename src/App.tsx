import { TickerInfo } from "./components/TickerInfo";
import { useState } from "react";
import { PAIRS } from "./constants";

function App() {
  const [pair, setPair] = useState<PAIRS>(PAIRS.BTCUSDT);
  return (
    <div>
      <TickerInfo pair={pair} />
    </div>
  );
}

export default App;
