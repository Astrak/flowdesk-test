import { PAIRS } from "../constants";
import { useTicker } from "../utils/queries";
import styled from "styled-components";

const InfoBox = styled.div``;

export function TickerInfo({ pair }: { pair: PAIRS }) {
  const { data: ticker } = useTicker(pair);
  return (
    <InfoBox>
      <h2>{ticker?.symbol}</h2>
      <p>Price: {ticker?.price}</p>
    </InfoBox>
  );
}
