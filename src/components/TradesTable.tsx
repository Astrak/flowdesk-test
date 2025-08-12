import { PAIRS } from "../constants";
import { useTrades } from "../utils/queries";
import styled from "styled-components";
import { TTrade } from "../utils/types";

const Table = styled.table``;

const HeadingTd = ({ tag, sort }: { tag: keyof TTrade; sort?: () => {} }) => (
  <td onClick={sort}>{tag}</td>
);

const TradeRow = ({ trade }: { trade: TTrade }) => (
  <tr>
    {(Object.keys(trade) as Array<keyof TTrade>).map((keyName, i) => (
      <td key={i}>{trade[keyName]}</td>
    ))}
  </tr>
);

export function TradesTable({ pair }: { pair: PAIRS }) {
  const { data: trades, isLoading } = useTrades(pair);

  return (
    <div>
      <h2>Trades</h2>
      {isLoading && <p>Loading...</p>}
      {trades && (
        <Table>
          <thead>
            {trades &&
              (Object.keys(trades[0]) as Array<keyof TTrade>).map(
                (keyName, i) => <HeadingTd key={i} tag={keyName} />
              )}
          </thead>
          <tbody>
            {trades.map((trade, i) => (
              <TradeRow key={i} trade={trade} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
