import { BINANCE_API_ENDPOINTS } from "../constants";
import { createHookFor } from "./helpers";
import { Ticker, Ticker24, Trades, TTicker, TTicker24, TTrades } from "./types";

export const useTicker = (pair: string) =>
  createHookFor<TTicker>(BINANCE_API_ENDPOINTS.TICKER, pair, Ticker.parse);

export const useTicker24 = (pair: string) =>
  createHookFor<TTicker24>(
    BINANCE_API_ENDPOINTS.TICKER_24H,
    pair,
    Ticker24.parse
  );

export const useTrades = (pair: string) =>
  createHookFor<TTrades>(BINANCE_API_ENDPOINTS.TRADES, pair, Trades.parse);
