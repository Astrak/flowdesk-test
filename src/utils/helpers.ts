import { useQuery } from "@tanstack/react-query";
import { BINANCE_API_ENDPOINTS } from "../constants";
import axios from "axios";

export function createHookFor<T>(
  endpoint: BINANCE_API_ENDPOINTS,
  pair: string,
  assertFn: (parsedResult: T) => {}
) {
  return (function (pair) {
    return useQuery({
      queryKey: [endpoint, pair],
      queryFn: async (): Promise<T> => {
        const result = await axios.get(`${endpoint}${pair}`, {
          headers: { Accept: "application/json" },
        });
        try {
          assertFn(result.data);
        } catch (e) {
          console.error(e);
          console.error(
            `Data received do not match schema: called ${endpoint}${pair}, received:`,
            result.data
          );
        }
        return result.data;
      },
    });
  })(pair);
}
