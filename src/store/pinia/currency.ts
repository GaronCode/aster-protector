import { defineStore } from "pinia";
import {IceResource, IronResource, StoneResource, SiliciumResource} from  '../../game/gameClasses/Resources'
export const useUserResourcesStore = defineStore('userResourcesStore', {
    state() {
        return {
            current: {
                ice: new IceResource({amount: 100}),
                iron: new IronResource({amount: 100}),
                stone: new StoneResource({amount: 100}),
                silicium: new SiliciumResource({amount: 100}),
            }
        }
    },
    getters: {
        list({current: {ice, iron, stone, silicium}}) {
            return [ice, iron, stone, silicium]
        }
    }
});
