import { gCircle } from "@/game/shapes"
import BaseBullet from "../../gameClasses/elementsClass/BaseBullet"


export default class LightPlasmaPellet extends BaseBullet {
    static specs = {
        unitName: "Light Plasma Pellet",
        size: 12,
        textureName: "bullet",
        Shape: gCircle,
        speed: 20,
        damage: 6
    }
    constructor({ fieredUnit}) {
        super(Object.assign({fieredUnit}, LightPlasmaPellet.specs))
        
    }

    
}