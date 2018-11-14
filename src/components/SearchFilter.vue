<template>
  <div id="search-filter">
    <input type="text" v-model="search" @focus="showList">
    <slot v-bind:selectedValue="search"></slot>
    <ul v-if="showState">
      <li v-for="item in searchData" :key="item.name" @click="selectItem(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'search-filter',
  props:{
    // 接受当前值
    propsValue: {
      type: String,
      required: true
    },
    // 接收原始数组
    propsData: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      search: this.propsValue,
      showState: false,
    }
  },
  computed: {
    searchData: function(){
      var search = this.search;
      //if(search){
        return this.propsData.filter(function(item){
          return Object.keys(item).some(function(key) {
            return String(item[key]).toLowerCase().indexOf(search) > -1
          })
        })

        return this.propsData;
      //}
    }
  },
  methods:{
    // 显示
    showList:function(){
      this.showState = true;
    },
    // 选择
    selectItem:function(item){
      if(item.name !== '不选'){
        this.search = item.name;
      }
      this.showState = false;
    }
  }
}
</script>

<style scoped>
  #search-filter {
    width: 100%;
    max-width: 150px;
    background: #eee;
    font-size: 12px;
  }

  #search-filter input {
    width: 100%;
    box-sizing: border-box
  }

  #search-filter ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  #search-filter ul li {
    padding:5px 10px;
  }

  #search-filter ul li:hover {
    cursor: pointer;
    background: #ccc;
  }
</style>

