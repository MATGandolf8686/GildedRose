import { ItemType } from "@/enums";
import { Item } from "./BaseItem";

export abstract class FullItem extends Item {
  type: ItemType;
  abstract updateQuality(): void;
  expired: boolean;

  constructor(name: string, sellIn: number, quality: number, type: ItemType) {
    super(name, sellIn, quality);
    this.type = type;
    if (sellIn >= 0) {
      this.expired = false;
    } else {
      this.expired = true;
    }
  }

  decreaseSellDate() {
    if (!this.expired) {
      this.sellIn = this.sellIn - 1;
      if (this.sellIn < 0) {
        this.expired = true;
      }
    }
  }
}
