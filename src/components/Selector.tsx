import { PAIRS } from "../constants";

export function Selector<T>({
  value,
  onChange,
}: {
  value: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
}) {
  const pairs = Object.values(PAIRS);
  return (
    <select
      value={value as string}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {pairs.map((pair) => (
        <option key={pair} value={pair}>
          {pair}
        </option>
      ))}
    </select>
  );
}
