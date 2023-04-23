import * as PIXI from "pixi.js";

export class Shared {
    static resources;
    static isLoad = false;
    static aferLoadScripts = []
    static afterLoad(fx) {
        if (Shared.isLoad) {
            fx()
        }
        else Shared.aferLoadScripts.push(fx)
    }
    static triggerAllScripts() {
        Shared.aferLoadScripts.forEach(item => item())
    }
    static addResourses(res) {
        Shared.resources = res;
        Shared.isLoad = true;
    }
    static loadAllResourses() {
        if (Shared.isLoad) return;
        const loader = new PIXI.Loader();

        loader
            .add('unit01', 'img/unit.png')
            .add('platform01', 'img/platform01.png')
            .add('bullet01', 'img/bullet01.png')
            .add('bullet', 'img/bullet.png')
            .add('aster_0', 'img/101.png')
            .add('aster_1', 'img/102.png')
            .add('aster_2', 'img/103.png')
            .add('aster_3', 'img/104.png')
            .add('aster_4', 'img/105.png')
            .add('aster_5', 'img/106.png')
            .add('aster_6', 'img/107.png')
            .add('aster_7', 'img/108.png')
            .add('shotGun01', 'img/shotGun01.png')
            .add('gun01', 'img/gun01.png')
            .add('aster_round_01', 'img/asteroid001.png')
            .add('aster_round_02', 'img/asteroid002.png')
            .add('aster_round_03', 'img/asteroid003.png')
            .add('aster_round_04', 'img/asteroid004.png')
            .add('main_base', 'img/base.png')

        loader.load((loader, resources) => {
            Shared.addResourses(resources)
            Shared.triggerAllScripts()
        })
    }
}

class shape extends PIXI.Sprite {
    constructor(size, textureName) {
        super(Shared.resources[textureName].texture);
        //this.anchor.set(0.5);
        this.isRendered = false;
        this.position.set(0, 0);
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
        if (0 <= angle && angle < this.twoPI) return angle;

        if (angle < 0) return this.normalizeAngle(this.twoPI + angle);

        return this.normalizeAngle(angle - this.twoPI);
    }
}

export default class gBox extends shape {
    constructor(size, textureName) {
        super(size, textureName);

        this.width = this.height = size;
        this.collisionRadius = (size / 2 + size / Math.sqrt(2)) / 2.2

    }


}

export class gCircle extends shape {
    constructor(size, textureName) {
        super(size, textureName);

        this.width = this.height = size;
        this.collisionRadius = size / 2




    }


}