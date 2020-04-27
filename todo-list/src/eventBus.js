import Vue from 'vue';

export default new Vue({
    methods: {
        saveTask(task) {
            this.$emit('addingTask', task);
        },

        addNewTaskToList(task) {
            this.$on('addingTask', task);
        }
    }
});