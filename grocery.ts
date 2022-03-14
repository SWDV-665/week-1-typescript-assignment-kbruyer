// Author: Keith Bruyer
// Course: SWDV 665 2W 22/SP2
// Last Date Change: 03/13/2022

class Grocery {
    name: string;
    quantity: number;
    price: number;
    groceryItems: string[];

    constructor() {
        this.name = '';
        this.quantity = 0;
        this.price = 0.00;
        this.groceryItems = ["Bread 2", " Milk 1", " Eggs 2", " Butter 1"];
    }
    showGroceryItems() {
        let i = 0;
        while (i < this.groceryItems.length)
            return this.groceryItems;
        i++;
    }
}
let gi: any = new Grocery();
function main() {
    document.write(gi.showGroceryItems());
}