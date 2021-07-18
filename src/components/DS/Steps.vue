<template>
  <div>
    <Steps :current="currentObj.current" style="height: 80px; padding: 25px">
      <Step title="任务类型"></Step>
      <Step title="基本信息配置"></Step>
      <Step title="源和目标配置"></Step>
      <Step title="任务配置"></Step>
      <Step title="流程确认"></Step>
    </Steps>
    <slot name="content"></slot>
    <slot name="button"></slot>
    <!-- <div style="padding: 20px; margin-top: 210px" v-if="isShow == 0">
      <Button type="default" class="btn_margin">取消</Button>
      <Button
        type="primary"
        @click="handleSubmit('formValidate')"
        class="btn_margin"
        >下一步</Button
      >
    </div>
    <div style="padding: 20px" v-else-if="isShow == 4">
      <Button type="default" class="btn_margin">取消</Button>
      <Button @click="last" class="btn_margin">上一步</Button>
      <Button type="default" @click="modal = true" class="btn_margin"
        >预检查
      </Button>
      <Button type="primary" @click="handleSubmit" class="btn_margin"
        >完成</Button
      >
    </div>
    <div style="padding: 20px; margin-top: 156px" v-else>
      <Button type="default" class="btn_margin">取消</Button>
      <Button @click="last" class="btn_margin">上一步</Button>
      <Button
        type="primary"
        @click="handleSubmit('formValidate')"
        class="btn_margin"
        >下一步</Button
      >
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: "",
    };
  },
  inject: {
    currentObj: { default: () => {} },
  },
  created() {
    this.firstShow = this.$store.state.current;
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success("成功!");
          this.$store.commit("increment");
          // console.log(this.$store.state.current);
          // sessionStorage.setItem("taskName", this.formValidate.taskName);
          // sessionStorage.setItem("taskDesc", this.formValidate.taskDesc);
          this.$store.commit("taskNameInfo", this.formValidate.taskName);
          this.$store.commit("taskDescInfo", this.formValidate.taskDesc);
          console.log(this.$store.state.taskDesc);
        } else {
          // this.$Message.error("失败!");
        }
      });
    },
    last() {
      this.$store.commit("decrement");
      // console.log(this.$store.state.current);
    },
  },
};
</script>

<style scoped>
</style>