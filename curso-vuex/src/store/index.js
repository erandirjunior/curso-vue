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
    },
    actions: {
        addTask (context, task) {
            // ... ajax

            context.commit('ADD_TASK', task)
        }
    },
    getters: {
        sortedTasks (state) {
            const sorted = state.tasks;
            return sorted.sort((a, b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            })
        },
        tasksNotCompleted (state) {
            const tasks = state.tasks;

            return tasks.filter(task => {
                return !task.completed
            })
        }
    }
})