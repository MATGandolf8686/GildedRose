import { Item } from "@/classes/BaseItem";

describe("Base Item Class", () => {
  it("Should set up a base item.", () => {
    const item = new Item("Dummy Item", 5, 10);

    expect(item.name).toBe("Dummy Item");
    expect(item.sellIn).toBe(5);
    expect(item.quality).toBe(10);
  });
});
