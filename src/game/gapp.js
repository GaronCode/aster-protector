import * as PIXI from "pixi.js";
import Team from "./gameClasses/Team.js";
import ViperMk1 from "./elements/units/ViperMk1.js";
import Lib from "./gameClasses/Lib.js"
import Spawner from "./gameClasses/Spawner.js"
import Tick from "./gameClasses/Tick.js"

import * as Shapes from "./elements/shapes.js";
import Asteroid from "./elements/units/Asteroid.js";
import MoveThroughTarget from "./gameClasses/movementControls/MoveThroughTarget"
import FloatToTarget from "./gameClasses/movementControls/FloatToTarget"
import FloatingInRadius from "./gameClasses/movementControls/FloatingInRadius"
import MoveForward from "./gameClasses/movementControls/MoveForward"
import Victor from "victor";
import FireInterval from "./gameClasses/movementControls/FireInterval.js";
import ShotGunMk1 from "./elements/weapons/ShotGunMk1.js";
import GunPlatform from "./elements/units/GunPlatform.js";
import ArmoredPlatform from "./elements/units/ArmoredPlatform.js";
import LightGun from "./elements/weapons/LightGun.js";
import MoveToTarget from "./gameClasses/movementControls/MoveToTarget.js";
import UserBase from "./elements/units/UserBase.js";






const canvasSize = 1200;
const canv = document.getElementById("canv");
const app = new PIXI.Application({
    view: canv,
    width: canvasSize,
    height: canvasSize,
    transparent: true,
});


const loader = PIXI.Loader.shared;

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


    Shapes.Shared.addResourses(resources);


    const teamAsteroids = createMeteorShowerTeam();
    


    const team1 = new Team({ name: "Blobs" });
    team1.statistics.test(document.getElementById('user'));
    
    team1.setColor({ color: 0x00ff00 })

    team1.addSpawner({ spawner: armoredLineSpawner().startSpawning() })
    team1.addSpawner({ spawner: shotGunSpawner().startSpawning() })
    team1.addMember({ member: base() })


    const tickObj = new Tick({ app });
    tickObj.addTeam({ teams: [team1, teamAsteroids] });
    tickObj.start();
})






function base() {
    let a = new UserBase();
    a.position.set(canvasSize - 50, canvasSize / 2)
    a.position.rotation = Math.PI / 2
    return a
}



function armoredLineSpawner() {
    let spawner = new Spawner();

    spawner.addUnitFx(() => {
        let a = new ArmoredPlatform();
        a.addWeapon({ gun: new LightGun({}) })
        a.addControlScript(new MoveToTarget({
            x: canvasSize - canvasSize / 3,
            y: Lib.intRange(canvasSize / 5, canvasSize - canvasSize / 5),
            speed: Lib.intRange(3, 5),
            afterScript: () => {
                a.addControlScript(new FloatingInRadius({
                    unit: a,
                    speed: 0.05,
                    radius: 15
                }))
            }
        }))


        return a
    })



    spawner.setArea({
        x: { min: canvasSize, max: canvasSize },
        y: { min: canvasSize / 2, max: canvasSize / 2 }
    });
    spawner.setCount(5)





    return spawner;
}

function shotGunSpawner() {
    let spawner = new Spawner();
    spawner.addUnitFx(() => {

        let a = new GunPlatform();
        a.addWeapon({ gun: new ShotGunMk1({}) })
        a.addControlScript(new MoveToTarget({
            x: canvasSize - canvasSize / 5,
            y: Lib.intRange(canvasSize / 4, canvasSize - canvasSize / 4),
            speed: Lib.intRange(1, 5),
            afterScript: () => {
                a.addControlScript(new FloatingInRadius({
                    unit: a,
                    speed: 0.05,
                    radius: 10
                }))

            }
        }))


        return a




    })

    spawner.setArea({
        x: { min: canvasSize, max: canvasSize },
        y: { min: canvasSize / 2, max: canvasSize / 2 }
    });
    spawner.setCount(3)





    return spawner;
}





function createMeteorShowerTeam(start = true) {
    const teamAsteroids = new Team({ name: "Asteroids" });
    teamAsteroids.statistics.test(document.getElementById('asteroids'));
    let asSpawner = new Spawner();
    asSpawner.addUnitFx(() => {
        let a = new Asteroid()
        a.addControlScript(new MoveThroughTarget({
            x: canvasSize,
            y: Lib.intRange(1, canvasSize),
            speed: a.asteroidType === 100 ? 1 : Lib.intRange(2, 4)
        }))

        return a
    })
    asSpawner
        .setArea({ x: { min: -100, max: 0 }, y: { min: 0, max: canvasSize } })

    let spInterval = 200
    asSpawner.setCount(Infinity)
    asSpawner.setSpawnInterval(spInterval)

    teamAsteroids.addSpawner({ spawner: asSpawner })

    // let aster = new Asteroid();
    // aster.position.set(150, 150)
    // teamAsteroids.addMember({ member: aster })


    if (start) asSpawner.startSpawning()


    let asInter = setInterval(() => {
        asSpawner.setSpawnInterval(--spInterval)
        document.getElementById('asteroidsMissed').innerText = spInterval - 50
        if (spInterval <= 50) {
            clearInterval(asInter)
            document.getElementById('asteroidsMissed').innerText = "destroy remaining asteroids"
            asInter = setInterval(() => {
                asSpawner.setSpawnInterval(spInterval += 100)
                if (spInterval > 1000) {
                    clearInterval(asInter)
                    asSpawner.stopSpawning()
                    document.getElementById('asteroidsMissed').innerText = "You Win!"
                }
            }, 1000)

        }
    }, 1000)

    return teamAsteroids;
}











