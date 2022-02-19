import { pairEl, store } from "./index";
import { addBid, updateCurrentPair } from "./reducers";
import getBid from "./bid";
import { Bid } from "./types";

export const RUB = "RUB";
export const USD = "USD";
export const EUR = "EUR";
export const YEN = "YEN";
export const GBP = "GBP";

const timerEl = <HTMLElement>document.getElementById("timer");
const reversePairEl = <HTMLSpanElement>document.getElementById("reverse");

const homeLinkEl = <HTMLAnchorElement>document.getElementById("home-link");
const archiveLinkEl = <HTMLAnchorElement>(
  document.getElementById("archive-link")
);

const tradeEl = <HTMLElement>document.getElementById("trade");

const archiveEl = <HTMLElement>document.getElementById("archive");
const archiveHeadEl = <HTMLDivElement>document.getElementById("archive-head");

const buyEl = <HTMLElement>document.getElementById("buy-field");
const sellEl = <HTMLElement>document.getElementById("sell-field");
const currency1El = <HTMLElement>document.getElementById("currency-1");
const currency2El = <HTMLElement>document.getElementById("currency-2");

const modalEl = <HTMLElement>document.getElementById("modal");
const orderDescrEl = <HTMLElement>document.getElementById("order-descr");
const inputVolumeEl = <HTMLButtonElement>(
  document.getElementById("input-volume")
);
const okBtn = <HTMLButtonElement>document.getElementById("ok-btn");
const cancelBtn = <HTMLButtonElement>document.getElementById("cancel-btn");

export function renderArchive(bid: Bid) {
  const { side, price, instrument, volume, timestamp } = bid;
  let sideClass = "green-color";
  if (side === "sell") {
    sideClass = "red-color";
  }
  const sideCapitalized = side.charAt(0).toUpperCase() + side.slice(1);
  const innerHTML = `
            <div class="archive-items__item">
                <div class="${sideClass}">${sideCapitalized}</div>
                <div>${price}</div>
                <div>${instrument}</div>
                <div>${volume}</div>
                <div>${timestamp}</div>
            </div>
        `;
  archiveHeadEl.insertAdjacentHTML("afterend", innerHTML);
}

function hideModal() {
  modalEl.classList.remove("show-modal");
}

export function listeners() {
  let side = "";

  function createBid(e: Event) {
    const { pair } = store.getState();
    const currentPair = pair.current as string;
    const [buy, sell] = pair[currentPair] as string[];
    const pairDescr = currentPair.split("-").join("/");
    side = (e.currentTarget as HTMLElement).dataset.type!;
    let sideClass = "green-color";
    let price = buy;
    if (side === "sell") {
      sideClass = "red-color";
      price = sell;
    }
    modalEl.classList.add("show-modal");
    orderDescrEl.innerHTML = `
            <span class="${sideClass}">${side.toUpperCase()}</span> ${price} ${pairDescr}
        `;
    okBtn.addEventListener("click", () => {
      hideModal();
      if (!inputVolumeEl.value) {
        return;
      }
      const bid = getBid(currentPair, +inputVolumeEl.value, side);
      store.dispatch(addBid(bid));
      renderArchive(bid);
      inputVolumeEl.value = "";
    });
  }

  reversePairEl.addEventListener("click", () => {
    pairEl.value = pairEl.value.split("-").reverse().join("-");
    store.dispatch(updateCurrentPair({ current: pairEl.value }));
  });
  pairEl.addEventListener("change", () => {
    store.dispatch(updateCurrentPair({ current: pairEl.value }));
  });
  homeLinkEl.addEventListener("click", (e) => {
    e.preventDefault();
    tradeEl.classList.remove("hidden");
    archiveEl.classList.add("hidden");
    homeLinkEl.parentElement!.classList.add("active");
    archiveLinkEl.parentElement!.classList.remove("active");
  });
  archiveLinkEl.addEventListener("click", (e) => {
    e.preventDefault();
    archiveEl.classList.remove("hidden");
    tradeEl.classList.add("hidden");
    archiveLinkEl.parentElement!.classList.add("active");
    homeLinkEl.parentElement!.classList.remove("active");
  });
  buyEl.addEventListener("click", createBid);
  sellEl.addEventListener("click", createBid);

  inputVolumeEl.addEventListener("input", () => {
    if (!Number.isNaN(+inputVolumeEl.value) && inputVolumeEl.value) {
      okBtn.classList.remove("validate");
      okBtn.disabled = false;
    } else {
      okBtn.classList.add("validate");
      okBtn.disabled = true;
    }
  });
  cancelBtn.addEventListener("click", () => {
    hideModal();
    inputVolumeEl.value = "";
  });
}

export function renderPairs() {
  const { pair } = store.getState();
  const currentPair = pair.current as string;
  [currency1El.innerHTML, currency2El.innerHTML] = pair[
    currentPair
  ] as string[];
}

export function renderTimer() {
  const date = new Date();
  timerEl.innerHTML = `${`0${date.getHours()}`.slice(
    -2
  )}:${`0${date.getMinutes()}`.slice(-2)}:${`0${date.getSeconds()}`.slice(-2)}`;
}

export function createPairs(pairs: string[][]) {
  let innerHTML = "";

  pairs.forEach(([currency1, currency2]) => {
    innerHTML += `
            <option value="${currency1}-${currency2}">${currency1}/${currency2}</option>
            <option value="${currency2}-${currency1}">${currency2}/${currency1}</option>
        `;
  });
  pairEl.innerHTML = innerHTML;
}
