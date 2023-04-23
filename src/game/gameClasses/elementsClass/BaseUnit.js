import { Container, Sprite, Texture } from 'pixi.js'
import Lib from "@/game/gameClasses/Lib";
import Team from "@/game/gameClasses/Team.js"
import BaseScript from "@/game/gameClasses/movementControls/BaseScript.js";
import AbsolutePosition from "@/game/gameClasses/AbsolutePosition.js";
import Status from "@/game/gameClasses/Status.js";


export default class BaseUnit extends Lib {

    constructor(data) {
        let { unitName, Shape, size, textureName, useHpBar, mainUnit, hp } = data
        super({ errName: "Unit " + unitName })
        //alert("name: "+unitName +"\nShape: " +Shape+"   \nsize: "+size+"\n textureName: " +textureName+"\n useHpBar: " +useHpBar+"\n mainUnit: " + mainUnit+"\n hp: " + hp)
        this.shape = new Shape(size, textureName)
        let container = new Container();

        container.addChild(this.shape);



        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;
        container.isRendered = false;
        this.container = container;

        // let bg = new Sprite(Texture.WHITE);
        // bg.width = container.width;
        // bg.height = container.height;
        // bg.alpha = 1;
        // bg.zIndex = 100;
        // container.addChild(bg);
        // this.bgItem = bg;

        if (hp === undefined) hp = 1;
        let hpBar = () => { }
        if (useHpBar) {
            let z = new Sprite(Texture.WHITE);
            z.width = 20;
            z.height = 10;
            z.alpha = 0.3;
            z.zIndex = 100;
            z.position.y = this.container.height - 10


            let y = new Sprite(Texture.WHITE);
            y.width = z.width;
            y.height = z.height;
            y.alpha = 0.4;
            y.tint = 0x00FFFF
            y.position.y = z.position.y
            container.addChild(y);
            container.addChild(z);
            hpBar = (v) => { y.width = z.width * v }
        }


        this.untouchable = false;

        this.mainUnit = mainUnit


        this.team;
        this.name = unitName;
        this.size = size;
        this.weapons = []
        this.status = new Status(hpBar, this);
        this.status.maxHP = hp;

        this.controlScripts = []


        this.position = {
            set x(v) { container.position.x = v },
            get x() { return container.position.x },
            set y(v) { container.position.y = v },
            get y() { return container.position.y },

            get rotation() { return container.rotation },
            set rotation(v) { container.rotation = v },

            set: function (x, y) {
                this.x = x;
                this.y = y;
            },

            add: function (x, y) {
                this.x += x;
                this.y += y;
            }
        }

        this.absolutePosition = this.position




    }
    set rotation(v) {
        this.position.rotation = v;
    }
    get rotation() { return this.position.rotation }

    get collisionRadius() {
        let max = 0;
        this.container.children.forEach((e) => {
            if (e.collisionRadius > max) max = e.collisionRadius
        })
        return max;

    }

    collisionFx(/* anotherUnit */) {
        // if (this.team === anotherUnit.team) return;

    }



    addControlScript(script) {
        this.addToArr(
            this.controlScripts,
            script,
            "addControlScript",
            BaseScript,
            () => { script.addUnit(this) }
        );

    }

    removeControlScript(script) {
        this.delFromArr(
            this.controlScripts,
            script,
            "removeControlScript",
            "Scripts",
            "Script"
        );
    }

    addWeapon({ gun }) {

        this.weapons.push(gun);
        gun.setMainUnit(this)
        gun.position.add(this.container.width / 2, this.container.height / 2)

        this.container.addChild(gun.container)

    }
    setMainUnit(unit) {
        if (this.checkClass(unit, this, "setMainUnit")) {
            this.mainUnit = unit
            this.absolutePosition = new AbsolutePosition(this);
        }


    }

    dead() {
        this.weapons.forEach((e) => {
            e.dead()
        })
        this.status.dead = true;
    }

    addTeam(team) {
        if (!this.checkClass(team, Team, "addTeam")) return false

        this.team = team;
        this.weapons.forEach((w) => {
            w.addTeam(team)
        })
        this.changeColor(team.color)
    }

    changeColor(color = 0xff0000, alpha = 0.1) {
        if (this.bgItem === undefined) return
        this.bgItem.tint = color;
        this.bgItem.alpha = alpha;
    }



    ////////////////////////////////////////////////////////////////////////

    tick({ cursorPosition }) {
        this.iterateAllUnitsScripts((script => script.tick({ cursorPosition })))

    }
    prepareScripts({ cursorPosition }) {
        this.iterateAllUnitsScripts((script => script.once({ cursorPosition })))
    }
    iterateAllUnitsScripts(fx) {
        this.controlScripts.forEach((script) => { fx(script) })
        this.weapons.forEach((unit => { unit.iterateAllUnitsScripts(fx) }))
    }
    ////////////////////////////////////////////////////////////////////////




    _getRenderObj() {
        this.container.isRendered = true;
        return this.container;
    }

    _isRendered() {
        return this.container.isRendered;
    }

    _stopRender() {
        this.container.isRendered = false;
    }
}