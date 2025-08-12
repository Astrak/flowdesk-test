import { PAIRS } from "../constants";
import { useTicker24 } from "../utils/queries";

export function TickerInfo() {
  const { data: result } = useTicker24(PAIRS.AAVEUSDT);
  return <p>{result?.quoteVolume}</p>;
}
