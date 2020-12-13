export const weapon = [];
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
        }
        arr.push(this);
    }
}
//Template: new Item( "Name", "Display Type", weight, damage, armor, stackable?, icon-path, model-path, type )

new Item( 'Axe', "Double Axe", 2.3, 15, 0, false, null, null, weapon );
new Item( 'Sword', "Long Sword", 1.3, 11, 0, false, null, null, weapon );
new Item( 'Golden Plate', "Chest Armor", 3.0, 0, 55, false, null, null, armor );

console.log("Weapons List: ", weapon);
console.log("Armor List: ", armor);


