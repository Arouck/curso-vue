<template>
    <div id="taskList">
        <ul v-if="taskList.length > 0">
            <li v-for="(task, index) in taskList" :key="task.name">
                <Task :task="task" @changedTask="toggleTaskState(task, index)" />
            </li>
        </ul>
        <h2 v-else>Your life is up to date :)</h2>
    </div>
</template>

<script>
import Task from "./Task";
import eventBus from "@/eventBus.js";

export default {
    components: { Task },
    data() {
        return {
            taskList: []
        };
    },

    watch: {
        taskList: {
            deep: true,
            handler() {
                localStorage.setItem("tasks", JSON.stringify(this.taskList));
                this.$emit("changedList", this.taskList);
            }
        }
    },

    created() {
        eventBus.addNewTaskToList(newTask => {
            const tasksNames = this.taskList.map(task => task.name);
            const alreadyExists = tasksNames.includes(newTask.name);
            if (!alreadyExists) {
                this.taskList.push({
                    name: newTask.name,
                    pending: newTask.pending || true
                });
            }
        });

        eventBus.removeTaskFromList(task => {
            if (this.taskList.includes(task)) {
                const index = this.taskList.indexOf(task);
                this.taskList.splice(index, 1);
            }
        });

        const json = localStorage.getItem("tasks");
        const array = typeof json != undefined ? JSON.parse(json) : [];
        this.taskList = Array.isArray(array) ? array : [];
    },

    methods: {
        toggleTaskState(task, index) {
            if (this.taskList.includes(task)) {
                this.taskList[index].pending = !this.taskList[index].pending;
            }
        }
    }
};
</script>

<style scoped>
#taskList {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150vh;
    margin-top: 3%;
    text-align: center;
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

#taskList h2 {
    color: #aaa;
}
</style>