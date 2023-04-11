import Victor from "victor";
import BaseScript from "./BaseScript";

export default class MoveToTarget extends BaseScript {
    constructor({ unit, x, y, speed, offScript,afterScript,slowdownMultiplier }) {
        super();
        this.unit = unit;
        this.x = x;
        this.y = y;
        this.offScript = offScript === false ? offScript : true
        this.speed = speed;
        this.slowdownMultiplier = slowdownMultiplier? slowdownMultiplier : 9

        if (afterScript !== undefined) {
            this.addAfterScript(afterScript)
        }
    }


    tick() {
        const nowPosX = this.unit.position.x;
        const nowPosY = this.unit.position.y;

        let e = new Victor(nowPosX, nowPosY);
        let s = new Victor(this.x, this.y);

        if (e.distance(s) <= this.speed*this.slowdownMultiplier) {
            if (this.speed < 0.005 && this.offScript) {
                this.unit.removeControlScript(this)
                this.afterScript();
                return
            }
            this.speed /= 2;
            this.tick()
            return;
        }

        let d = s.subtract(e);
        let v = d.normalize().multiplyScalar(this.speed);



        let angle = Math.atan2(
            this.y - nowPosY,
            this.x - nowPosX
        ) + Math.PI / 2;



        this.unit.rotation = angle;
        this.unit.position.set(
            this.unit.position.x + v.x,
            this.unit.position.y + v.y
        );

    }
}