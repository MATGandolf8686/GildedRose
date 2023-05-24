import { AgedBrieItem } from "@/classes/AgedBrieItem";
import { BackstagePassItem } from "@/classes/BackstagePassItem";
import { ConjuredItem } from "@/classes/ConjuredItem";
import { StandardItem } from "@/classes/StandardItem";
import { SulfurasItem } from "@/classes/SulfurasItem";
import { GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("Should update all items sell-by dates and increase quality correctly", () => {
    const gildedRose = new GildedRose([
      new StandardItem("Boring Broom", 3, 5),
      new AgedBrieItem("Delicious Brie", 8, 10),
      new SulfurasItem("Sulfuras, Gem of the Eastgale"),
      new ConjuredItem("Conjured Backpack", 1, 6),
      new BackstagePassItem("Backstage Pass for Pantheon of Ashes", 2, 35),
    ]);

    const items = gildedRose.updateQuality();
    expect(items.length).toBe(5);

    expect(items[0].name).toBe("Boring Broom");
    expect(items[0].quality).toBe(4);
    expect(items[0].sellIn).toBe(2);

    expect(items[1].name).toBe("Delicious Brie");
    expect(items[1].quality).toBe(11);
    expect(items[1].sellIn).toBe(7);

    expect(items[2].name).toBe("Sulfuras, Gem of the Eastgale");
    expect(items[2].quality).toBe(80);
    expect(items[2].sellIn).toBe(0);

    expect(items[3].name).toBe("Conjured Backpack");
    expect(items[3].quality).toBe(4);
    expect(items[3].sellIn).toBe(0);

    expect(items[4].name).toBe("Backstage Pass for Pantheon of Ashes");
    expect(items[4].quality).toBe(38);
    expect(items[4].sellIn).toBe(1);
  });

  it("Does the master test", () => {
    const items = [
      new StandardItem("+5 Dexterity Vest", 10, 20), //
      new AgedBrieItem("Aged Brie", 2, 0), //
      new StandardItem("Elixir of the Mongoose", 5, 7), //
      new SulfurasItem("Sulfuras, Hand of Ragnaros"), //
      new SulfurasItem("Sulfuras, Hand of Ragnaros"),
      new BackstagePassItem(
        "Backstage passes to a TAFKAL80ETC concert",
        15,
        20
      ),
      new BackstagePassItem(
        "Backstage passes to a TAFKAL80ETC concert",
        10,
        49
      ),
      new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new ConjuredItem("Conjured Mana Cake", 3, 6),
    ];

    const gildedRose = new GildedRose(items);

    let days: number = 2;
    if (process.argv.length > 2) {
      days = +process.argv[2];
    }

    for (let i = 0; i < days; i++) {
      console.log("-------- day " + i + " --------");
      console.log("name, sellIn, quality");
      items.forEach((element) => {
        console.log(
          element.name + " " + element.sellIn + " " + element.quality
        );
      });
      console.log();
      gildedRose.updateQuality();
    }
  });
});
