<template>
    <div id="bar">
        <div id="progress">
            <p>0%</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progress: 0
        };
    }
};
</script>

<style scoped>
#bar {
    width: 75%;
    height: 3%;
    border: 1px solid #d6d6d6;
    border-radius: 1vh;
    overflow: hidden;
    margin-top: 3%;
}

#progress {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#progress p {
    font-weight: 300;
}
</style>