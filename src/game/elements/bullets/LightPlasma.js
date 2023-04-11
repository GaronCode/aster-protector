import { gCircle } from "@/game/shapes"
import BaseBullet from "../../gameClasses/elementsClass/BaseBullet"


export default class LightPlasma extends BaseBullet {
    static specs = {
        unitName: "Light Plasma Bullet",
        size: 15,
        textureName: "bullet01",
        Shape: gCircle,
        speed: 15,
        damage: 12
    }
    constructor({ fieredUnit}) {
        super(Object.assign({fieredUnit}, LightPlasma.specs));
    }

    
}