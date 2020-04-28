import Vue from 'vue';

export default new Vue({
    methods: {
        saveTask(task) {
            this.$emit('addingTask', task);
        },

        addNewTaskToList(task) {
            this.$on('addingTask', task);
        },

        removeTask(task) {
            this.$emit('removingTask', task);
        },

        removeTaskFromList(task) {
            this.$on('removingTask', task);
        },

        updateNumberOfTasks(numberOfTasks) {
            this.$emit('updatingTotalOfTasks', numberOfTasks);
        },

        updateTotalOfTasks(numberOfTasks) {
            this.$on('updatingTotalOfTasks', numberOfTasks);
        },

        updateNumberOfDoneTasks(done) {
            this.$emit('updatingProgress', done);
        },

        updateProgress(done) {
            this.$on('updatingProgress', done);
        }
    }
});