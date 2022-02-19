export type Bid = {
  side: string;
  price: number;
  instrument: string;
  volume: number;
  timestamp: string;
};

export type Pairs = Record<string, [string, string] | string>;
