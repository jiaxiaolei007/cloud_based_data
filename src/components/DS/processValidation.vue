<template>
  <div>
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
                <div>
                  <div class="section">
                    <h4>基础信息配置</h4>
                    <Row>
                      <Col span="12" class="segment">
                        <span style="color: #999999">任务名称</span>
                        <span
                          style="display: inline-block; margin-left: 15px"
                          >{{ taskName }}</span
                        ></Col
                      >
                    </Row>
                    <Row>
                      <Col span="12" class="segment">
                        <span style="color: #999999">任务描述</span>
                        <span
                          style="display: inline-block; margin-left: 15px"
                          >{{ taskDesc }}</span
                        ></Col
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
                        style="
                          color: #337dff;
                          cursor: pointer;
                          margin-left: 15px;
                        "
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
                <Form :label-width="80" style="margin-left: -80px">
                  <FormItem>
                    <Modal
                      title="预检查"
                      v-model="modal"
                      :styles="{ top: '200px', width: '700px' }"
                    >
                      <div style="font-size: 14px">
                        <Row
                          style="
                            height: 30px;
                            line-height: 30px;
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
                            height: 30px;
                            line-height: 30px;
                            border-bottom: 1px solid #f4f5f7;
                            background: #f4f5f7;
                            padding-left: 10px;
                          "
                        >
                          <Col span="10" style="border-right: 1px solid #ffffff"
                            >检查项</Col
                          >
                          <Col span="14" style="padding-left: 10px"
                            >检查结果</Col
                          >
                        </Row>
                        <Row
                          style="
                            height: 30px;
                            line-height: 30px;
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
                            height: 30px;
                            line-height: 30px;
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
                            height: 30px;
                            line-height: 30px;
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
                              style="
                                border-radius: 8px;
                                background: red;
                                color: white;
                              "
                            />
                            失败</Col
                          >
                        </Row>
                        <Row
                          style="
                            height: 30px;
                            line-height: 30px;
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
                              style="
                                border-radius: 8px;
                                background: gray;
                                color: white;
                              "
                            />
                            检查中</Col
                          >
                        </Row>
                      </div>
                    </Modal>
                  </FormItem>
                </Form>
              </Content></template>
          </steps>
        </template>
      </common-component>
  </div>
</template>

<script>
const commonComponent = () => import("./CommonComponent");
const steps = () => import("./Steps");

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
    commonComponent,
    steps,
  },
  methods: {
    handleSubmit(name) {
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$Message.success("Success!");
      //     this.$store.state.current++;
      //     console.log(this.$store.state.current);
      // emitter.emit("basicConfig", this.current);
      // sessionStorage.setItem("basicConfig", this.taskType);
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
    this.taskName = this.$store.state.taskName;
    this.taskDesc = this.$store.state.taskDesc;

    this.connectClassification = this.$store.state.connectClassification;
    this.connectType = this.$store.state.connectType;
    this.connectName = this.$store.state.connectName;
    this.dataBaseName = this.$store.state.dataBaseName;
    this.example = this.$store.state.example;
    this.tablePrefix = this.$store.state.tablePrefix;
    this.storageType = this.$store.state.storageType;
    this.dataCenter = this.$store.state.dataCenter;
    this.accessMark = this.$store.state.accessMark;
    this.secretKey = this.$store.state.secretKey;
    this.storagePath = this.$store.state.storagePath;

    this.dispatchmode = this.$store.state.dispatchmode;
    this.executionTime = this.$store.state.executionTime;
    this.taskNumber = this.$store.state.taskNumber;

    this.fieldList = this.$store.state.fieldList;
    this.valueList = this.$store.state.valueList;
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