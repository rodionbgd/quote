import "./css/style.scss";
import "./css/modal.scss";

import { configureStore } from "@reduxjs/toolkit";
import { bidSlice, pairSlice, updatePairs } from "./reducers";
import { Pairs } from "./types";
import {
  createPairs,
  EUR,
  GBP,
  listeners,
  renderPairs,
  renderTimer,
  RUB,
  USD,
  YEN,
} from "./render";

export const store = configureStore({
  reducer: {
    bid: bidSlice.reducer,
    pair: pairSlice.reducer,
  },
});

export const pairEl = <HTMLSelectElement>document.getElementById("pairs");

const UPDATE_STEM_MS = 2000;

function updateCb(pairs: string[][]) {
  const precision = 4;
  const newPairsObj: Pairs = { current: pairEl.value };
  pairs.forEach(([currency1, currency2]) => {
    const newPrice = (Math.random() * 100).toFixed(precision);
    newPairsObj[`${currency1}-${currency2}`] = [
      newPrice,
      (+newPrice * 1.02).toFixed(precision),
    ];
    newPairsObj[`${currency2}-${currency1}`] = [
      (1 / +newPrice).toFixed(precision),
      (1 / (+newPrice * 1.02)).toFixed(precision),
    ];
  });
  store.dispatch(updatePairs(newPairsObj));
}

function init() {
  const pairs = [
    [USD, RUB],
    [USD, EUR],
    [USD, YEN],
    [USD, GBP],
  ];
  createPairs(pairs);
  store.subscribe(() => {
    renderPairs();
  });
  updateCb(pairs);
  renderTimer();
  setInterval(() => {
    updateCb(pairs);
  }, UPDATE_STEM_MS);
  setInterval(() => {
    renderTimer();
  }, 1000);
  listeners();
}

window.addEventListener("load", init);
