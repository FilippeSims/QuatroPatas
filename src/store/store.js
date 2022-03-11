import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      idPet: []
    },
    mutations: {
      changeArrayIdPet(state, idPet){
        state.idPet = idPet
      }
    },
    actions: {
      changeArrayIdPet(context, idPet){
        context.commit('changeArrayIdPet', idPet)
      }
    },
    getters: {
      getIdPets(state){
        return state.idPet
      }
    }
})