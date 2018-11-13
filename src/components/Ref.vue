<template>
  <div id="app-ref">
    <h3>ref属性与refs</h3>
    <input type="text" ref="input1" id="input1">
    <button @click="add">添加</button>

    <ul v-for="item in 4" :key="item">
      <li ref="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app-ref',
    data(){
      return {

      }
    },
    methods: {
      add(){
        this.$refs.input1.value = '22';
        console.log(this.$refs.input1);
        console.log(document.getElementById('input1'));
        console.log(this.$refs.item[0].innerHTML)
      }
    }
  }
</script>

<style scoped>

</style>

