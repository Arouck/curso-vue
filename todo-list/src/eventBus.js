import Vue from 'vue';

export default new Vue({
    methods: {
        addNewTask(newTask) {
            this.$emit('addedTask', newTask);
        },

        addNewTaskToList(newTask) {
            this.$on('addedTask', newTask);
        },

        removeTask(task) {
            this.$emit('removedTask', task);
        },

        removeTaskFromList(task) {
            this.$on('removedTask', task);
        }
    }
});