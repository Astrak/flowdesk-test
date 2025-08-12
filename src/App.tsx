import { TickerInfo } from "./components/TickerInfo";
import { useState } from "react";
import { PAIRS } from "./constants";
import { Ticker24hInfo } from "./components/Ticker24hInfo";
import { TradesTable } from "./components/TradesTable";

function App() {
  const [pair, setPair] = useState<PAIRS>(PAIRS.BTCUSDT);
  return (
    <div>
      <h2>{pair}</h2>
      <TickerInfo pair={pair} />
      <Ticker24hInfo pair={pair} />
      <TradesTable pair={pair} />
    </div>
  );
}

export default App;
