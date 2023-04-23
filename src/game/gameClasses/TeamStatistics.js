//import BaseBullet from "./elementsClass/BaseBullet";

export default class TeamStatistics {
    constructor(team) {
        this.team = team

        this.html = 1;
        this.lostUnits = 0
        this.lostAfterTime = 0

        this.damage = {}
    }
    // test(a) {
    //     this.html = a
    // }

    // dead({ unit }) {
    //     if (!(unit instanceof BaseBullet)) {
    //         this.lostUnits++
    //     }
    //     this.updateOutput()
    // }
    // deadAfterTime({ unit }) {
    //     if (!(unit instanceof BaseBullet)) {
    //         this.lostAfterTime++
    //     }

    //     this.updateOutput()
    // }

    // dealDamage({ unit, damage }) {
    //     if (this.damage[unit.name] === undefined) {
    //         this.damage[unit.name] = 0;
    //     }
    //     this.damage[unit.name] += damage
    //     this.updateOutput()
    // }


    // updateOutput() {
    //     // let text = ""
    //     // for (const key in this.damage) {
    //     //     if (Object.hasOwnProperty.call(this.damage, key)) {
    //     //         text += `[${key}]: ${this.damage[key]} `
    //     //     }
    //     // }
    //     // text += `lost units: ${this.lostUnits - this.lostAfterTime}, passed units: ${this.lostAfterTime}`
    //     // this.html.innerText = text
    // }


}