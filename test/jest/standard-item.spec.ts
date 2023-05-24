import { StandardItem } from "@/classes/StandardItem";

describe("Standard Item Class", () => {
  it("Should set up a standard item.", () => {
    const item = new StandardItem("Boring Broom", 5, 10);

    expect(item.name).toBe("Boring Broom");
    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(10);
    expect(item.expired).toBe(false);
  });

  it("Should expire and update quality correctly", () => {
    const item = new StandardItem("Boring Broom", 0, 10);

    item.updateQuality();
    // Standard items should decrease in quality by 1 before the sell date is passed
    expect(item.quality).toBe(9);

    item.decreaseSellDate();
    expect(item.expired).toBe(true);

    item.updateQuality();
    // Standard items should decrease in quality by 2 after the sell date is passed
    expect(item.quality).toBe(7);
  });

  it("Should be expired by automatically if the sell-by date is already past", () => {
    const item = new StandardItem("Boring Broom", -1, 10);

    expect(item.expired).toBe(true);
  });
});
