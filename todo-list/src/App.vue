<template>
    <div id="app">
        <h1>Tasks</h1>
        <ProgressBar :progress="progress"
			:totalTasks="totalTasks" />
        <Input />
        <TaskList @changedList="tasks = $event" />
    </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
export default {
    components: { ProgressBar, Input, TaskList },
    data() {
        return {
            tasks: []
        };
	},
	
    computed: {
        progress() {
            return this.tasks.filter(task => !task.pending).length;
		},
		
        totalTasks() {
            return this.tasks.length;
        }
	},
};
</script>

<style>
body {
    font-family: "Lato", sans-serif;
    background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
    color: #fff;
}

#app {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#app h1 {
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 3rem;
}
</style>
