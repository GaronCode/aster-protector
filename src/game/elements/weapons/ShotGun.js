import BaseFireable from "../../gameClasses/elementsClass/BaseFireable"
//import UserControl from "../../gameClasses/movementControls/UserControl.js";
import gBox from "../../gameClasses/shapes.js";
import LightPlasmaPellet from "../bullets/LightPlasmaPellet.js";
import Lib from "../../gameClasses/Lib.js";
import FireInterval from "../../gameClasses/movementControls/FireInterval";


export default class ShotGun extends BaseFireable {

    static specs = {
        unitName: "Shot Gun Mk1",
        size: 50,
        textureName: "shotGun01",
        Shape: gBox,
        Bullet: LightPlasmaPellet,
        accuracy: Math.PI / 4,
        bulletsPerShot: 5,
        fireInterval: 60,
        hp: 25
    }

    constructor(data) {
        const Final = Object.assign({}, ShotGun.specs, data?data:undefined)

        super(Final)

        this.pills = Final.bulletsPerShot;
        this.shotGunRange = Final.accuracy;




       // this.addControlScript(new UserControl({ unit: this }))
        this.addControlScript(new FireInterval({ unit: this, time: Final.fireInterval }))

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