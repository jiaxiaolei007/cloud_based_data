<template>
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
        <div style="padding: 10px">
          <div>
            <div class="title1"><span style="color: red">*</span> 任务名称</div>
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
            />
            <div class="description">
              仅允许中文、字母开头，长度限制1～64个字符，可包含中文、字母、数字、中划线、下划线
            </div>
          </div>
        </div>
        <div style="padding: 10px">
          <div class="title2">任务描述</div>
          <textarea
            placeholder="不超过250个字符"
            style="
              width: 450px;
              height: 120px;
              resize: none;
              padding: 10px;
              border: 1px solid #bbbbbb;
            "
          ></textarea>
        </div>
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
};
</script>

<style scoped>
.title1 {
  float: left;
  margin: 8px 20px 0 0;
  color: #333333;
}
.title2 {
  float: left;
  margin: 3px 20px 0 7px;
  color: #333333;
}
.description {
  margin-left: 75px;
  color: #bbbbbb;
}
</style>