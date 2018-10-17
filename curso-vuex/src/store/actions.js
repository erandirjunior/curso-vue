export default {
    addTask (context, task) {
        // ... ajax

        context.commit('ADD_TASK', task)
    }
}