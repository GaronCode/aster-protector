import Lib from "./Lib.js";
import BaseUnit from '@/game/gameClasses/elementsClass/BaseUnit.js'


export default class Spawner extends Lib {
    constructor() {
        super("Spawner")
        this.interval = 500;
        this.areas = []

        this.spawnType = "all";
        this.spawnCount = 10;

        this.team;
        this.unitsForSpawn = []
        this.isStarted = false
        this.intervalId;

        this.intervalFx = () => {
            if (this.spanwnsLeft <= 0) {
                this.stopSpawning()
            }
            this.spawnOnce();
            this.spanwnsLeft--;
        }

    }

    setSpawnType(type) {
        this.spawnType = type
        return this
    }

    setSpawnInterval(interval) {
        this.interval = interval
        if (this.isStarted) {
            this.stopSpawning();
            this.startSpawning()
        }
        
        return this
    }

    

    startSpawning() {
        this.isStarted = true
        this.spanwnsLeft = this.spawnCount;
        this.intervalId = setInterval(this.intervalFx, this.interval);
        return this
    }
    stopSpawning() {
        clearInterval(this.intervalId);
        return;
    }

    continueSpawinig() {
        this.isStarted = true
        this.intervalId = setInterval(this.intervalFx, this.interval);
        return this
    }

    setArea({ x, y }) {
        this.areas.push({
            x: {
                min: x.min ? x.min : 0,
                max: x.max ? x.max : 0
            },
            y: {
                min: y.min ? y.min : 0,
                max: y.max ? y.max : 0
            }
        })
        return this
    }

    setCount(i) {
        this.spawnCount = i;
    }

    addTeam(team) {
        this.team = team;
    }

    addUnitFx(unitFx) {
        if (!this.checkClass(unitFx, Function, 'addUnit')) return false;
        this.unitsForSpawn.push(unitFx)
        return this
    }

    spawnOnce() {
        if (this.unitsForSpawn.length < 1) {
            this.printErr("spawnOnce: not enough units for spawn");
            return false;
        }

        switch (this.spawnType) {
            case "all":
                this.unitsForSpawn.forEach(unitFx => {
                    this.spawnMember(unitFx())
                    

                });
                break;
            case "rnd":
                this.spawnMember(this.unitsForSpawn[Lib.int(this.unitsForSpawn.length)]())
                break
            default:
                break;
        }



    }

    spawnMember(member) {
        if (!this.checkClass(member, BaseUnit, "spawnMember")) return;

        const areaId = Lib.int(this.areas.length);
        member.position.x = Lib.intRange(this.areas[areaId].x.min, this.areas[areaId].x.max);
        member.position.y = Lib.intRange(this.areas[areaId].y.min, this.areas[areaId].y.max);

        this.team.addMember({ member })
    }



}