<template>
  <div>
    <Layout>
      <bread-crumb></bread-crumb>
      <Content
        :style="{
          padding: '24px',
          minHeight: '280px',
          background: '#fff',
        }"
      >
        <div class="title1">
          <div
            style="
              float: left;
              width: 120px;
              text-align: right;
              margin-top: 8px;
            "
          >
            <span style="color: red">*</span> 调度方式
          </div>
          <div style="width: 160px; height: 35px; margin-left: 140px">
            <Button class="table_button_left" :class="{ active: active }"
              >单次</Button
            >
            <Button class="table_button_right" :class="{ active: !active }"
              >周期</Button
            >
          </div>
        </div>
        <div v-if="!active">
          <div class="title1">
            <div
              style="
                float: left;
                width: 120px;
                text-align: right;
                margin-top: 8px;
              "
            >
              <span style="color: red">*</span> 开始执行时间
            </div>
            <DatePicker
              type="datetime"
              placeholder="选择时间和日期"
              style="width: 200px; margin: 2px 0 0 20px"
            ></DatePicker>
          </div>
        </div>
        <div class="title1" style="height: 35px">
          <div
            style="
              float: left;
              width: 120px;
              text-align: right;
              margin-top: 8px;
            "
          >
            <div v-if="showAttr">
              <span style="color: #337dff; cursor: pointer" @click="showBtn"
                >显示高级属性
              </span>
              <Icon type="ios-arrow-down" size="16" color="#337DFF" />
            </div>
            <div v-if="!showAttr">
              <span style="color: #337dff; cursor: pointer" @click="showBtn"
                >隐藏高级属性
              </span>
              <Icon type="ios-arrow-up" size="16" color="#337DFF" />
            </div>
          </div>
        </div>
        <div class="title1" v-if="!showAttr">
          <div
            style="
              float: left;
              width: 120px;
              text-align: right;
              margin-top: 8px;
            "
          >
            任务并发数
          </div>
          <input
            type="text"
            style="
              width: 400px;
              height: 35px;
              margin-left: 20px;
              border: 1px solid #bbbbbb;
              padding: 8px;
            "
            placeholder="请输入正整数"
          />
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
const breadCrumb = () => import("./breadCrumb.vue");

export default {
  data() {
    return {
      showAttr: true,
      active: true,
    };
  },
  methods: {
    showBtn() {
      this.showAttr = !this.showAttr;
    },
  },
  components: {
    breadCrumb,
  },
};
</script>

<style scoped>
.title1 {
  margin: 20px;
  color: #333333;
}

.table_button_left {
  width: 80px;
  text-align: center;
  line-height: 35px;
  font-size: 12px;
}
.table_button_right {
  text-align: center;
  width: 80px;
  line-height: 35px;
  font-size: 12px;
}
</style>