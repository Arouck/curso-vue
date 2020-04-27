<template>
    <div id="taskForm">
        <input type="text" placeholder="Type your task" v-model="task" />
        <button @click="saveTask">+</button>
    </div>
</template>

<script>
import eventBus from "@/eventBus.js";

export default {
    data() {
        return {
            task: ""
        };
    },

    methods: {
        saveTask() {
            if (!(this.task === "")) {
                eventBus.saveTask(this.task);
                this.task = "";
            }
        }
    }
};
</script>

<style>
#taskForm {
    display: flex;
    flex-direction: row;
    height: 4%;
    width: 20%;
    border-radius: 1vh;
    overflow: hidden;
    border: 1px solid #d6d6d6;
    margin-top: 3%;
}

#taskForm input {
    width: 90%;
    border: none;
    outline: none;
    background-color: #e3e3e3;
    font-size: 125%;
    color: #7d7d7d;
}

#taskForm button {
    width: 10%;
    min-width: 35px;
    font-size: 100%;
    font-weight: 600;
    background-color: #486cc7;
    color: #fff;
    border: none;
    cursor: pointer;
}
#input button:active {
    background-color: #0d47d9;
}
</style>