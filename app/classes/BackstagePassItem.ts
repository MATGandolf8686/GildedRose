import { ItemType } from "@/enums";
import { FullItem } from "./FullItem";

export class BackstagePassItem extends FullItem {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality, ItemType.BACKSTAGE_PASS);
  }

  updateQuality(): void {
    if (!this.expired) {
      let qualityIncrease = 1;
      if (this.sellIn < 11) {
        qualityIncrease += 1;
      }
      if (this.sellIn < 6) {
        qualityIncrease += 1;
      }
      this.quality = Math.min(this.quality + qualityIncrease, 50);
    } else {
      this.quality = 0;
    }
  }
}
