const BINANCE_API = "https://api.binance.com/api/v3/";

export enum BINANCE_API_ENDPOINTS {
  TICKER = `${BINANCE_API}/ticker/price?symbol=`,
  TICKER_24h = `${BINANCE_API}/ticker/24hr?symbol=`,
  TRADES = `${BINANCE_API}/trades?limit=50&symbol=`,
}
