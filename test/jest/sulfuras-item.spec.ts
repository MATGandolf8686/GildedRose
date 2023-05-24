import { SulfurasItem } from "../../app/classes/SulfurasItem";

describe("Sulfuras Item Class", () => {
  it("Should set up a sulfuras.", () => {
    const item = new SulfurasItem("Sulfuras, Ever Glowing");

    expect(item.name).toBe("Sulfuras, Ever Glowing");
    expect(item.sellIn).toBe(0);
    expect(item.quality).toBe(80);
  });

  it("Should never expire and never decrease in quality", () => {
    const item = new SulfurasItem("Sulfuras, Ever Glowing");

    item.decreaseSellDate();
    item.updateQuality();

    expect(item.quality).toBe(80);
    expect(item.expired).toBe(false);
  });
});
