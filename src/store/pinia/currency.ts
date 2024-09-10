import { defineStore } from "pinia";
import {IceResource, IronResource, StoneResource, SiliciumResource} from  '../../game/gameClasses/resources'
export const useUserResourcesStore = defineStore('userResourcesStore', {
    state() {
        return {
            ice: new IceResource({amount: 100}),
            iron: new IronResource({amount: 100}),
            stone: new StoneResource({amount: 100}),
            silicium: new SiliciumResource({amount: 100}),
        }
    }
});
