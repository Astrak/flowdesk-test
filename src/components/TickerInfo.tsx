import { useTicker, useTicker24 } from "../utils/queries";

export function TickerInfo() {
  const { data: result } = useTicker24("BTCUSDT");
  return <p>{result?.quoteVolume}</p>;
}
