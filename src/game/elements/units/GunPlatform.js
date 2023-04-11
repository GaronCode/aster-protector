import gBox from "../../shapes.js";
import Unit from "../../gameClasses/elementsClass/BaseUnit.js";


export default class GunPlatform extends Unit {
    static specs = {
        unitName: "Gun Platform",
        size: 65,
        textureName: "platform01",
        Shape: gBox,
        hp: 350
    }
    constructor() {
        super(Object.assign({
            useHpBar: true
        }, GunPlatform.specs));





    }


}