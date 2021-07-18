<template >
  <div>
    <Layout>
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
                  style="margin-left: -80px"
                >
                  <FormItem prop="dataBaseType">
                    <RadioGroup v-model="formValidate.dataBaseType">
                      <div
                        class="ds_text"
                        :class="{
                          ds_text_toBeBlue:
                            formValidate.dataBaseType ===
                            '关系型数据库离线同步',
                        }"
                        @click="divClick1"
                      >
                        <div>
                          <Radio
                            :class="{
                              toBeBlue:
                                formValidate.dataBaseType ===
                                '关系型数据库离线同步',
                            }"
                            label="关系型数据库离线同步"
                            >关系型数据库离线同步</Radio
                          >
                        </div>
                        <span
                          style="
                            display: inline-block;
                            margin: 0 10px 10px 20px;
                            color: #999999;
                            line-height: 20px;
                          "
                        >
                          将指定的关系型数据库整库或部分表一次性或周期性同步到目标内置存储或对象存储中，建议在业务低峰
                          期执行，目前支持的数据库包括云数据库MySQL
                        </span>
                      </div>
                      <div
                        class="ds_text"
                        :class="{
                          ds_text_toBeBlue:
                            formValidate.dataBaseType ===
                            '关系型数据库实时同步',
                        }"
                        @click="divClick2"
                      >
                        <Radio
                          label="关系型数据库实时同步"
                          :class="{
                            toBeBlue:
                              formValidate.dataBaseType ===
                              '关系型数据库实时同步',
                          }"
                          >关系型数据库实时同步</Radio
                        >
                        <span
                          style="
                            display: inline-block;
                            margin: 0 10px 10px 20px;
                            color: #999999;
                            line-height: 20px;
                          "
                        >
                          通过binlog的方式将指定的关系型数据库整库或部分表数据实时同步到目标内置存储或对象存储中，目前支持的数据库包括云数据库MySQL
                        </span>
                      </div>
                    </RadioGroup>
                  </FormItem>
                </Form>
              </Content></template
            >
            <template v-slot:button>
                <div style="padding: 20px; margin-top: 210px">
                  <Button type="default" class="btn_margin">取消</Button>
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

const commonComponent = () => import('./CommonComponent');
const steps = () => import("./Steps");

export default {
  data() {
    return {
      current: 0,
      formValidate: {
        dataBaseType: "关系型数据库离线同步",
      },
      ruleValidate: {
        dataBaseType: [
          {
            required: true,
            message: "请选择数据库类型",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {
    // breadCrumb,
    commonComponent,
    steps,
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success("成功!");
          this.$store.commit('increment');
          // console.log(this.$store.state.current)
        } else {
          // this.$Message.error("失败!");
        }
      });
    },
    divClick1() {
      this.formValidate.dataBaseType = "关系型数据库离线同步";
    },
    divClick2() {
      this.formValidate.dataBaseType = "关系型数据库实时同步";
    },
  },
};
</script>

<style scoped>
.ds_text {
  width: 400px;
  height: 120px;
  border: 1px solid black;
  word-wrap: break-word;
  float: left;
  margin: 20px;
  padding: 8px 0 0 15px;
}
.btn_margin {
  margin-left: 10px;
}
.ds_text:hover {
  border: 1px solid #337dff;
  cursor: pointer;
}
.ds_text_toBeBlue {
  border: 1px solid #337dff;
}
.toBeBlue {
  color: #337dff;
}
</style>