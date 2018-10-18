export default {
    ADD_TASK (state, task) {
        state.tasks.push(task)
    },
    TOGGLE_TASK (state, task) {
        task.completed = !task.completed
    }
}