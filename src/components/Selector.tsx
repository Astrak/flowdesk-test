import styled from "styled-components";
import { PAIRS } from "../constants";

const Select = styled.select`
  font-size: 15px;
`;

export function Selector<T>({
  value,
  onChange,
}: {
  value: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
}) {
  const pairs = Object.values(PAIRS);
  return (
    <Select
      value={value as string}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {pairs.map((pair) => (
        <option key={pair} value={pair}>
          {pair}
        </option>
      ))}
    </Select>
  );
}
