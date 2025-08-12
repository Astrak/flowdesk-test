import { useQuery } from "@tanstack/react-query";
import { BINANCE_API_ENDPOINTS } from "../constants";
import axios from "axios";

export function createHookFor<T>(
  endpoint: BINANCE_API_ENDPOINTS,
  pair: string
) {
  return (function (pair) {
    return useQuery({
      queryKey: [endpoint, pair],
      queryFn: async (pair): Promise<T> => {
        const result = await axios.get(endpoint + pair);
        return result.data;
      },
      refetchInterval: 10,
    });
  })(pair);
}
