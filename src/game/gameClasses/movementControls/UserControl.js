import BaseScript from "./BaseScript";

export default class UserControl extends BaseScript {
    constructor({ unit }) {
        super();
        this.unit = unit;
        this.mouseControl = true;
    }


    tick({ cursorPosition }) {
        
        let unitPos = this.unit.absolutePosition
        let y = cursorPosition.y - unitPos.y,
            x = cursorPosition.x - unitPos.x;
            
            
        let angle = Math.atan2(y, x);
        this.unit.absolutePosition.rotation = angle + Math.PI /2;

        
    }
}