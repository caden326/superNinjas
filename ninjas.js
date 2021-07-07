class Ninja {
    constructor(name ){
        this.name = name;
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log( `${this.name}`)
    }

    showStats(){
        console.log(`${this.health} , ${this.speed} , ${this.strength}`)
    }
    drinkSake (){
        this.health += 10;
        // console.log(`${ this.name } drank sake and now has ${this.health} health`)
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
// ninja1.drinkSake();


console.log("=========================================================")


class Sensei extends Ninja{
    constructor(name){
    super(name)
    this.wisdom = 10
    this.health = 200
    this.speed = 10
    this.strength  = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();
