import { ItemType } from "@/enums";
import { FullItem } from "./FullItem";

export class StandardItem extends FullItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality, ItemType.STANDARD);
  }

  updateQuality(): void {
    if (!this.expired) {
      this.quality = Math.max(this.quality - 1, 0);
    } else {
      this.quality = Math.max(this.quality - 2, 0);
    }
  }
}
