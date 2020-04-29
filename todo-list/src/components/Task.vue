<script src="https://kit.fontawesome.com/yourcode.js"></script>

<template>
    <div class="task" :class="stateClass"
        @click="$emit('changedTask', task)">
        <button class="remove" @click.stop="removeTask">x</button>
        <p id="taskName">{{ task.name }}</p>
    </div>
</template>

<script>
import eventBus from "@/eventBus.js";
export default {
    props: {
        task: Object
    },
    data() {
        return {
            taskStyle: "undoneTask",
            backBox: "undoneTaskBackBox",
            remove: "undoneTaskRemove"
        };
    },
    methods: {
        removeTask() {
            eventBus.removeTask(this.task);
        }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            };
        }
    }
};
</script>

<style scoped>
.task {
    box-sizing: border-box;
    width: 25vh;
    height: 12vh;
    padding: 3%;
    border-radius: 0.5vh;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

#taskName {
    font-weight: 300;
    font-size: 3vh;
}

.remove {
    position: absolute;
    right: 3%;
    top: 3%;
    border-radius: 50%;
    border: none;
    color: #FFF;
    font-weight: 500;
}

.pending {
    border-left: 12px solid #B73229;
    background-color: #F44336;
    color: #FFF
}

.done {
    color: #d4d4d4;
    border-left: 12px solid #0A8F08;
    background-color: #4CAF50;
    text-decoration: line-through;
}

.pending .remove {
        background-color: #B73229;
}

.done .remove {
        background-color: #0A8F08;
}
</style>