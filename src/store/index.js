import { createStore } from 'vuex'
import AllUnits from '@/game/elements/AllUnits'

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
      weapons: ""
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
