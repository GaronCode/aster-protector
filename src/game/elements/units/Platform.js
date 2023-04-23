import gBox from "../../gameClasses/shapes.js";
import BaseUnit from "../../gameClasses/elementsClass/BaseUnit.js";


export default class ArmoredPlatform extends BaseUnit {
    static specs = {
        unitName: "Platform",
        size: 80,
        textureName: "unit01",
        Shape: gBox,
        hp: 550
    }
    constructor(data) {
  
        const Final = Object.assign({
            useHpBar: true
        }, ArmoredPlatform.specs, data?data:undefined)
        super(Final);


        this.status.maxHP = Final.hp;

    }
}