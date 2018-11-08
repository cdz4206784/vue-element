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

    <!-- <time-picker></time-picker> -->

    <!-- <app-date-picker></app-date-picker> -->

    <!-- <date-time-picker></date-time-picker> -->

    <!-- <app-upload></app-upload> -->

    <!-- <app-rate></app-rate> -->

    <!-- <color-picker></color-picker> -->

    <!-- <app-transfer></app-transfer> -->

    <!-- <app-form></app-form> -->

    <!-- <app-table></app-table> -->

    <!-- <app-tag></app-tag> -->

    <app-progress></app-progress>






    <!-- 替换测试 -->
    <!-- <app-find></app-find> -->
  </div>
</template>

<script>
import Layout from "./components/Layout"
import Container from "./components/Container"
import AppInput from "./components/Input"
import InputNumber from "./components/InputNumber"
import AppSelect from "./components/Select"
import AppCascader from "./components/Cascader"
import TimePicker from "./components/TimePicker"
import AppDatePicker from "./components/DatePicker"
import DateTimePicker from "./components/DateTimePicker"
import AppUpload from "./components/Upload"
import AppRate from "./components/Rate"
import AppSwitch from "./components/Switch"
import AppSlider from "./components/Slider"
import ColorPicker from "./components/ColorPicker"
import AppTransfer from "./components/Transfer"
import AppForm from "./components/Form"
import AppTable from "./components/Table"
import AppTag from "./components/Tag"
import AppProgress from "./components/Progress"



// import Find from "./components/Find"
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    layoutDemo: Layout,
    containerDemo: Container,
    appInput: AppInput,
    InputNumber: InputNumber,
    AppSelect: AppSelect,
    AppCascader: AppCascader,
    TimePicker: TimePicker,
    AppDatePicker: AppDatePicker,
    DateTimePicker: DateTimePicker,
    AppUpload: AppUpload,
    AppRate: AppRate,
    AppSwitch: AppSwitch,
    AppSlider: AppSlider,
    ColorPicker: ColorPicker,
    AppTransfer: AppTransfer,
    AppForm: AppForm,
    AppTable: AppTable,
    AppTag: AppTag,
    AppProgress: AppProgress,

    // appFind: Find
  }
};
</script>

<style>
</style>
