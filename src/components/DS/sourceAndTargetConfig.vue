<template>
  <div>
    <common-component>
      <template v-slot:body>
        <steps>
          <template v-slot:content
            ><Content
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
                style="margin-left: -60px"
              >
                <div style="margin: 2px 50px; font-size: 12px">
                  <div style="padding: 10px">
                    <h3 style="margin: 0 0 20px 50px">数据源配置</h3>
                    <FormItem
                      prop="classification"
                      label="数据连接分类"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <Select
                          v-model="formValidate.classification"
                          placeholder="选择数据连接分类"
                          style="width: 400px;"
                        >
                          <Option
                            v-for="item in classificationList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                      </div>
                    </FormItem>
                    <FormItem
                      label="连接器类型"
                      prop="type"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <Select
                          v-model="formValidate.type"
                          style="width: 400px;"
                        >
                          <Option
                            v-for="item in typeList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                      </div>
                    </FormItem>
                    <FormItem
                      prop="connectName"
                      label="数据连接名称/ID"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <Select
                          v-model="formValidate.connectName"
                          style="width: 400px;"
                        >
                          <Option
                            v-for="item in connectNameList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                      </div>
                    </FormItem>
                    <FormItem
                      prop="dbName"
                      label="数据库名称　"
                      :label-width="200"
                    >
                      <div>
                        <Icon
                          type="ios-help-circle-outline"
                          size="15"
                          style="margin-left: -22px"
                        />
                        <Select
                          v-model="formValidate.dbName"
                          style="width: 400px;margin-left:9px"
                        >
                          <Option
                            v-for="item in dbNameList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                        <Button style="margin-left: 15px">
                          <Icon type="md-expand" size="12" /> 测试连接</Button
                        >
                      </div>
                    </FormItem>
                    <FormItem
                      prop="table"
                      label="表"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <div
                          style="margin-left: 3px"
                        >
                          <RadioGroup
                            v-model="formValidate.table"
                            type="button"
                          >
                            <div
                              style="display: inline-block"
                              @click="tableClickLeft"
                            >
                              <Radio
                                class="radio_button"
                                label="全部"
                                :style="{ backgroundColor: tableLeftButtonColor }"
                                >全部</Radio
                              >
                            </div>
                            <div
                              style="display: inline-block"
                              @click="tableClickRight"
                            >
                              <Radio
                                class="radio_button"
                                label="部分"
                                :style="{ backgroundColor: tableRightButtonColor }"
                                >部分</Radio
                              >
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </FormItem>
                  </div>
                </div>
                <div style="margin: 2px 50px; font-size: 12px">
                  <div style="padding: 10px">
                    <h3 style="margin: 0 0 20px 50px">数据目标配置</h3>
                    <FormItem
                      prop="example"
                      label="实例（数据库）"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <Select
                          v-model="formValidate.example"
                          style="width: 400px;"
                        >
                          <Option
                            v-for="item in exampleList"
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
                          <Icon
                            type="md-sync"
                            size="18"
                            style="margin-left: -8px"
                          />
                        </Button>
                        <div class="description">
                          若无可选实例，请前往 <a href=""> 实例列表</a>查看
                        </div>
                      </div>
                    </FormItem>
                    <FormItem
                      prop="tablePrefix"
                      label="表名称前缀"
                      label-position="right"
                      :label-width="200"
                    >
                      <div style="">
                        <Input
                          type="text"
                          style="width: 400px; height: 35px;"
                          v-model="formValidate.tablePrefix"
                          placeholder="请输入..."
                        />
                      </div>
                    </FormItem>
                    <FormItem
                      prop="storageType"
                      label="存储类型"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <div
                          style="width: 200px; height: 35px;"
                        >
                          <RadioGroup
                            v-model="formValidate.storageType"
                            type="button"
                          >
                            <div
                              @click="stoClickLeft"
                              style="display: inline-block"
                            >
                              <Radio
                                class="radio_button"
                                label="内置存储"
                                :style="{ backgroundColor: stoLeftButtonColor }"
                              >
                              </Radio>
                            </div>
                            <div
                              @click="stoClickRight"
                              style="display: inline-block"
                            >
                              <Radio
                                class="radio_button"
                                :style="{ backgroundColor: stoRightButtonColor }"
                                label="对象存储"
                              >
                              </Radio>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </FormItem>
                    <div v-if="!active">
                      <FormItem
                        label="数据中心"
                        label-position="right"
                        :label-width="200"
                        prop="dataCenter"
                      >
                        <Select
                          v-model="formValidate.dataCenter"
                          style="width: 400px;"
                        >
                          <Option
                            v-for="item in positionList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                      </FormItem>

                      <FormItem
                        prop="mark"
                        label="访问标识（AK）　"
                        label-position="right"
                        :label-width="200"
                      >
                        <div>
                          <Icon
                            type="ios-help-circle-outline"
                            size="15"
                            style="margin-left: -28px"
                          />
                          <Input
                            type="text"
                            style="
                              width: 400px;
                              height: 35px;
                              margin-left:14px
                            "
                            v-model="formValidate.mark"
                            placeholder="请输入..."
                          />
                        </div>
                      </FormItem>
                      <FormItem
                        prop="secretKey"
                        label="密钥（SK）　"
                        label-position="right"
                        :label-width="200"
                      >
                        <div>
                          <Icon
                            type="ios-help-circle-outline"
                            size="15"
                            style="margin-left: -28px"
                          />
                          <Input
                            type="text"
                            style="
                              width: 400px;
                              height: 35px;
                              margin-left:14px
                            "
                            v-model="formValidate.secretKey"
                            placeholder="请输入..."
                          />
                          <Button style="margin-left: 15px">
                            <Icon type="md-expand" size="12" /> 测试连接</Button
                          >
                        </div>
                      </FormItem>
                      <FormItem
                        prop="storagePath"
                        label="存储路径"
                        label-position="right"
                        :label-width="200"
                      >
                        <div>
                          <Input
                            type="text"
                            style="
                              width: 400px;
                              height: 35px;
                            "
                            v-model="formValidate.storagePath"
                            placeholder="请输入..."
                          />
                        </div>
                      </FormItem>
                    </div>
                    <FormItem
                      prop="partition"
                      label="分区　"
                      label-position="right"
                      :label-width="200"
                      v-if="active"
                    >
                      <div>
                        <Icon
                          type="ios-help-circle-outline"
                          size="14"
                          style="margin-left: -22px"
                        />
                        <div>
                          <Row
                            style="
                              background: #f4f5f7;
                              height: 40px;
                              width: 800px;
                              text-align: left;
                              line-height: 40px;
                              padding: 0 10px;
                              margin-top: -30px;
                            "
                            v-if="true"
                          >
                            <Col span="9">分区字段</Col>
                            <Col span="9">值</Col>
                            <Col span="6">操作</Col>
                          </Row>
                          <div v-for="(dom, index) in infoList" :key="index">
                            <partition-info
                              @deleteInfo="delInfo(index)"
                            ></partition-info>
                          </div>
                          <Button
                            class="table_button_left"
                            style="width: 60px"
                            @click="addInfo"
                            >添加</Button
                          >
                        </div>
                      </div>
                    </FormItem>
                  </div>
                </div>
              </Form>
            </Content>
          </template>
          <template v-slot:button>
            <div style="padding: 20px">
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
  </div>
</template>

<script>
const partitionInfo = () => import("./PartitionInfo");
const breadCrumb = () => import("./BreadCrumb");
const commonComponent = () => import("./CommonComponent");
const steps = () => import("./Steps");

export default {
  data() {
    return {
      tableLeftButtonColor: "#e1ecff",
      tableRightButtonColor: "#ffffff",
      stoLeftButtonColor: "#e1ecff",
      stoRightButtonColor: "#ffffff",
      infoList: [],
      active: true,
      formValidate: {
        classification: "",
        type: "",
        connectName: "",
        dbName: "",
        table: "全部",
        example: "",
        tablePrefix: "",
        storageType: "内置存储",
        dataCenter: "",
        partition: "",
        mark: "",
        secretKey: "",
        storagePath: "",
        partition: "",
      },
      ruleValidate: {
        classification: [
          { required: true, message: "请选择连接分类", trigger: "change" },
        ],
        type: [
          { required: true, message: "请选择连接器类型", trigger: "change" },
        ],
        connectName: [
          { required: true, message: "请选择连接器名称/ID", trigger: "change" },
        ],
        dbName: [
          { required: true, message: "请选择数据库名称", trigger: "change" },
        ],
        table: [
          {
            required: true,
            message: "请选择表",
            trigger: "change",
          },
        ],
        example: [{ required: true, message: "请选择实例", trigger: "change" }],
        tablePrefix: [
          {
            required: false,
            message: "表前缀不能为空",
            trigger: "blur",
          },
        ],
        storageType: [
          {
            required: true,
            message: "请选择存储类型",
            trigger: "change",
          },
        ],
        mark: [
          {
            required: true,
            message: "标识不能为空",
            trigger: "blur",
          },
        ],
        secretKey: [
          {
            required: true,
            message: "密钥不能为空",
            trigger: "blur",
          },
        ],
        storagePath: [
          {
            required: true,
            message: "请选择存储路径",
            trigger: "change",
          },
        ],
        partition: [
          {
            required: false,
            message: "",
            trigger: "change",
          },
        ],
      },
      classificationList: [
        {
          value: "云数据库",
          label: "云数据库",
        },
        {
          value: "云消息队列",
          label: "云消息队列",
        },
      ],
      typeList: [
        {
          value: "连接器类型1",
          label: "连接器类型1",
        },
        {
          value: "连接器类型2",
          label: "连接器类型2",
        },
        {
          value: "连接器类型3",
          label: "连接器类型3",
        },
      ],
      connectNameList: [
        {
          value: "数据连接名称1",
          label: "数据连接名称1",
        },
        {
          value: "数据连接名称2",
          label: "数据连接名称2",
        },
        {
          value: "数据连接名称3",
          label: "数据连接名称3",
        },
      ],
      dbNameList: [
        {
          value: "数据库名称1",
          label: "数据库名称1",
        },
        {
          value: "数据库名称2",
          label: "数据库名称2",
        },
        {
          value: "数据库名称3",
          label: "数据库名称3",
        },
      ],
      exampleList: [
        {
          value: "一个选项名称1",
          label: "一个选项名称1",
        },
        {
          value: "一个选项名称2",
          label: "一个选项名称2",
        },
        {
          value: "一个选项名称3",
          label: "一个选项名称3",
        },
      ],
      positionList: [
        {
          value: "华东-苏州",
          label: "华东-苏州",
        },
      ],
    };
  },
  components: {
    partitionInfo,
    commonComponent,
    steps,
    breadCrumb,
  },
  methods: {
    tableClickRight() {
      this.tableRightButtonColor = "#e1ecff";
      this.tableLeftButtonColor = "#ffffff";
    },
    tableClickLeft() {
      this.tableLeftButtonColor = "#e1ecff";
      this.tableRightButtonColor = "#ffffff";
    },
    stoClickRight() {
      this.active = false;
      this.stoRightButtonColor = "#e1ecff";
      this.stoLeftButtonColor = "#ffffff";
    },
    stoClickLeft() {
      this.active = true;
      this.stoLeftButtonColor = "#e1ecff";
      this.stoRightButtonColor = "#ffffff";
    },
    addInfo() {
      this.infoList.push(<partition-info></partition-info>);
    },
    delInfo(index) {
      this.infoList.splice(index, 1);
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success("Success!");
          this.$store.commit("increment");
          // console.log(this.$store.state.current);
          this.$store.commit(
            "connectClassificationInfo",
            this.formValidate.classification
          );
          this.$store.commit("connectTypeInfo", this.formValidate.type);
          this.$store.commit("connectNameInfo", this.formValidate.connectName);
          this.$store.commit("dataBaseNameInfo", this.formValidate.dbName);
          this.$store.commit("exampleInfo", this.formValidate.example);
          this.$store.commit("tablePrefixInfo", this.formValidate.tablePrefix);
          this.$store.commit("storageTypeInfo", this.formValidate.storageType);
          this.$store.commit("dataCenterInfo", this.formValidate.dataCenter);
          this.$store.commit("accessMarkInfo", this.formValidate.mark);
          this.$store.commit("secretKeyInfo", this.formValidate.secretKey);
          this.$store.commit("storagePathInfo", this.formValidate.storagePath);
          // sessionStorage.setItem(
          //   "connectClassification",
          //   this.formValidate.classification
          // );
          // sessionStorage.setItem("connectType", this.formValidate.type);
          // sessionStorage.setItem("connectName", this.formValidate.connectName);
          // sessionStorage.setItem("dataBaseName", this.formValidate.dbName);
          // sessionStorage.setItem("example", this.formValidate.example);
          // sessionStorage.setItem("tablePrefix", this.formValidate.tablePrefix);
          // sessionStorage.setItem("storageType", this.formValidate.storageType);
          // sessionStorage.setItem("dataCenter", this.formValidate.dataCenter);
          // sessionStorage.setItem("accessMark", this.formValidate.mark);
          // sessionStorage.setItem("secretKey", this.formValidate.secretKey);
          // sessionStorage.setItem("storagePath", this.formValidate.storagePath);
        } else {
          // this.$Message.error("Fail!");
        }
      });
    },
    last() {
      this.$store.commit("decrement");
      console.log(this.$store.state.current);
    },
    created() {
      // console.log(this.$refs.info.partitionInfo)
    },
  },
};
</script>

<style scoped>
.radio_button {
  width: 90px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  font-size: 13px;
}
.active {
  background-color: #e1ecff !important;
  color: #337dff;
}
.description {
  position:absolute;
  top:30px;
  left:170px;
  color: #bbbbbb;
}
</style>