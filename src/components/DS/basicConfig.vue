<template >
  <div style="font-size: 12px">
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
            prop="taskName"
            label="任务名称"
            label-position="right"
            :label-width="200"
          >
            <div>
              <div>
                <input
                  type="text"
                  placeholder="请输入..."
                  style="
                    width: 450px;
                    height: 30px;
                    padding: 10px;
                    border: 1px solid #bbbbbb;
                  "
                  class="myinput"
                  v-model="formValidate.taskName"
                />
                <div class="description">
                  仅允许中文、字母开头，长度限制1～64个字符，可包含中文、字母、数字、中划线、下划线
                </div>
              </div>
            </div></FormItem
          >
          <FormItem
            prop="taskDesc"
            label="任务描述"
            label-position="right"
            :label-width="200"
          >
            <div>
              <textarea
                v-model="formValidate.taskDesc"
                placeholder="不超过250个字符"
                style="
                  width: 450px;
                  height: 120px;
                  resize: none;
                  padding: 10px;
                  border: 1px solid #bbbbbb;
                "
              ></textarea></div
          ></FormItem>
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
  components: {
    breadCrumb,
  },
  data() {
    return {
      formValidate: {
        taskName: "",
        taskDesc: "",
      },
      ruleValidate: {
        taskName: [
          {
            required: true,
            message: "请输入任务名称",
            trigger: "blur",
          },
        ],
        taskDesc: [
          {
            required: false,
            message: "请对任务进行描述",
            trigger: "blur",
          },
          {
            type: "string",
            max: 250,
            message: "介绍不超过250个字",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功!");
          this.$store.state.current++;
          console.log(this.$store.state.current);
          sessionStorage.setItem("taskName", this.formValidate.taskName);
          sessionStorage.setItem("taskDesc", this.formValidate.taskDesc);
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
};
</script>

<style scoped>
.description {
  color: #bbbbbb;
}
.btn_margin {
  margin-left: 10px;
}
/*提示（message）的位置 */
.ivu-form-item-error-tip {
  left: 95px;
}
</style>