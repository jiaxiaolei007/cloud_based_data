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
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80"
          style="margin-left: -80px"
        >
          <FormItem
            prop="mode"
            label="调度方式"
            label-position="right"
            :label-width="200"
          >
            <div>
              <div style="width: 200px; height: 35px; margin-left: 20px">
                <RadioGroup v-model="formValidate.mode" type="button">
                  <Radio class="radio_button" label="单次">单次</Radio>
                  <Radio class="radio_button" label="周期">周期</Radio>
                </RadioGroup>
              </div>
            </div>
          </FormItem>
          <FormItem
            prop="date"
            label="开始执行时间"
            label-position="right"
            :label-width="200"
          >
            <DatePicker
              type="datetime"
              placeholder="选择时间和日期"
              v-model="formValidate.date"
              style="width: 300px; margin: 2px 0 0 20px"
            ></DatePicker>
          </FormItem>
          <div style="height: 35px">
            <div
              style="
                float: left;
                width: 120px;
                text-align: right;
                margin-left: 86px;
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
          <FormItem
            prop="number"
            label="任务并发数"
            label-position="right"
            :label-width="200"
            v-if="!showAttr"
          >
            <div>
              <input
                type="text"
                style="
                  width: 400px;
                  height: 35px;
                  margin-left: 20px;
                  border: 1px solid #bbbbbb;
                  padding: 8px;
                "
                v-model="formValidate.number"
                placeholder="请输入正整数"
              />
            </div>
          </FormItem>
          <FormItem>
            <div style="padding: 20px; margin: 236px 0px -21px -20px">
              <Button type="default" class="btn_margin">取消</Button>
              <Button @click="last" class="btn_margin">上一步</Button>
              <Button
                type="primary"
                @click="handleSubmit('formValidate')"
                class="btn_margin"
                >下一步</Button
              >
            </div></FormItem
          >
        </Form>
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
      formValidate: {
        mode: "",
        date: "",
        number: "",
      },
      ruleValidate: {
        mode: [
          {
            required: true,
            message: "请选择调度方式",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "请选择开始时间",
            trigger: "change",
          },
        ],
        number: [
          {
            required: false,
            message: "",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    showBtn() {
      this.showAttr = !this.showAttr;
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功!");
          this.$store.state.current++;
          console.log(this.$store.state.current);
          // emitter.emit("basicConfig", this.current);
          sessionStorage.setItem("dispatchmode", this.formValidate.mode);
          sessionStorage.setItem("executionTime", this.formValidate.date);
          sessionStorage.setItem("taskNumber", this.formValidate.number);
        } else {
          this.$Message.error("失败!");
        }
      });
    },
    last() {
      this.$store.state.current--;
      console.log(this.$store.state.current);
    },
  },
  components: {
    breadCrumb,
  },
};
</script>

<style scoped>
.radio_button {
  width: 80px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  font-size: 13px;
}
</style>