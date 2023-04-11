import gBox from "../../shapes.js";
import Unit from "../../gameClasses/elementsClass/BaseUnit.js";


export default class UserBase extends Unit {
    static specs = {
        unitName: "Base",
        size: 300,
        textureName: "main_base",
        Shape: gBox,
        hp: 750
    }
    constructor() {
        super(Object.assign({
            useHpBar: true
        }, UserBase.specs));


    }


}