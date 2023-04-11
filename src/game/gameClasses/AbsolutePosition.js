export default class AbsolutePosition {
    constructor(unit) {
        this.unit = unit
    }
    set x(v) { console.log("___"); }
    get x() {
        return this.unit.mainUnit.absolutePosition.x - this.unit.mainUnit.shape.width / 2 + this.unit.position.x
    }
    set y(v) { console.log("___"); }
    get y() {
        return this.unit.mainUnit.absolutePosition.y - this.unit.mainUnit.shape.height / 2 + this.unit.position.y
    }

    get rotation() {
        return this.unit.mainUnit.absolutePosition.rotation + this.unit.position.rotation
    }
    set rotation(v) {
        this.unit.rotation = v - this.unit.mainUnit.absolutePosition.rotation 
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }

    add(x, y) {
        this.x += x;
        this.y += y;
    }
}