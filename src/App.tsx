import { TickerInfo } from "./components/TickerInfo";
import { useState } from "react";
import { PAIRS } from "./constants";
import { Ticker24hInfo } from "./components/Ticker24hInfo";
import { TradesTable } from "./components/TradesTable";
import { Selector } from "./components/Selector";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: end;
  margin: 50px;
  padding: 30px;
  gap: 30px;
  width: fit-content;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    hsl(230, 84%, 58%) 0%,
    hsl(230, 84%, 38%) 90%
  );
  box-shadow: 0 0 12px hsl(248, 68%, 14.7%) inset;
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
