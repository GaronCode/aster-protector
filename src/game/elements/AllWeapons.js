import Gun from "./weapons/Gun";

function Weapon(WeaponClass, WeaponData) {

   this.specs = Object.assign({},WeaponClass.specs,WeaponData)
   
   this.bulletSpecs = this.specs.Bullet.specs

   this.create = ()=> new WeaponClass(WeaponData)
}


const AllUnits = {
   lg01: new Weapon(Gun, {unitName: "Light Gun Mk1" ,size: 70, fireInterval: 25 }),
}




export default AllUnits;

