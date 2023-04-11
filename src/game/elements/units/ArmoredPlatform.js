import gBox from "../../shapes.js";
import Unit from "../../gameClasses/elementsClass/BaseUnit.js";


export default class ArmoredPlatform extends Unit {
    static specs = {
        unitName: "Armored Platform",
        size: 80,
        textureName: "unit01",
        Shape: gBox,
        hp: 550
    }
    constructor() {
        super(Object.assign({
            useHpBar: true
        }, ArmoredPlatform.specs));


        // super({
        //     unitName: ArmoredPlatform.unitName,
        //     useHpBar: true,
        //     shape: new (ArmoredPlatform.BaseUnitSize, "")
        // })

        this.status.maxHP = ArmoredPlatform.BaseUnitHP;

    }
}