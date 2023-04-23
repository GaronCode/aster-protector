import BaseScript from "./BaseScript";

export default class Rotating extends BaseScript {
    constructor({ unit, speed }) {
        super();
        this.unit = unit;
        this.speed = speed ? speed : 0.01;

    }

    tick() {
        this.unit.rotation = this.unit.rotation + this.speed;
    }
}