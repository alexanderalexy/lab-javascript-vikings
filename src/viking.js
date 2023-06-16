// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;

    }

    // Method attack
    attack() {
        return this.strength;
    }

    // Receive damage
    receiveDamage(damage) {
        this.health = this.health - damage;

      
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        else {return `${this.name} has died in act of combat`;}
    }

// Battle Cry
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon 

class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return  `A Saxon has received ${damage} points of damage`;
        }
        else {return `A Saxon has died in combat`;}
    }
    
    
    
}

// War

class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(VikingObject){
        this.vikingArmy.push(VikingObject);
    }
    addSaxon(SaxonObject) {
        this.saxonArmy.push(SaxonObject);
    }

    
// Armies Attack
    vikingAttack() {
        let randomSaxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let result = randomSaxon.receiveDamage(randomViking.strength);
        
        if (randomSaxon.health <=0) {
            this.saxonArmy.splice(randomSaxonNumber, 1);
        }
        return result;
    }

    saxonAttack() {
        let randomVikingNumber = Math.floor(Math.random()*this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let randomSaxonNumber = Math.floor(Math.random()*this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        
        if (randomViking.health <=0) {
            this.vikingArmy.splice(randomVikingNumber, 1);
        }
        return result;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
        } 
        else if (this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survived another day...";
        } 
        else {
          return "Vikings and Saxons are still in the thick of battle.";
        }
      }

}
         

    

