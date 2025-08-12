import { PAIRS } from "../constants";
import { useTicker } from "../utils/queries";
import styled from "styled-components";

const InfoBox = styled.div``;

export function TickerInfo({ pair }: { pair: PAIRS }) {
  const { data: ticker } = useTicker(pair);
  return (
    <InfoBox>
      <h1>Price: {ticker?.price}</h1>
    </InfoBox>
  );
}
