import { PAIRS } from "../constants";
import { useTrades } from "../utils/queries";
import styled from "styled-components";
import { SortingKeys, TradeKeys, TTrade } from "../utils/types";
import { useState } from "react";

const Table = styled.table``;

const HeadingTd = ({ tag, sort }: { tag: keyof TTrade; sort?: () => void }) => (
  <td
    onClick={sort}
    style={{
      cursor: ["time", "qty", "price"].includes(tag) ? "pointer" : "default",
    }}
  >
    {tag}
  </td>
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
  const [sort, setSort] = useState<SortingKeys>("price");
  const [asc, setAsc] = useState(true);
  const sortTrades = () => {
    if (!trades) {
      return trades;
    }
    return trades.sort((a, b) => {
      const valA = Number(a[sort]);
      const valB = Number(b[sort]);
      return asc ? valA - valB : valB - valA;
    });
  };
  const sortedTrades = sortTrades();
  const handleSort = (key: SortingKeys) => {
    if (sort === key) {
      setAsc(!asc);
    } else {
      setSort(key);
      setAsc(true);
    }
  };
  return (
    <div>
      <h2>Trades</h2>
      {isLoading && <p>Loading...</p>}
      {sortedTrades && (
        <Table>
          <thead>
            {(TradeKeys as Array<keyof TTrade>).map((keyName, i) => {
              switch (keyName) {
                case "price":
                case "time":
                case "qty":
                  return (
                    <HeadingTd
                      key={i}
                      tag={keyName}
                      sort={() => handleSort(keyName)}
                    />
                  );
                default:
                  return <HeadingTd key={i} tag={keyName} />;
              }
            })}
          </thead>
          <tbody>
            {sortedTrades.map((trade, i) => (
              <TradeRow key={i} trade={trade} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
