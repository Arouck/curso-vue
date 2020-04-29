<template>
    <div id="bar" v-show="totalTasks > 0">
        <div id="progress" :style="{width: `${updateProgressBar}%`}"></div>
        <p>{{ updateProgressBar }}%</p>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type:Number,
            default: 0,
        },

        totalTasks: {
            type: Number,
            default: 0,
        }
    },

    computed: {
        updateProgressBar() {
            if (this.totalTasks != 0) {
                return Math.floor((this.progress / this.totalTasks) * 100);
            } else {
                return 0;
            }
        }
    }
};
</script>

<style scoped>
#bar {
    width: 75%;
    height: 3%;
    border: 1px solid #d6d6d6;
    border-radius: 1vh;
    margin-top: 3%;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
}

#progress {
    background-color: #7beb63;
    height: 100%;
    position: relative;
}

#bar p {
    font-weight: 300;
    width: 75%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: 0 auto;
}
</style>