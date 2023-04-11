import DeathInTime from "@/game/gameClasses/movementControls/DeathInTime";
import MoveForward from "@/game/gameClasses/movementControls/MoveForward";
import Unit from "@/game/gameClasses/elementsClass/BaseUnit";

export default class BaseBullet extends Unit {
    constructor({ unitName, Shape,size,textureName, speed, damage, fieredUnit, delTime }) {
        super({ unitName, Shape,size,textureName });
        this.fieredUnit = fieredUnit;
        
        this.speed = speed;
        this.damage = damage;
        this.delTime = delTime ? delTime : 50

 

        this.position.set(this.fieredUnit.absolutePosition.x, this.fieredUnit.absolutePosition.y);
        this.rotation = this.fieredUnit.absolutePosition.rotation;
        
        
        this.addControlScript(new MoveForward({ unit: this, speed: this.speed }))
        this.addControlScript(new DeathInTime({ unit: this, time: this.delTime }))
    }

    dealDamage(anotherUnit) {
        anotherUnit.status.takeDamage({damage: this.damage})
        this.team.statistics.dealDamage({damage:this.damage,unit: this})
    }

    collisionFx(anotherUnit) {
        if (this.team === anotherUnit.team) return;
        
        this.dealDamage(anotherUnit)
        
        this.status.dead = true;
    }

    takeDamage(){

    }

}