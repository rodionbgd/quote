import { store } from "./index";

const formatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "numeric",
  hour: "numeric",
  minute: "numeric",
  year: "2-digit",
  second: "numeric",
});

export default function getBid(
  selectedPair: string,
  volume: number,
  side: string
) {
  const { pair } = store.getState();
  const [buy, sell] = pair[selectedPair] as string[];
  let price = +buy;
  if (side === "sell") {
    price = +sell;
  }
  const timestamp = formatter.format(new Date());
  const instrument = selectedPair.split("-").join("/");
  return {
    side,
    price,
    instrument,
    volume,
    timestamp,
  };
}
