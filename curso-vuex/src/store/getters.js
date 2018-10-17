export default {
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