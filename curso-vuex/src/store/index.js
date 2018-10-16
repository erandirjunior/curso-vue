import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [
            {name: 'Lavar Carro', completed: false},
            {name: 'Lavar Casa', completed: false},
            {name: 'Lavar Banheiro', completed: false},
            {name: 'Lavar Roupa', completed: false},
        ],
    },
    mutations: {
        ADD_TASK (state, task) {
            state.tasks.push(task)
        },
        TOGGLE_TASK (state, task) {
            task.completed = !task.completed
        }
    }
})