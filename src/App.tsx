import { TickerInfo } from "./components/TickerInfo";
import { useState } from "react";
import { PAIRS } from "./constants";
import { Ticker24hInfo } from "./components/Ticker24hInfo";
import { TradesTable } from "./components/TradesTable";
import { Selector } from "./components/Selector";

function App() {
  const [pair, setPair] = useState<PAIRS>(PAIRS.BTCUSDT);
  return (
    <div>
      <Selector value={pair} onChange={setPair} />
      <h2>{pair}</h2>
      <TickerInfo pair={pair} />
      <Ticker24hInfo pair={pair} />
      <TradesTable pair={pair} />
    </div>
  );
}

export default App;
