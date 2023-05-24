// Hopefully the goblin is okay with the class being moved into a different file (sorry goblin).
// I made sure to get the goblin a shiny ruby as recompense.
export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
