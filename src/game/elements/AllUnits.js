import ArmoredPlatform from "./units/ArmoredPlatform";
import GunPlatform from "./units/GunPlatform";
import UserBase from "./units/UserBase";

class Unit {
   constructor(UnitClass) {
      this.name = UnitClass.specs.unitName;
      this.size = UnitClass.specs.size;
      this.hp = UnitClass.specs.hp;
      this.create = () => new UnitClass();
   }
}


const AllUnits = {
   ap01: new Unit(ArmoredPlatform),
   gp01: new Unit(GunPlatform),
   mb01: new Unit(UserBase)
}




export default AllUnits;

