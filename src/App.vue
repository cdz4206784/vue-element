<template>
  <div id="app">
    <!-- <layout-demo></layout-demo> -->

    <!-- <container-demo></container-demo> -->

    <!-- <app-input>
      <h3>Input输入框</h3>
      <p slot="input1">基础用法el-input</p>
      <p slot="input2">可清空 clearable</p>
      <p slot="input3">右-带ICON的输入框 属性方式suffix-icon</p>
      <p slot="input4">左-带ICON的输入框 属性方式prefix-icon</p>
      <p slot="input5">右-带ICON的输入框 slot方式suffix</p>
      <p slot="input6">左-带ICON的输入框 slot方式prefix</p>
    </app-input> -->

    <!-- <input-number></input-number> -->

    <!-- <app-select></app-select> -->

    <!-- <app-cascader></app-cascader> -->

    <!-- <app-switch></app-switch> -->

    <!-- <app-slider></app-slider> -->

    <time-picker></time-picker>

    <!-- 替换测试 -->
    <!-- <app-find></app-find> -->
  </div>
</template>

<script>
import Layout from './components/Layout'
import Container from './components/Container'
import AppInput from './components/Input'
import InputNumber from './components/InputNumber'
import AppSelect from './components/Select'
import AppCascader from './components/Cascader'
import AppSwitch from './components/Switch'
import AppSlider from './components/Slider'
import TimePicker from './components/TimePicker'


import Find from './components/Find'
export default {
  name: "App",
  data() {
    return {
      
    }
  },
  components: {
    layoutDemo: Layout,
    containerDemo: Container,
    appInput: AppInput,
    InputNumber: InputNumber,
    AppSelect: AppSelect,
    AppCascader: AppCascader,
    AppSwitch: AppSwitch,
    AppSlider: AppSlider,
    TimePicker: TimePicker,
    appFind: Find
  }
};
</script>

<style>

</style>
