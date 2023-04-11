import BaseFireable from "../../gameClasses/elementsClass/BaseFireable"
import UserControl from "../../gameClasses/movementControls/UserControl.js";
import DeathInTime from "../../gameClasses/movementControls/DeathInTime.js";
import gBox from "../../shapes.js";
import LightPlasmaPellet from "../bullets/LightPlasmaPellet.js";
import Lib from "../../gameClasses/Lib.js";
import FireInterval from "../../gameClasses/movementControls/FireInterval";


export default class ShotGunMk1 extends BaseFireable {

    static specs = {
        unitName: "Shot Gun Mk1",
        size: 50,
        textureName: "shotGun01",
        Shape: gBox,
        Bullet: LightPlasmaPellet,
        accuracy: Math.PI / 4,
        bulletsPerShot: 5,
        hp: 25
    }

    constructor({ x, y }) {
        super(ShotGunMk1.specs)

        this.pills = ShotGunMk1.specs.bulletsPerShot;
        this.shotGunRange = ShotGunMk1.specs.accuracy;




        this.addControlScript(new UserControl({ unit: this }))
        this.addControlScript(new FireInterval({ unit: this, time: 60 }))

    }

    fire() {

        for (let i = 0; i < this.pills; i++) {
            let bullet = this.projectileCreateScr({ fieredUnit: this })
            bullet.rotation = this.absolutePosition.rotation + Lib.intRange(0, this.shotGunRange * 100) / 100 - this.shotGunRange / 2
            this.team.addMember({
                member: bullet
            })
        }


    }
}