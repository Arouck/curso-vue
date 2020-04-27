<template>
    <div id="taskList">
        <ul>
            <li v-for="task in taskList" :key="task">
                <Task :task="task" />
            </li>
        </ul>
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