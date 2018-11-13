<template>
  <div id="app-slot">
    <h3>单个slot</h3>
    <slot></slot>

    <hr>

    <h3>具名slot</h3>
    <slot name="ceshi"></slot>

    <hr>

    <h3>作用域slot</h3>
    <slot name="ceshi2" :sonTitle="sonTitle"></slot>


  </div>
</template>

<script>
  export default {
    name: 'app-slot',
    data(){
      return {
        sonTitle:'子组件标题'
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>

