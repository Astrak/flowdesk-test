import { PAIRS } from "../constants";
import { useTrades } from "../utils/queries";
import styled from "styled-components";
import { SortingKeys, TradeKeys, TTrade } from "../utils/types";
import { useState } from "react";
import { toCET } from "../utils/helpers";

const Table = styled.table``;

const SortingArrow = styled.div`
  position: absolute;
  border: solid 4px hsl(249, 29.03%, 84.29%);
  border-right: solid 4px transparent;
  border-top: solid 4px transparent;
  right: 4px;
  top: 50%;
  margin-top: -4px;
`;

const HeadingTh = ({
  tag,
  sort,
  isSorting,
  isAsc,
}: {
  tag: keyof TTrade;
  sort?: () => void;
  isSorting?: boolean;
  isAsc?: boolean;
}) => (
  <th
    onClick={sort}
    style={{
      cursor: ["time", "qty", "price"].includes(tag) ? "pointer" : "default",
      position: "relative",
    }}
  >
    {tag}
    {isSorting && (
      <SortingArrow
        style={{
          transform: `rotate(${isAsc ? "135" : "-45"}deg)`,
        }}
      />
    )}
  </th>
);

const TradeRow = ({ trade }: { trade: TTrade }) => (
  <tr>
    {(Object.keys(trade) as Array<keyof TTrade>).map((keyName, i) => {
      switch (keyName) {
        case "time":
          return <td key={i}>{toCET(trade.time)}</td>;
        case "price":
          return <td key={i}>{Number(trade.price).toLocaleString("en-US")}</td>;
        default:
          return <td key={i}>{trade[keyName]}</td>;
      }
    })}
  </tr>
);

export function TradesTable({ pair }: { pair: PAIRS }) {
  const { data: trades, isLoading } = useTrades(pair);
  const [sort, setSort] = useState<SortingKeys>("time");
  const [asc, setAsc] = useState(true);
  const sortTrades = () => {
    if (!trades) {
      return trades;
    }
    return trades.sort((a, b) => {
      const valA = Number(a[sort]);
      const valB = Number(b[sort]);
      return asc ? valB - valA : valA - valB;
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
            <tr>
              {(TradeKeys as Array<keyof TTrade>).map((keyName, i) => {
                switch (keyName) {
                  case "price":
                  case "time":
                  case "qty":
                    return (
                      <HeadingTh
                        key={i}
                        tag={keyName}
                        sort={() => handleSort(keyName)}
                        isSorting={sort === keyName}
                        isAsc={asc}
                      />
                    );
                  default:
                    return <HeadingTh key={i} tag={keyName} />;
                }
              })}
            </tr>
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
