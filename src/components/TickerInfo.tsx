import { PAIRS } from "../constants";
import { useTicker } from "../utils/queries";
import styled from "styled-components";

const InfoBox = styled.div``;

export function TickerInfo({ pair }: { pair: PAIRS }) {
  const { data: ticker, isLoading } = useTicker(pair);
  return (
    <InfoBox>
      {isLoading && <p>Loading...</p>}
      <h1>Price: ${ticker && Number(ticker?.price).toLocaleString("en-US")}</h1>
    </InfoBox>
  );
}
