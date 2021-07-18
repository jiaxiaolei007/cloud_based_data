<template >
  <div style="font-size: 12px">
    <Layout>
      <!-- <bread-crumb></bread-crumb>
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
          style="margin-left: -80px;margin-top: 30px"
        >
          <FormItem
            prop="taskName"
            label="任务名称"
            label-position="right"
            :label-width="200"
          >
            <div>
              <div>
                <Input
                  placeholder="请输入..."
                  style="width: 450px; height: 35px"
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
              <Input
                type="textarea"
                v-model="formValidate.taskDesc"
                placeholder="不超过250个字符"
                style="width: 450px"
                :rows="4"
                :show-word-limit=true
              ></Input></div
          ></FormItem>
          <FormItem>
            <div style="padding: 20px; margin-top: 156px">
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
      </Content> -->
      <common-component>
        <template v-slot:body>
          <steps>
            <template v-slot:content>
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
                  style="margin-left: -80px; margin-top: 30px"
                >
                  <FormItem
                    prop="taskName"
                    label="任务名称"
                    label-position="right"
                    :label-width="200"
                  >
                    <div>
                      <div>
                        <Input
                          placeholder="请输入..."
                          style="width: 450px; height: 35px"
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
                      <Input
                        type="textarea"
                        v-model="formValidate.taskDesc"
                        placeholder="不超过250个字符"
                        style="width: 450px"
                        :rows="4"
                        :show-word-limit="true"
                      ></Input></div
                  ></FormItem>
                </Form>
              </Content>
            </template>
            <template v-slot:button>
              <div style="padding: 20px; margin-top: 156px">
                <Button type="default" class="btn_margin">取消</Button>
                <Button @click="last" class="btn_margin">上一步</Button>
                <Button
                  type="primary"
                  @click="handleSubmit('formValidate')"
                  class="btn_margin"
                  >下一步</Button
                >
              </div>
            </template>
          </steps>
        </template>
      </common-component>
    </Layout>
  </div>
</template>

<script>
const commonComponent = () => import("./CommonComponent");
const steps = () => import("./Steps");

export default {
  components: {
    commonComponent,
    steps,
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
          {
            type: "string",
            pattern:
              /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5a-zA-Z0-9_\\-]{1,64}$/,
            message:
              "格式不符合要求",
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
          // this.$Message.success("成功!");
          this.$store.commit("increment");
          // console.log(this.$store.state.current);
          // sessionStorage.setItem("taskName", this.formValidate.taskName);
          // sessionStorage.setItem("taskDesc", this.formValidate.taskDesc);
          this.$store.commit('taskNameInfo',this.formValidate.taskName)
          this.$store.commit('taskDescInfo', this.formValidate.taskDesc)
          console.log(this.$store.state.taskDesc)
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