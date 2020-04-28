<template>
    <div id="taskList">
        <ul v-if="taskList.length > 0">
            <li v-for="task in taskList" :key="task">
                <Task :task="task" />
            </li>
        </ul>
        <h2 v-else>Your life is up to date :)</h2>
    </div>
</template>

<script>
import Task from "./Task";
import eventBus from '@/eventBus.js';

export default {
    components: { Task },
    data() {
        return {
            taskList: [],
        }
    },

    created() {
        eventBus.addNewTaskToList(task => {
            if(!this.taskList.includes(task)) {
                this.taskList.push(task);
                eventBus.updateNumberOfTasks(this.taskList.length);
            }
        });

        eventBus.removeTaskFromList(task => {
            if(this.taskList.includes(task.task)) {
                const index = this.taskList.indexOf(task.task);
                this.taskList.splice(index, 1);
                eventBus.updateNumberOfTasks(this.taskList.length);
                if(task.taskStyle === 'doneTask') {
                    eventBus.updateNumberOfDoneTasks(false);
                }
            }
        });
    }
};
</script>

<style scoped>
#taskList {
    display: flex;
    align-items: center;
    width: 150vh;
    margin-top: 5%;
    text-align: center;
    justify-content: center;
}

#taskList ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

#taskList ul li {
    margin: 1%;
}
</style>