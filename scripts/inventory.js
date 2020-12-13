import { Player } from '/scripts/player.js';
import { Item, weapons, armor } from '/scripts/item.js';

const playersList = [];
//Template for Player: new Player( "name", "Display Name", health, money, group )


const terry = new Player( 'Terry', 'BeardedWrench', 100, 687, playersList );
const bob = new Player( 'Robert', 'xBoBx2020', 100, 200, playersList );
const jane = new Player( 'Jane', 'JaneDoe1993', 100, 122, playersList );


terry.inventory.addItem(weapons[0], 1);
console.log( "Players List: ", playersList );
console.log( "Player-Terry: ", terry );