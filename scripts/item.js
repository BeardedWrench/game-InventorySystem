export const weapons = [];
export const armor = [];

export class Item {
    constructor( name, type, weight, damage, armor, canStack, icon, model, arr ){
        this.name = name;
        this.weight = weight;
        this.canStack = canStack;
        this.icon = icon;
        this.model = model;
        this.type = type;
        this.damage = damage;
        this.armor = armor;
        this.Use = function(){
            //remove from inv
            this.amount -= 1;
            //do game stuff
        }
        arr.push(this);
    }
}
//Template: new Item( "Name", "Display Type", weight, damage, armor, stackable?, icon-path, model-path, type )

new Item( 'Axe', "Double Axe", 2.3, 15, 0, false, null, null, weapons );
new Item( 'Sword', "Long Sword", 1.3, 11, 0, false, null, null, weapons );
new Item( 'Golden Plate', "Chest Armor", 3.0, 0, 55, false, null, null, armor );

console.log("Weapons List: ", weapons);
console.log("Armor List: ", armor);


