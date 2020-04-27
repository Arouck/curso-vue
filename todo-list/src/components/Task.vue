<script src="https://kit.fontawesome.com/yourcode.js"></script>

<template>
    <div id="backBox">
        <div id="task" tabindex="1">
            <div id="removeContainer">
                <button id="remove">x</button>
            </div>
            <div id="textContainer">
                <p id="taskName">{{ task }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: String,
        required: true,
    }
};
</script>

<style scoped>
#backBox {
    background-color: #d61e1e;
    width: 18vh;
    height: 12vh;
    overflow: hidden;
    border-radius: 10px;
    float: left;
    margin-left: 2%;
}

#task {
    background-color: #ff4f4f;
    width: 95%;
    height: 100%;
    float: right;
    cursor: pointer;
}

#task:focus {
    background-color: #1a9c00;
}

#task #textContainer {
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
}

#task #taskName {
    margin: 0 1% 0 3%;
}

#task #removeContainer {
    display: flex;
    text-align: center;
    align-items: center;
    width: 15%;
    float: right;
}

#removeContainer #remove {
    background-color: #d61e1e;
    outline: none;
    cursor: pointer;
    border: none;
    width: 20px;
    margin: 1vh 0 0 0;
    border-radius: 20px;
    color: #fff;
}
</style>