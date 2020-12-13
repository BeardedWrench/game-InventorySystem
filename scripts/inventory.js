import { Player } from '/scripts/player.js';
import { Item, weapon, armor } from '/scripts/item.js';

const playersList = [];
//Template for Player: new Player( "name", "Display Name", health, money, group )
const terry = new Player( 'Terry', 'BeardedWrench', 100, 687, playersList );
const bob = new Player( 'Robert', 'xBoBx2020', 100, 200, playersList );
const jane = new Player( 'Jane', 'JaneDoe1993', 100, 122, playersList );



terry.inventory.addItem(weapon[0], 1);
terry.inventory.addItem(weapon[1], 1);

console.log( "Players List: ", playersList );
console.log( "Player-Terry: ", terry );


//cheap code to just display some icons from the "database"
let markup = '<div class="item"><img src="%icon%"/><h3>%name%</h3></div>'

for( let i = 0; i < weapon.length; i++){
    let weaponList = markup.replace('%icon%', weapon[i].icon);
    weaponList = weaponList.replace('%name%', weapon[i].name);

    document.querySelector(".item-list").insertAdjacentHTML('beforeend', weaponList);
}
for( let i = 0; i < armor.length; i++){
    let armorList = markup.replace('%icon%', armor[i].icon);
    armorList = armorList.replace('%name%', armor[i].name);
    document.querySelector(".item-list").insertAdjacentHTML('beforeend', armorList);
}