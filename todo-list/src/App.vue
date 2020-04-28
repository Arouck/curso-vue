<template>
	<div id="app">
		<h1>Tasks</h1>
		<ProgressBar />
		<Input />
		<TaskList />
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar';
import Input from './components/Input';
import TaskList from './components/TaskList';
export default {
	components: { ProgressBar, Input, TaskList }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF; 
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
