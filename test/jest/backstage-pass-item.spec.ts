import { BackstagePassItem } from "@/classes/BackstagePassItem";

describe("Backstage Pass Class", () => {
  it("Should set up a proper backstage pass", () => {
    const item = new BackstagePassItem(
      "Backstage Pass to Grieg's Grunge",
      5,
      10
    );

    expect(item.name).toBe("Backstage Pass to Grieg's Grunge");
    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(10);
    expect(item.expired).toBe(false);
  });

  it("Should increase in quality by 1 if a day passes", () => {
    const item = new BackstagePassItem("Backstage Pass", 20, 40);

    item.updateQuality();
    expect(item.quality).toBe(41);

    item.decreaseSellDate();

    item.updateQuality();
    expect(item.quality).toBe(42);
  });

  it("Should increase in quality by 2 if the date is within 10 days", () => {
    const item = new BackstagePassItem("Backstage Pass", 10, 40);

    item.updateQuality();
    expect(item.quality).toBe(42);
  });

  it("Should increase in quality by 3 if the date is within 5 days", () => {
    const item = new BackstagePassItem("Backstage Pass", 5, 40);

    item.updateQuality();
    expect(item.quality).toBe(43);
  });

  it("Should drop to 0 if the event has passed", () => {
    const item = new BackstagePassItem("Backstage Pass", 0, 40);

    item.decreaseSellDate();
    item.updateQuality();
    expect(item.quality).toBe(0);
  });
});
