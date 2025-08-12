import * as z from "zod";

export const Ticker = z.object({
  symbol: z.string(),
  price: z.string(),
});

export type TTicker = z.infer<typeof Ticker>;

export const Ticker24 = z.object({
  symbol: z.string(),
  priceChange: z.string(),
  priceChangePercent: z.string(),
  weightedAvgPrice: z.string(),
  prevClosePrice: z.string(),
  lastPrice: z.string(),
  lastQty: z.string(),
  bidPrice: z.string(),
  bidQty: z.string(),
  askPrice: z.string(),
  askQty: z.string(),
  openPrice: z.string(),
  highPrice: z.string(),
  lowPrice: z.string(),
  volume: z.string(),
  quoteVolume: z.string(),
  openTime: z.number(),
  closeTime: z.number(),
  firstId: z.number(),
  lastId: z.number(),
  count: z.number(),
});

export type TTicker24 = z.infer<typeof Ticker24>;

export const Trades = z.array(
  z.object({
    id: z.number(),
    price: z.string(),
    qty: z.string(),
    quoteQty: z.string(),
    time: z.number(),
    isBuyerMaker: z.boolean(),
    isBestMatch: z.boolean(),
  })
);

export type TTrades = z.infer<typeof Trades>;
