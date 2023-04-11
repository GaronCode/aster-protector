import * as PIXI from "pixi.js";

export class Shared {
    static resources;
    static addResourses(res) {
        this.resources = res;
    }
}

class shape extends PIXI.Sprite {
    constructor(size, textureName) { 
        super(Shared.resources[textureName].texture);
        //this.anchor.set(0.5);
        this.isRendered = false;
        this.position.set(0,0);
        this.rotation = 0;
        this.twoPI = Math.PI * 2;
    }
    set unitRotation(val) {
        this.rotation = this.normalizeAngle(val);
    }
    get unitRotation() {
        return this.normalizeAngle(this.rotation)
    }

    normalizeAngle(angle) {
        if (0 <= angle &&  angle < this.twoPI ) return angle;

        if (angle < 0) return this.normalizeAngle(this.twoPI + angle);

        return this.normalizeAngle(angle - this.twoPI);
    }
}

export default class gBox extends shape {
    constructor(size, textureName) { 
        super(size, textureName);
        
        this.width = this.height = size;
        this.collisionRadius = (size/2 + size/Math.sqrt(2))/2.2

    }


}

export class gCircle extends shape {
    constructor(size, textureName) { 
        super(size, textureName);

        this.width = this.height = size;
        this.collisionRadius = size /2

        


    }


}