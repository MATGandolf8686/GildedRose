import { AgedBrieItem } from "@/classes/AgedBrieItem";

describe("Aged Brie Class", () => {
  it("Should set up aged brie.", () => {
    const item = new AgedBrieItem("Delicious Brie", 2, 40);

    expect(item.name).toBe("Delicious Brie");
    expect(item.sellIn).toBe(2);
    expect(item.quality).toBe(40);
    expect(item.expired).toBe(false);
  });

  it("Should increase in quality without going over 50", () => {
    const item = new AgedBrieItem("Delicious Brie", 0, 46);

    item.updateQuality();
    // Aged brie should increase in quality by 1 before the sell date is passed
    expect(item.quality).toBe(47);

    item.decreaseSellDate();
    expect(item.expired).toBe(true);

    item.updateQuality();
    // Aged brie should increase in quality by 2 after the sell date is passed
    expect(item.quality).toBe(49);

    item.updateQuality();
    // Aged brie should not increase in quality above 50
    expect(item.quality).toBe(50);
  });
});
