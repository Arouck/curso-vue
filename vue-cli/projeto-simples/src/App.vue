<template>
  <div id="app">
    {{ titulo }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Teste data usando Vue JS',
    };
  },
}
</script>

<style>
  #app {
    background-color: cadetblue;
    font-size: 24px;
  }
</style>