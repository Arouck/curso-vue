<script src="https://kit.fontawesome.com/yourcode.js"></script>

<template>
    <div :class="backBox">
        <div :class="taskStyle">
            <div id="removeContainer">
                <button :class="remove"
                    @click="removeTask">x</button>
            </div>
            <div id="textContainer" @click="changeTaskStyle">
                <p id="taskName">{{ task }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import eventBus from '@/eventBus.js';
export default {
    props: {
        task: String,
        required: true,
    },
    data() {
        return{
            taskStyle: 'undoneTask',
            backBox: 'undoneTaskBackBox',
            remove: 'undoneTaskRemove',
        };
    },
    methods: {
        changeTaskStyle() {
            if(this.taskStyle === 'undoneTask') {
                this.taskStyle = 'doneTask';
                this.backBox = 'doneTaskBackBox';
                this.remove = 'doneTaskRemove';
                eventBus.updateNumberOfDoneTasks(true);
            } else {
                this.taskStyle = 'undoneTask';
                this.backBox = 'undoneTaskBackBox';
                this.remove = 'undoneTaskRemove';
                eventBus.updateNumberOfDoneTasks(false);
            }
        },

        removeTask() {
            eventBus.removeTask(this);
        }
    }
};
</script>

<style scoped>
.undoneTaskBackBox {
    background-color: #d61e1e;
    width: 18vh;
    height: 12vh;
    overflow: hidden;
    border-radius: 10px;
    float: left;
    margin-left: 2%;
}

.doneTaskBackBox {
    background-color: #1f8708;
    width: 18vh;
    height: 12vh;
    overflow: hidden;
    border-radius: 10px;
    float: left;
    margin-left: 2%;
}

.undoneTask {
    background-color: #ff4f4f;
    width: 95%;
    height: 100%;
    float: right;
    cursor: pointer;
}

.doneTask {
    background-color: #7beb63;
    width: 95%;
    height: 100%;
    float: right;
    cursor: pointer;
    text-decoration-line: line-through;
    opacity: 0.8;
}

.undoneTaskRemove {
    background-color: #d61e1e;
    outline: none;
    cursor: pointer;
    border: none;
    width: 20px;
    margin: 1vh 0 0 0;
    border-radius: 20px;
    color: #fff;
}

.doneTaskRemove {
    background-color: #1f8708;
    outline: none;
    cursor: pointer;
    border: none;
    width: 20px;
    margin: 1vh 0 0 0;
    border-radius: 20px;
    color: #fff;
}

#textContainer {
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
}

#taskName {
    margin: 0 1% 0 3%;
}

#removeContainer {
    display: flex;
    text-align: center;
    align-items: center;
    width: 15%;
    float: right;
}

</style>