import BaseFireable from "../../gameClasses/elementsClass/BaseFireable"
//import UserControl from "../../gameClasses/movementControls/UserControl.js";
import gBox from "../../gameClasses/shapes.js";
import FireInterval from "../../gameClasses/movementControls/FireInterval";
import LightPlasma from "../bullets/LightPlasma";


export default class Gun extends BaseFireable {

    static specs = {
        unitName: "Light Gun Mk1",
        size: 70,
        textureName: "gun01",
        Shape: gBox,
        Bullet: LightPlasma,
        hp: 50,
        fireInterval: 25
    }


    constructor(data) {
        const Final = Object.assign({}, Gun.specs, data?data:undefined)
        super(Final);

    

       // this.addControlScript(new UserControl({ unit: this }))
        this.addControlScript(new FireInterval({ unit: this, time: Final.fireInterval }))

    }

}