import { FullItem } from "./classes/FullItem";

export class GildedRose {
  items: Array<FullItem>;

  constructor(items = [] as Array<FullItem>) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      item.updateQuality();
      item.decreaseSellDate();
    }

    return this.items;
  }
}
