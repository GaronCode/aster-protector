import BaseFireable from "../../gameClasses/elementsClass/BaseFireable"
import UserControl from "../../gameClasses/movementControls/UserControl.js";
import DeathInTime from "../../gameClasses/movementControls/DeathInTime.js";
import gBox from "../../shapes.js";
import Lib from "../../gameClasses/Lib.js";
import FireInterval from "../../gameClasses/movementControls/FireInterval";
import LightPlasma from "../bullets/LightPlasma";


export default class LightGun extends BaseFireable {

    static specs = {
        unitName: "Light Gun Mk1",
        size: 70,
        textureName: "gun01",
        Shape: gBox,
        Bullet: LightPlasma,
        hp: 50
    }


    constructor({ x, y }) {
        super(LightGun.specs);

        this.addControlScript(new UserControl({ unit: this }))
        this.addControlScript(new FireInterval({ unit: this, time: 25 }))

    }

}