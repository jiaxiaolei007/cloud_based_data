<template>
  <div style="background-color: #ffffff">
    <Layout>
      <bread-crumb></bread-crumb>
      <Content
        :style="{
          padding: '24px',
          minHeight: '280px',
          background: '#fff',
        }"
      >
        <RadioGroup v-model="database">
          <div class="ds_text">
            <Radio label="关系型数据库离线同步"></Radio>
            <br />
            <span style="display: inline-block; margin: 15px">
              将指定的关系型数据库整库或部分表一次性或周期性
              同步到目标内置存储或对象存储中，建议在业务低峰
              期执行，目前支持的数据库包括云数据库MySQL
            </span>
          </div>
          <div class="ds_text">
            <Radio label="关系型数据库实时同步"> </Radio>
            <br />
            <span style="display: inline-block; margin: 15px">
              通过binlog的方式将指定的关系型数据库整库或部分表数据实时同步到目标内置存储或对象存储中，目前支持的数据库包括云数据库MySQL
            </span>
          </div>
        </RadioGroup>
      </Content>
    </Layout>
  </div>
</template>

<script>
const breadCrumb = () => import("./breadCrumb.vue");
export default {
  data() {
    return {
      database: "",
    };
  },
  components: {
    breadCrumb,
  },
};
</script>

<style scoped>
.ds_text {
  width: 380px;
  height: 120px;
  border: 1px solid black;
  word-wrap: break-word;
  float: left;
  margin: 30px;
  padding: 10px;
}
</style>