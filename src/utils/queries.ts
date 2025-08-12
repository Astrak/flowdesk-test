import { BINANCE_API_ENDPOINTS } from "../constants";
import { createHookFor } from "./helpers";
import { TTicker, TTicker24 } from "./types";

export const useTicker = (pair: string) =>
  createHookFor<TTicker>(BINANCE_API_ENDPOINTS.TICKER, pair);

export const useTicker24 = (pair: string) =>
  createHookFor<TTicker24>(BINANCE_API_ENDPOINTS.TICKER_24h, pair);

export const useTrades = (pair: string) =>
  createHookFor(BINANCE_API_ENDPOINTS.TRADES, pair);
