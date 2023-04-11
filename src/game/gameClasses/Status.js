export default class Status {
    constructor(hpBar, unit) {
        this._maxHP = 1
        this._nowHP = 1

        this.hpBar = hpBar
        this.unit = unit

        this.dead = false
    }


    set maxHP(v) {
        this.nowHP = this.nowHP === this._maxHP ? v : this.nowHP;
        this._maxHP = v;
    }
    get maxHP() {
        return this._maxHP
    }
    set nowHP(v) {
        this.hpBar(this.nowHP / this.maxHP)
        if (v > 0) this._nowHP = v;
        else {
            this.unit.team.statistics.dead({unit: this.unit})
            this.dead = true;
        }
    }
    get nowHP() {
        return this._nowHP;
    }
    takeDamage({ damage }) {
        this.nowHP = this.nowHP - damage;
    }


}