<template>
  <div>
    <Row
      style="
        background: #ffffff;
        width: 1300px;
        height: 60px;
        margin-left: -20px;
        padding-left: 30px;
        line-height: 60px;
      "
    >
      <Col span="24"> 数据同步 </Col>
    </Row>
    <div>
      <Layout>
        <Content
          :style="{
            padding: '10px 20px',
            minHeight: '280px',
            background: '#fff',
          }"
          style="margin-top: 20px"
        >
          <Tabs value="name1">
            <TabPane label="任务管理" name="name1">
              <div>
                <div
                  style="
                    margin-top: 10px;
                    padding: 10px;
                    border: 0.8px solid #e5e5e5;
                  "
                >
                  <Row>
                    <Col span="7" style="margin: 10px"
                      >任务名称
                      <input
                        type="text"
                        placeholder="请输入..."
                        style="
                          width: 230px;
                          height: 30px;
                          margin-left: 10px;
                          border: 1px solid #bbbbbb;
                          padding: 8px;
                        "
                      />
                    </Col>
                    <Col span="7" style="margin: 10px"
                      >任务ID
                      <input
                        type="text"
                        placeholder="请输入..."
                        style="
                          width: 230px;
                          height: 30px;
                          margin-left: 10px;
                          border: 1px solid #bbbbbb;
                          padding: 8px;
                        "
                      />
                    </Col>
                    <Col span="" style="margin: 10px"
                      >调度状态
                      <Select
                        v-model="model1"
                        style="width: 280px; margin-left: 20px"
                      >
                        <Option
                          v-for="item in cityList1"
                          :value="item.value"
                          :key="item.value"
                          >{{ item.label }}</Option
                        >
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col span="7" style="margin: 10px 10px 10px 24px"
                      >创建人
                      <input
                        type="text"
                        placeholder="请输入..."
                        style="
                          width: 230px;
                          height: 30px;
                          margin-left: 10px;
                          border: 1px solid #bbbbbb;
                          padding: 8px;
                        "
                      />
                    </Col>
                    <Col span="7" style="margin: 10px 10px 10px -20px"
                      >任务类型
                      <Select
                        v-model="model2"
                        style="width: 230px; margin-left: 12px"
                      >
                        <Option
                          v-for="item in cityList2"
                          :value="item.value"
                          :key="item.value"
                          >{{ item.label }}</Option
                        >
                      </Select>
                    </Col>
                    <Col style="margin: 10px 10px 10px 28px" v-if="!showAttr">
                      创建时间<DatePicker
                        type="datetimerange"
                        format="yyyy-MM-dd HH:mm"
                        placeholder="选择日期和时间"
                        style="width: 300px; margin-left: 24px"
                      ></DatePicker>
                    </Col>
                    <Col span="" style="margin: 10px 10px 10px 20px">
                      <Button type="primary" style="margin-left: 10px"
                        >查询</Button
                      >
                      <Button style="margin-left: 10px">重置</Button>
                      <span
                        style="
                          color: #337dff;
                          cursor: pointer;
                          margin-left: 10px;
                        "
                        @click="showBtn"
                        v-if="showAttr"
                        >展开
                        <Icon type="ios-arrow-down" size="16" color="#337DFF" />
                      </span>
                      <span
                        style="
                          color: #337dff;
                          cursor: pointer;
                          margin-left: 10px;
                        "
                        @click="showBtn"
                        v-if="!showAttr"
                        >收起
                        <Icon type="ios-arrow-up" size="16" color="#337DFF" />
                      </span>
                    </Col>
                  </Row>
                </div>
                <div style="margin: 20px 0px">
                  <Button
                    type="primary"
                    style="
                      margin-left: 10px;
                      height: 30px;
                      line-height: 30px;
                      width: 65px;
                      padding-left: 5px;
                    "
                    @click="establishTask"
                    ><Icon type="ios-add" size="20" />创建</Button
                  >
                  <Button
                    style="
                      margin-left: 10px;
                      height: 30px;
                      line-height: 30px;
                      width: 65px;
                      padding-left: 5px;
                    "
                    @click="removeTask2"
                    ><Icon type="ios-trash-outline" size="20" />删除</Button
                  >
                  <Button
                    style="
                      margin-left: 10px;
                      height: 30px;
                      line-height: 30px;
                      width: 65px;
                      padding-left: 5px;
                    "
                    ><Icon type="md-sync" size="20" />刷新</Button
                  >
                </div>
                <div>
                  <Row
                    style="
                      height: 45px;
                      background-color: #f4f5f7;
                      line-height: 45px;
                    "
                  >
                    <Col span="3" style="padding-left: 10px">任务名称</Col>
                    <Col span="3">任务ID</Col>
                    <Col span="4">任务类型</Col>
                    <Col span="2">调度类型</Col>
                    <Col span="2">调度状态</Col>
                    <Col span="2">创建人</Col>
                    <Col span="4">创建时间</Col>
                    <Col span="">操作</Col>
                  </Row>
                  <Row
                    style="
                      height: 45px;
                      line-height: 45px;
                      border-bottom: 1px solid #e9ebef;
                    "
                    v-for="(item, index) in data"
                    :key="index"
                  >
                    <Col span="3" style="padding-left: 10px">
                      <Checkbox v-model="item.isCheck" style="">
                        <span style="margin-left: 5px">{{
                          item.taskName
                        }}</span>
                      </Checkbox></Col
                    >
                    <Col span="3">
                      <span>{{ item.taskId }}</span>
                    </Col>
                    <Col span="4"
                      ><span>{{ item.taskType }}</span>
                    </Col>
                    <Col span="2">
                      <span>{{ item.dispatchType }}</span>
                    </Col>
                    <Col span="2">
                      <i-switch
                        size="large"
                        :value="item.dispatchState == 1"
                        @on-change="btnChange(index, item.dispatchState)"
                      >
                        <span slot="open">开启</span>
                        <span slot="close">关闭</span>
                      </i-switch>
                    </Col>
                    <Col span="2">
                      <span>{{ item.founder }}</span>
                    </Col>
                    <Col span="4">
                      <span>{{ item.createTime }}</span>
                    </Col>
                    <Col span="" style="position: relative">
                      <span style="color: #337dff; cursor: pointer"
                        >立即执行</span
                      >
                      <span
                        style="color: #337dff; cursor: pointer"
                        @click="monitor"
                      >
                        监控</span
                      >
                      <span
                        style="color: #337dff; cursor: pointer"
                        @click="operationClick(index)"
                      >
                        更多<Icon
                          type="ios-arrow-down"
                          size="16"
                          color="#337DFF"
                          v-if="!item.isShow"
                        />
                        <Icon
                          type="ios-arrow-up"
                          size="16"
                          color="#337DFF"
                          v-if="item.isShow"
                        />
                      </span>
                      <div
                        style="
                          background-color: #ffffff;
                          position: absolute;
                          top: 35px;
                          right: 5px;
                          width: 100px;
                          z-index: 999;
                          border: 1px solid #e9ebef;
                        "
                        v-if="item.isShow"
                      >
                        <div class="operation_btn">编辑</div>
                        <div class="operation_btn" @click="removeTask(index)">
                          删除
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style="height: 60px; padding: 10px">
                  <Page :total="100" show-total show-sizer show-elevator />
                </div>
              </div>
            </TabPane>
            <TabPane label="任务连接" name="name2"></TabPane>
          </Tabs>
        </Content>
      </Layout>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { request } from "../../js/request";
const dataSync = () => import("./dataSync.vue");

export default {
  data() {
    return {
      fieldName: [
        "taskName",
        "taskId",
        "taskType",
        "dispatchType",
        "dispatchState",
        "founder",
        "createTime",
      ],
      data: "",
      showAttr: true,
      isActive: true,
      cityList1: [
        {
          value: "开启同步",
          label: "开启同步",
        },
        {
          value: "停止同步",
          label: "停止同步",
        },
      ],
      model2: "",
      cityList2: [
        {
          value: "关系型数据库全量同步",
          label: "关系型数据库全量同步",
        },
        {
          value: "关系型数据库实时同步",
          label: "关系型数据库实时同步",
        },
        {
          value: "消息队列实时同步",
          label: "消息队列实时同步",
        },
      ],
      model1: "",
    };
  },
  components: {
    dataSync,
  },
  methods: {
    btnChange(index, state) {
      console.log("向后端请求状态改变");
      if (state == 1) {
        state = 0;
      } else {
        state = 1;
      }
      request({
        url: "http://127.0.0.1:5000/",
        params: {
          index: index,
          dispatchState: state,
        },
      })
        .then((res) => {
          this.dataHandle(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toggleBtn1() {
      this.isActive = true;
    },
    toggleBtn2() {
      this.isActive = false;
    },
    showBtn() {
      this.showAttr = !this.showAttr;
      // console.log(this.$refs.button.$el.style.marginLeft);
      // this.$refs.button.$el.style.marginLeft = "1000px";
    },
    establishTask() {
      this.$router.push("./taskType");
      this.$emit("establishTask");
    },
    operationClick(index) {
      this.data[index].isShow = !this.data[index].isShow;
      console.log(this.data[index].isShow);
    },
    removeTask(index) {
      this.data.splice(index, 1);
    },
    removeTask2() {
      this.data = this.data.filter((item) => item.isCheck !== true);
      console.log(this.data);
    },
    monitor() {
      this.$router.push("./dataSync");
    },
    requestData() {
      request({
        url: "http://127.0.0.1:5000/",
      })
        .then((res) => {
          this.dataHandle(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dataHandle(data) {
      console.log(data);
      data = eval(data);
      for (let i in data) {
        data[i]["isShow"] = false;
        data[i]["isCheck"] = false;
      }
      this.data=data
      console.log(this.data);
    },
  },
  created() {
    this.requestData();
    console.log("created钩子执行了");
  },
};
</script>

<style scoped>
.active {
  color: blue;
  border-bottom: 0.5px solid blue;
}
.button {
  margin: 10px 10px 10px 800px;
}
.operation_btn {
  height: 40px;
  text-indent: 10px;
  cursor: pointer;
}
.operation_btn:hover {
  background-color: #e9ebef;
}
</style>