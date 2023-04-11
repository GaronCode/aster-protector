import LightGun from "./weapons/LightGun";

function Weapon(WeaponClass) {
   this.name = WeaponClass.BaseGunName;
   this.size = WeaponClass.BaseGunSize
   this.hp = WeaponClass.BaseGunHP
   this.bullet = WeaponClass.BaseGunBulletClass
   this.create = (a)=> new WeaponClass(a)
}


const AllUnits = {
   lg01: new Weapon(LightGun),
}




export default AllUnits;

