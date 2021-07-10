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
        <div style="margin: 2px 50px; font-size: 12px">
          <div style="padding: 10px">
            <h3>数据源配置</h3>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 5px;
                "
              >
                <span style="color: red">*</span> 数据连接分类
              </div>
              <Select v-model="model1" style="width: 400px; margin-left: 20px">
                <Option
                  v-for="item in cityList1"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 5px;
                "
              >
                <span style="color: red">*</span> 连接器类型
              </div>
              <Select v-model="model2" style="width: 400px; margin-left: 20px">
                <Option
                  v-for="item in cityList2"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 5px;
                "
              >
                <span style="color: red">*</span> 数据连接名称/ID
              </div>
              <Select
                v-model="model3"
                style="width: 400px; margin-left: 20px"
                disabled
              >
                <Option
                  v-for="item in cityList3"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 5px;
                "
              >
                <span style="color: red">*</span> 数据库名称
                <Icon type="ios-help-circle-outline" size="16" />
              </div>
              <Select
                v-model="model4"
                style="width: 400px; margin-left: 20px"
                disabled
              >
                <Option
                  v-for="item in cityList4"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <Button style="margin-left: 15px">
                <Icon type="md-expand" size="12" /> 测试连接</Button
              >
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 5px;
                "
              >
                <span style="color: red">*</span> 表
              </div>
              <div style="width: 200px; height: 35px; margin-left: 140px">
                <Button class="table_button_left" disabled>全部</Button>
                <Button class="table_button_right" disabled>部分</Button>
              </div>
            </div>
          </div>
        </div>

        <div style="margin: 5px 50px; font-size: 12px">
          <div style="padding: 10px">
            <h3>数据目标配置</h3>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 8px;
                "
              >
                <span style="color: red">*</span> 实例（数据库）
              </div>
              <Select v-model="model5" style="width: 400px; margin-left: 20px">
                <Option
                  v-for="item in cityList5"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
              <Button
                style="
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  margin-left: 10px;
                "
              >
                <Icon type="md-sync" size="18" style="margin-left: -8px" />
              </Button>
              <div class="description">
                若无可选实例，请前往 <a href=""> 实例列表</a>查看
              </div>
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 8px;
                "
              >
                表名称前缀
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
                placeholder="请输入..."
              />
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 8px;
                "
              >
                <span style="color: red">*</span> 存储类型
              </div>
              <div style="width: 160px; height: 35px; margin-left: 140px">
                <Button
                  class="table_button_left"
                  :class="{ active: active }"
                  @click="btnClickLeft"
                  >内置存储</Button
                >
                <Button
                  class="table_button_right"
                  :class="{ active: !active }"
                  @click="btnClickRight"
                  >对象存储</Button
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
                  数据中心
                </div>
                <div
                  style="
                    display: inline-block;
                    margin-left: 20px;
                    height: 35px;
                    padding: 8px;
                  "
                >
                  华东-苏州
                </div>
              </div>
              <div class="title1">
                <div
                  style="
                    float: left;
                    width: 120px;
                    text-align: right;
                    margin-top: 8px;
                  "
                >
                  <span style="color: red">*</span> 访问标识（AK）
                  <Icon type="ios-help-circle-outline" size="16" />
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
                  placeholder="请输入..."
                />
              </div>
              <div class="title1">
                <div
                  style="
                    float: left;
                    width: 120px;
                    text-align: right;
                    margin-top: 8px;
                  "
                >
                  <span style="color: red">*</span> 密钥（SK）
                  <Icon type="ios-help-circle-outline" size="16" />
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
                  placeholder="请输入..."
                />
                <Button style="margin-left: 15px">
                  <Icon type="md-expand" size="12" /> 测试连接</Button
                >
              </div>
              <div class="title1">
                <div
                  style="
                    float: left;
                    width: 120px;
                    text-align: right;
                    margin-top: 8px;
                  "
                >
                  <span style="color: red">*</span> 存储路径
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
                  placeholder="请输入..."
                />
              </div>
            </div>
            <div class="title1">
              <div
                style="
                  float: left;
                  width: 120px;
                  text-align: right;
                  margin-top: 8px;
                "
              >
                <span style="color: red">*</span> 分区
                <Icon type="ios-help-circle-outline" size="16" />
              </div>
              <div style="margin-left: 140px">
                <Row
                  style="
                    background: #f4f5f7;
                    height: 40px;
                    width: 800px;
                    text-align: left;
                    line-height: 40px;
                    padding: 0 10px;
                  "
                  v-if="!active"
                >
                  <Col span="9">分区字段</Col>
                  <Col span="9">值</Col>
                  <Col span="6">操作</Col>
                </Row>
                <div v-for="(dom, index) in infoList" :key="dom">
                  <partition-info @deleteInfo="delInfo(index)"></partition-info>
                </div>
                <Button
                  class="table_button_left"
                  style="width: 60px"
                  @click="addInfo"
                  >添加</Button
                >
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
const partitionInfo = () => import("./partitionInfo.vue");
const breadCrumb = () => import("./breadCrumb.vue");
export default {
  data() {
    return {
      infoList: [],
      active: true,
      cityList1: [
        {
          value: "云数据库",
          label: "云数据库",
        },
        {
          value: "云队列消息",
          label: "云队列消息",
        },
      ],
      model1: "",
      cityList2: [
        {
          value: "MySql",
          label: "MySql",
        },
      ],
      model2: "",
      cityList2: [
        {
          value: "MySql",
          label: "MySql",
        },
      ],
      model3: "",
      cityList3: [
        {
          value: "MySql",
          label: "MySql",
        },
      ],
      model4: "",
      cityList4: [
        {
          value: "选项名称1",
          label: "选项名称1",
        },
        {
          value: "选项名称2",
          label: "选项名称3",
        },
        {
          value: "选项名称3",
          label: "选项名称3",
        },
      ],
      model5: "",
      cityList5: [
        {
          value: "MySql",
          label: "MySql",
        },
      ],
    };
  },
  components: {
    partitionInfo,
    breadCrumb,
  },
  methods: {
    btnClickRight() {
      this.active = false;
    },
    btnClickLeft() {
      this.active = true;
    },
    addInfo() {
      this.infoList.push(<partition-info></partition-info>);
    },
    delInfo(index) {
      this.infoList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.title1 {
  margin: 20px;
  color: #333333;
}
.description {
  margin-left: 75px;
  width: 500px;
  color: #bbbbbb;
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
.active {
  background: #e1ecff;
}
.description {
  margin: 10px 0 -6px 140px;
  width: 500px;
  padding-bottom: -50px;
  color: #bbbbbb;
}
</style>