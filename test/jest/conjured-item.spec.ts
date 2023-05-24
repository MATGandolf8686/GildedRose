import { ConjuredItem } from "@/classes/ConjuredItem";

describe("Conjured Item Class", () => {
  it("Should set up a conjured item.", () => {
    const item = new ConjuredItem("Conjured Gold Piece", 5, 10);

    expect(item.name).toBe("Conjured Gold Piece");
    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(10);
    expect(item.expired).toBe(false);
  });

  it("Should expire and update quality correctly", () => {
    const item = new ConjuredItem("Conjured Gold Piece", 0, 10);

    item.updateQuality();
    // Conjured items should decrease in quality by 2 before they expire.
    expect(item.quality).toBe(8);

    item.decreaseSellDate();
    expect(item.expired).toBe(true);

    item.updateQuality();
    // Conjured items should decrease in quality by 4 after they expire.
    expect(item.quality).toBe(4);
  });
});
