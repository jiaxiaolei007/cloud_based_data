<template>
  <div>
    <bread-crumb></bread-crumb>
    <Layout>
      <Content
        :style="{
          padding: '24px',
          minHeight: '280px',
          background: '#fff',
        }"
      >
        <div>
          <div class="section">
            <h4>基础信息配置</h4>
            <Row>
              <Col span="12" class="segment">
                <span style="color: #999999">任务名称</span>
                <span style="display: inline-block; margin-left: 15px">{{
                  taskName
                }}</span></Col
              >
            </Row>
            <Row>
              <Col span="12" class="segment">
                <span style="color: #999999">任务描述</span>
                <span style="display: inline-block; margin-left: 15px">{{
                  taskDesc
                }}</span></Col
              >
            </Row>
          </div>
        </div>
        <div class="section" style="border: 0px">
          <h4>数据源配置</h4>
          <Row>
            <Col span="8" class="segment">
              <span style="color: #999999">数据连接分类</span>
              <span style="display: inline-block; margin-left: 15px">{{
                connectClassification
              }}</span></Col
            >
            <Col span="8" class="segment">
              <span style="color: #999999">连接器类型</span>
              <span style="display: inline-block; margin-left: 15px">{{
                connectType
              }}</span></Col
            >
            <Col span="" class="segment">
              <span style="color: #999999">数据连接名称</span>
              <span style="display: inline-block; margin-left: 15px">{{
                connectName
              }}</span></Col
            >
          </Row>
          <Row>
            <Col span="12" class="segment">
              <span style="color: #999999">数据库名称</span>
              <span style="display: inline-block; margin-left: 15px">{{
                dataBaseName
              }}</span></Col
            >
          </Row>
        </div>
        <div class="section" style="height: 160px">
          <h4>数据目标配置</h4>
          <Row>
            <Col span="8" class="segment">
              <span style="color: #999999">实例（数据库） </span>
              <span style="display: inline-block; margin-left: 15px">{{
                example
              }}</span></Col
            >
            <Col span="8" class="segment">
              <span style="color: #999999">表名称前缀 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                tablePrefix
              }}</span></Col
            >
            <Col span="" class="segment">
              <span style="color: #999999">存储类型 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                storageType
              }}</span></Col
            >
          </Row>
          <Row>
            <Col span="8" class="segment">
              <span style="color: #999999">数据中心 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                dataCenter
              }}</span></Col
            >
            <Col span="8" class="segment">
              <span style="color: #999999">访问标识(AK) </span>
              <span style="display: inline-block; margin-left: 15px">{{
                accessMark
              }}</span></Col
            >
            <Col span="" class="segment">
              <span style="color: #999999">密钥（SK） </span>
              <span style="display: inline-block; margin-left: 15px">{{
                secretKey
              }}</span></Col
            >
          </Row>
          <Row>
            <Col span="" class="segment">
              <span style="color: #999999">存储路径 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                storagePath
              }}</span></Col
            >
          </Row>
          <Row>
            <Col span="" class="segment">
              <span style="color: #999999">分区 </span>
              <span
                style="color: #337dff; cursor: pointer; margin-left: 15px"
                @click="modal1 = true"
                >查看分区
              </span>
              <Modal
                title="查看分区"
                v-model="modal1"
                :styles="{ top: '300px' }"
              >
                <div>
                  <Row
                    style="
                      height: 40px;
                      width: 350px;
                      line-height: 40px;
                      margin-left: 60px;
                    "
                  >
                    <Col span="4" style="">分区</Col>
                    <Col
                      span="10"
                      style="
                        border-right: 1px solid #ffffff;
                        background: #f4f5f7;
                        padding-left: 10px;
                      "
                      >分区字段</Col
                    >
                    <Col
                      span="9"
                      style="background: #f4f5f7; padding-left: 10px"
                      >值</Col
                    >
                  </Row>
                  <Row
                    class="row"
                    v-for="(item, index) in fieldList"
                    :key="item"
                  >
                    <Col span="12" style=" ;">{{ item }}</Col>
                    <Col span="" style="margin-left: 20px">{{
                      valueList[index]
                    }}</Col>
                  </Row>
                </div>
              </Modal></Col
            >
          </Row>
        </div>
        <div class="section" style="height: 130px">
          <h4>任务配置</h4>
          <Row>
            <Col span="8" class="segment">
              <span style="color: #999999">集成对象 </span>
              <span style="display: inline-block; margin-left: 15px"
                >单库</span
              ></Col
            >
            <Col span="8" class="segment">
              <span style="color: #999999">调度方式 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                dispatchmode
              }}</span></Col
            >
            <Col span="" class="segment">
              <span style="color: #999999">开始执行时间 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                executionTime
              }}</span></Col
            >
          </Row>
          <Row>
            <Col span="" class="segment">
              <span style="color: #999999">任务并发数 </span>
              <span style="display: inline-block; margin-left: 15px">{{
                taskNumber
              }}</span></Col
            >
          </Row>
        </div>
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80"
          style="margin-left: -80px"
        >
          <FormItem>
            <div style="padding: 20px">
              <Button type="default" @click="cancel" class="btn_margin"
                >取消</Button
              >
              <Button @click="last" class="btn_margin">上一步</Button>
              <Button type="default" @click="modal = true" class="btn_margin"
                >预检查
              </Button>
              <Button type="primary" @click="handleSubmit" class="btn_margin"
                >完成</Button
              >
            </div>
            <Modal
              title="预检查"
              v-model="modal"
              :styles="{ top: '200px', width: '900px' }"
            >
              <div style="font-size: 18px">
                <Row
                  style="
                    padding: 3px;
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid #ffdd81;
                    margin-bottom: 10px;
                    padding-left: 10px;
                    background-color: #fef9ed;
                  "
                >
                  <Col span="24" style="">
                    <span class="icon_alert">!</span>
                    若某检查项检查结果为“失败”，该任务仍可保存，但可能无法顺利执行，请手动干预处理。</Col
                  >
                </Row>
                <Row
                  style="
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #f4f5f7;
                    background: #f4f5f7;
                    padding-left: 10px;
                  "
                >
                  <Col span="10" style="border-right: 1px solid #ffffff"
                    >检查项</Col
                  >
                  <Col span="14" style="padding-left: 10px">检查结果</Col>
                </Row>
                <Row
                  style="
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #f4f5f7;
                    padding-left: 10px;
                  "
                >
                  <Col span="10" style="border-right: 1px solid #ffffff"
                    >数据源连通性检查</Col
                  >
                  <Col span="14" style="padding-left: 10px">
                    <Icon
                      type="ios-checkmark"
                      size="16"
                      style="
                        border-radius: 8px;
                        background: green;
                        color: white;
                      "
                    />
                    成功</Col
                  >
                </Row>
                <Row
                  style="
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #f4f5f7;
                    padding-left: 10px;
                  "
                >
                  <Col span="10" style="border-right: 1px solid #ffffff"
                    >数据目标连通性检查</Col
                  >
                  <Col span="14" style="padding-left: 10px">
                    <Icon
                      type="ios-checkmark"
                      size="16"
                      style="
                        border-radius: 8px;
                        background: green;
                        color: white;
                      "
                    />
                    成功</Col
                  >
                </Row>
                <Row
                  style="
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #f4f5f7;
                    padding-left: 10px;
                  "
                >
                  <Col span="10" style="border-right: 1px solid #ffffff"
                    >数据源读取权限检查</Col
                  >
                  <Col span="14" style="padding-left: 10px">
                    <Icon
                      type="ios-checkmark"
                      size="16"
                      style="border-radius: 8px; background: red; color: white"
                    />
                    失败</Col
                  >
                </Row>
                <Row
                  style="
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #f4f5f7;
                    padding-left: 10px;
                  "
                >
                  <Col span="10" style="border-right: 1px solid #ffffff"
                    >数据目标读写权限检查</Col
                  >
                  <Col span="14" style="padding-left: 10px">
                    <Icon
                      type="md-eye"
                      size="16"
                      style="border-radius: 8px; background: gray; color: white"
                    />
                    检查中</Col
                  >
                </Row>
              </div>
            </Modal>
          </FormItem>
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
      modal: false,
      modal1: false,
      taskType: "",
      taskName: "",
      connectClassification: "",
      connectType: "",
      connectName: "",
      dataBaseName: "",
      example: "",
      tablePrefix: "",
      storageType: "",
      dataCenter: "",
      accessMark: "",
      secretKey: "",
      storagePath: "",
      dispatchmode: "",
      executionTime: "",
      taskNumber: "",
      fieldList: [],
      valueList: [],
    };
  },
  components: {
    breadCrumb,
  },
  methods: {
    handleSubmit(name) {
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$Message.success("Success!");
      //     this.$store.state.current++;
      //     console.log(this.$store.state.current);
      //     // emitter.emit("basicConfig", this.current);
      //     // sessionStorage.setItem("basicConfig", this.taskType);
      //   } else {
      //     this.$Message.error("Fail!");
      //   }
      // });
      this.$store.state.current = 5;
    },
    last() {
      this.$store.state.current--;
      console.log(this.$store.state.current);
    },
  },
  created() {
    // emitter.on("taskType",(info)=>{
    // this.tasktype=info;
    //   console.log(info)
    // })
    // this.taskType = sessionStorage.getItem("taskType");
    this.taskName = sessionStorage.getItem("taskName");
    this.taskDesc = sessionStorage.getItem("taskDesc");

    this.connectClassification = sessionStorage.getItem(
      "connectClassification"
    );
    this.connectType = sessionStorage.getItem("connectType");
    this.connectName = sessionStorage.getItem("connectName");
    this.dataBaseName = sessionStorage.getItem("dataBaseName");
    this.example = sessionStorage.getItem("example");
    this.tablePrefix = sessionStorage.getItem("tablePrefix");
    this.storageType = sessionStorage.getItem("storageType");
    this.dataCenter = sessionStorage.getItem("dataCenter");
    this.accessMark = sessionStorage.getItem("accessMark");
    this.secretKey = sessionStorage.getItem("secretKey");
    this.storagePath = sessionStorage.getItem("storagePath");

    this.dispatchmode = sessionStorage.getItem("dispatchmode");
    this.executionTime = sessionStorage.getItem("executionTime");
    this.taskNumber = sessionStorage.getItem("taskNumber");

    this.fieldList = JSON.parse(sessionStorage.getItem("fieldList"));
    this.valueList = JSON.parse(sessionStorage.getItem("valueList"));
    console.log(this.fieldList);
    console.log('..');
  },
};
</script>

<style scoped>
.section {
  height: 100px;
  border-bottom: 1px solid #999999;
  margin-top: 6px;
}
.item {
  float: left;
  width: 300px;
}
.segment {
  margin: 10px 0 0 40px;
}
.row {
  height: 40px;
  width: 270px;
  line-height: 40px;
  padding: 0 10px;
  margin-left: 122px;
  border-bottom: 1px solid rgba(233, 235, 239, 1);
  background-color: rgba(255, 255, 255, 0);
  font-size: 10px;
  cursor: pointer;
}
.row:hover {
  background-color: #f5f9ff;
}
.btn_margin {
  margin-left: 10px;
}
</style>