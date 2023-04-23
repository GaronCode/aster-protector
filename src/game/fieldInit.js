import * as PIXI from "pixi.js";
import { Shared } from "./gameClasses/shapes";
import Tick from "./gameClasses/Tick";





export default class FieldInit {
    constructor({ canvas, width, height }) {
        this.app = new PIXI.Application({
            view: canvas,
            width: width,
            height: height,
            transparent: true,
        });
        this.tickObj = null;
        Shared.loadAllResourses()

        this.afterLoad(() => {
            this.tickObj = new Tick({ app: this.app })
        })


    }
    afterLoad(f) {
        Shared.afterLoad(f);
    }

    addTeam(a) {
        this.afterLoad(() => {
            this.tickObj.addTeam(a)
        })
    }
    start() {
        this.afterLoad(() => {
            this.tickObj.start()
        })
    }
}