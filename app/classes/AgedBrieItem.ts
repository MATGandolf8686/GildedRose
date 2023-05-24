import { ItemType } from "@/enums";
import { FullItem } from "./FullItem";

export class AgedBrieItem extends FullItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality, ItemType.AGED_BRIE);
  }

  updateQuality(): void {
    if (!this.expired) {
      this.quality = Math.min(this.quality + 1, 50);
    } else {
      this.quality = Math.min(this.quality + 2, 50);
    }
  }
}
