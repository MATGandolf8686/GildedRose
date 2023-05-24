import { ItemType } from "@/enums";
import { FullItem } from "./FullItem";

export class ConjuredItem extends FullItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality, ItemType.CONJURED);
  }

  updateQuality(): void {
    if (!this.expired) {
      this.quality = Math.max(this.quality - 2, 0);
    } else {
      this.quality = Math.max(this.quality - 4, 0);
    }
  }
}
