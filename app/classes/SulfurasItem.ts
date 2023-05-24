import { ItemType } from "@/enums";
import { FullItem } from "./FullItem";

export class SulfurasItem extends FullItem {
  constructor(name: string) {
    super(name, 0, 80, ItemType.SULFURAS);
  }

  decreaseSellDate() {
    // Override sell date default, this puppy will last longer than the sun.
  }

  updateQuality(): void {
    // The quality of this bad-boy never decreases!
  }
}
