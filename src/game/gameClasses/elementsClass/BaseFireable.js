import Unit from "./BaseUnit";


export default class FireableUnit extends Unit {
    constructor(data) {
        super(data);
        const Bullet = data.Bullet;
        this.projectileCreateScr = (a) => new Bullet(a)
    }


    fire() {
        let bullet = this.projectileCreateScr({ fieredUnit: this })
        bullet.rotation = this.absolutePosition.rotation
        this.team.addMember({
            member: bullet
        })

    }
}