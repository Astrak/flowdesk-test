import { TickerInfo } from "./components/TickerInfo";
import { useState } from "react";
import { PAIRS } from "./constants";
import { Ticker24hInfo } from "./components/Ticker24hInfo";
import { TradesTable } from "./components/TradesTable";
import { Selector } from "./components/Selector";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  const [pair, setPair] = useState<PAIRS>(PAIRS.BTCUSDT);
  return (
    <Container>
      <div>
        <Selector value={pair} onChange={setPair} />
        <TickerInfo pair={pair} />
        <Ticker24hInfo pair={pair} />
      </div>
      <div>
        <TradesTable pair={pair} />
      </div>
    </Container>
  );
}

export default App;
