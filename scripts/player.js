export class Player {
    constructor( name, displayName, health, cur, group ){
        this.name = name;
        this.displayName = displayName;
        this.health = health;
        this.cur = cur;

        this.inventory = {
            items: [],
            weight: 0,
            maxWeight: 50,
            isFull: function(){
                if( this.weight === this.maxWeight ){
                    return true;
                }else return false;
            },
            addItem: function( item, qty ){
                if( this.isFull() === false ){
                    for( let i = 0; i < qty; i++ ){
                        this.items.push( item );
                    }
                }else{
                    return "You're way too full!";
                }
            },
            removeItem: function( item, qty ){
             
            },
            updateItem: function( item, qty ){
            
            },
               
        }
        group.push(this);
    }
}