<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot></slot>
        <div class="autor">
            <slot name="autor"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.citacao {
    border: 1px solid #ddd;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 25px;
    max-width: 100vh;
    min-width: 60vh;
    margin-bottom: 2vh;
}

.autor {
    float: right;
}
</style>
