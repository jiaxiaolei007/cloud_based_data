<template >
  <div >
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
          <FormItem prop="dataBaseType" label="">
            <RadioGroup v-model="formValidate.dataBaseType">
              <div class="ds_text">
                <div >
                  <Radio label="关系型数据库离线同步"></Radio>
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
              <div class="ds_text">
                <Radio label="关系型数据库实时同步"> </Radio>
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
          <FormItem>
            <div style="padding: 20px; margin: 236px 0px -21px -20px">
              <Button type="default" class="btn_margin">取消</Button>
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
import emitter from "../../js/eventbus";

export default {
  data() {
    return {
      item:10,
      index:10,
      current: 0,
      taskType:'关系型数据库实时同步',
      formValidate: {
        dataBaseType: "",
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
    breadCrumb,
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("成功!");
          this.$store.state.current=1;
        } else {
          this.$Message.error("失败!");
        }
      });
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
  padding: 5px;
}
.btn_margin {
  margin-left: 10px;
}
</style>