import { PAIRS } from "../constants";
import { useTicker24 } from "../utils/queries";
import styled from "styled-components";
import { type TTicker24 } from "../utils/types";

const InfoTable = styled.table`
  background: #aaa;
`;

const DataRow = ({ tag, data }: { tag: string; data: string | number }) => {
  return (
    <tr>
      <td>{tag}</td>
      <td>{data}</td>
    </tr>
  );
};

export function Ticker24hInfo({ pair }: { pair: PAIRS }) {
  const { data: ticker, isLoading } = useTicker24(pair);
  return (
    <div>
      <h2>Ticker 24h</h2>
      {isLoading && <p>Loading...</p>}
      <InfoTable>
        <tbody>
          {ticker &&
            (Object.keys(ticker) as Array<keyof TTicker24>).map(
              (keyName, i) => (
                <DataRow key={i} tag={keyName} data={ticker[keyName]} />
              )
            )}
        </tbody>
      </InfoTable>
    </div>
  );
}
