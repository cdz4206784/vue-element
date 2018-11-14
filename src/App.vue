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

    <!-- <app-progress></app-progress> -->

    <!-- <app-pagination></app-pagination> -->

    <!-- <app-badge></app-badge> -->

    <!-- <app-tree></app-tree> -->

    <!-- <app-message></app-message> -->

    <!-- <app-notification></app-notification> -->

    <!-- <message-box></message-box> -->

    <!-- <nav-menu></nav-menu> -->

    <!-- <app-tabs></app-tabs> -->

    <!-- <app-breadcrumb></app-breadcrumb> -->
    <!-- <app-dropdown></app-dropdown> -->

    <!-- <app-steps></app-steps> -->

    <!-- <app-dialog></app-dialog> -->

    <!-- <tool-tip></tool-tip> -->

    <!-- <app-popover></app-popover> -->

    <!-- <app-card></app-card> -->

    <!-- <app-carousel></app-carousel> -->

    <!-- <app-collapse></app-collapse> -->

    <!-- <app-ref></app-ref> -->

    <!-- <app-slot>
       <p>父组件使用slot插入子组件</p>
       <p slot="ceshi">具名插槽slot</p>
       <p slot="ceshi2" slot-scope="props">1111 + {{props.sonTitle}}</p>
    </app-slot> -->

    <search-filter v-bind:propsValue="authorName" v-bind:propsData="authorData">
      <template slot-scope="props">
        <input type="hidden" id="author" v-model="props.selectedValue" placeholder="子传父">
      </template>
    </search-filter>
    <br>
    <search-filter v-bind:propsValue="saleName" v-bind:propsData="saleData">
      <template slot-scope="props">
        <input type="hidden" id="salesman" v-model="props.selectedValue" placeholder="子传父">
      </template>
    </search-filter>

    <br>

    <button @click="getValue">获取子组件的值</button>


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
import AppPagination from "./components/Pagination"
import AppBadge from "./components/Badge"
import AppTree from "./components/Tree"
import AppMessage from "./components/Message"
import AppNotification from "./components/Notification"
import MessageBox from "./components/MessageBox"
import NavMenu from "./components/NavMenu"
import AppTabs from "./components/Tabs"
import AppBreadcrumb from "./components/Breadcrumb"
import AppDropdown from "./components/Dropdown"
import AppSteps from "./components/Steps"
import AppDialog from "./components/Dialog"
import ToolTip from "./components/Tooltip"
import AppPopover from "./components/Popover"
import AppCard from "./components/Card"
import AppCarousel from "./components/Carousel"
import AppCollapse from "./components/Collapse"
import AppRef from "./components/Ref"
import AppSlot from "./components/Slot"
import SearchFilter from "./components/SearchFilter"



// import Find from "./components/Find"
export default {
  name: "App",
  data() {
    return {
      authorName: '紫泥',
      authorData: [
        {id:'',name:'不选',pinyin:'', sx:''},
        {id:123, name:'红泥', pinyin:'hongni',sx:'hn'},
        {id:456, name:'紫泥', pinyin:'zini',sx:'zn'},
        {id:789, name:'蓝泥', pinyin:'lanni',sx:'ln'},
      ],

      saleName: '唐僧',
      saleData: [
        {id:'',name:'不选',pinyin:'', sx:''},
        {id:123, name:'乔峰', pinyin:'qiaofeng', sx:'qf'},
        {id:456, name:'朱德', pinyin:'zhude', sx:'zd'},
        {id:789, name:'唐僧', pinyin:'tangseng', sx:'ts'}
      ]

    };
  },
  methods: {
    getValue:function(){
      var author = document.getElementById("author").value;
      var salesman = document.getElementById("salesman").value;
      console.log(author,salesman)
    }
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
    AppPagination: AppPagination,
    AppBadge: AppBadge,
    AppTree: AppTree,
    AppMessage: AppMessage,
    AppNotification: AppNotification,
    MessageBox: MessageBox,
    NavMenu: NavMenu,
    AppTabs: AppTabs,
    AppBreadcrumb: AppBreadcrumb,
    AppDropdown: AppDropdown,
    AppSteps: AppSteps,
    AppDialog: AppDialog,
    ToolTip: ToolTip,
    AppPopover: AppPopover,
    AppCard: AppCard,
    AppCarousel: AppCarousel,
    AppCollapse: AppCollapse,
    AppRef: AppRef,
    AppSlot: AppSlot,
    SearchFilter: SearchFilter,





    // appFind: Find
  }
};
</script>

<style>
</style>
