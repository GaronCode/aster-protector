import Platform from "./units/Platform";
class Unit {
   constructor(UnitClass, UnitData) {

      this.specs = Object.assign({},UnitClass.specs,UnitData)

      this.create = () => new UnitClass(UnitData);
   }
}


const AllUnits = {
   ap01: new Unit(Platform, { unitName: "Armored Platform", size: 80, textureName: "unit01", hp: 550 }),
   gp01: new Unit(Platform, { unitName: "Gun Platform", size: 65, textureName: "platform01", hp: 350 }),
   mb01: new Unit(Platform, { unitName: "Base", size: 300, textureName: "main_base", hp: 750 })
}

export default AllUnits;

