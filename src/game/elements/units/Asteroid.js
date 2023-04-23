import BaseUnit from "../../gameClasses/elementsClass/BaseUnit.js"
import DeathInTime from "../../gameClasses/movementControls/DeathInTime.js";
import gBox from "../../gameClasses/shapes.js";
import { gCircle } from "../../gameClasses/shapes.js";
import Lib from "../../gameClasses/Lib.js"
import BaseBullet from "../../gameClasses/elementsClass/BaseBullet.js";



export default class Asteroid extends BaseUnit {

    constructor() {



        let type = Lib.intRange(1, 100);
        //круглый или квадратный

        let size;
        if (type === 100) {
            size = Lib.intRange(100, 150)
            super({
                unitName: "Great Asteroid",
                size,
                textureName: "aster_round_0" + Lib.intLen(1, 4),
                Shape: gCircle,
                useHpBar: true,
                hp: 50 + size * 2
            })
        }
        else {
            size = Lib.intRange(20, 50)
            super({
                unitName: "Small Asteroid",
                size,
                textureName: "aster_" + Lib.intLen(7),
                Shape: gBox,
                hp: size / 2 + 10
            })
        }



        this.asteroidType = type;
        this.controlScripts.push(new DeathInTime({ unit: this, time: 1400 }))


    }

    collisionFx(anotherUnit) {
        if (this.team === anotherUnit.team) return;
        if (anotherUnit instanceof BaseBullet) return
        anotherUnit.status.takeDamage({
            damage: this.asteroidType == 100 ? this.status.nowHP + 500 : this.status.nowHP
        })
        this.status.dead = true;
    }
}