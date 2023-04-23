import { createStore } from 'vuex'
import AllUnits from '@/game/elements/AllUnits'
import AllWeapons from '@/game/elements/AllWeapons'
export default createStore({
  state: {
    player: {
      name: "player 1",
      resourses: {
        fillers: 100,
        alloys: 10,
        fuel: 400,
        maxStantions: 4
      },
      stantions: {

      }
    },
    gameElements: {
      stantions: AllUnits,
      weapons: AllWeapons,
    }
  },
  getters: {
    allStantions(state) {
      return state.gameElements.stantions
    },
    allWeapons(state) {
      return state.gameElements.weapons
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
