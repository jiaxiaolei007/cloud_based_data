<template>
  <div>
    <Row
      style="
        background: #ffffff;
        width: 1300px;
        margin-left: -20px;
        padding-left: 30px;
      "
    >
      <Col span="24">
        <Breadcrumb :style="{ margin: '24px' }" style="position: relative">
          <a href="" style="position: absolute; top: -1px; left: -30px">
            <Icon type="ios-arrow-back" size="20" style="border: 1px solid"
          /></a>
          <BreadcrumbItem style="color: blue"
            >数据同步（任务管理）</BreadcrumbItem
          >
          <BreadcrumbItem>这里是任务名称</BreadcrumbItem>
        </Breadcrumb></Col
      >
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
            <TabPane label="任务详情" name="name2">
              <div>
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
                            <span
                              style="display: inline-block; margin-left: 15px"
                              >这里是任务名称</span
                            ></Col
                          >
                        </Row>
                        <Row>
                          <Col span="12" class="segment">
                            <span style="color: #999999">任务描述</span>
                            <span
                              style="display: inline-block; margin-left: 15px"
                              >这里是很长很长的一段描述，但是不超过250个字</span
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
                          <span style="display: inline-block; margin-left: 15px"
                            >关系型数据库</span
                          ></Col
                        >
                        <Col span="8" class="segment">
                          <span style="color: #999999">连接器类型</span>
                          <span style="display: inline-block; margin-left: 15px"
                            >MySql</span
                          ></Col
                        >
                        <Col span="" class="segment">
                          <span style="color: #999999">数据连接名称</span>
                          <span style="display: inline-block; margin-left: 15px"
                            >数据连接名称</span
                          ></Col
                        >
                      </Row>
                      <Row>
                        <Col span="12" class="segment">
                          <span style="color: #999999">数据库名称</span>
                          <span style="display: inline-block; margin-left: 15px"
                            >数据库名称</span
                          ></Col
                        >
                      </Row>
                    </div>
                    <div class="section" style="height: 160px">
                      <h4>数据目标配置</h4>
                      <Row>
                        <Col span="8" class="segment">
                          <span style="color: #999999">实例（数据库） </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >这里是实例名称</span
                          ></Col
                        >
                        <Col span="8" class="segment">
                          <span style="color: #999999">表名称前缀 </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >这里是表名称前缀</span
                          ></Col
                        >
                        <Col span="" class="segment">
                          <span style="color: #999999">存储类型 </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >内置存储</span
                          ></Col
                        >
                      </Row>
                      <Row>
                        <Col span="8" class="segment">
                          <span style="color: #999999">数据中心 </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >华东-苏州</span
                          ></Col
                        >
                        <Col span="8" class="segment">
                          <span style="color: #999999">访问标识(AK) </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >这里是访问标识(AK)</span
                          ></Col
                        >
                        <Col span="" class="segment">
                          <span style="color: #999999">密钥（SK） </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >这里是密钥（SK）</span
                          ></Col
                        >
                      </Row>
                      <Row>
                        <Col span="" class="segment">
                          <span style="color: #999999">存储路径 </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >库存储位置/表名</span
                          ></Col
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
                            @click="modal = true"
                            >查看分区
                          </span>
                          <Modal
                            title="查看分区"
                            v-model="modal"
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
                                  style="
                                    background: #f4f5f7;
                                    padding-left: 10px;
                                  "
                                  >值</Col
                                >
                              </Row>
                              <Row class="row">
                                <Col span="12" style=" ;">XXXXXX</Col>
                                <Col span="" style="margin-left: 20px">XXX</Col>
                              </Row>
                              <Row class="row">
                                <Col span="12" style=" ;">XXXXXX</Col>
                                <Col span="" style="margin-left: 20px">XXX</Col>
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
                          <span style="display: inline-block; margin-left: 15px"
                            >单次</span
                          ></Col
                        >
                        <Col span="" class="segment">
                          <span style="color: #999999">开始执行时间 </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >2018-12-6 00:00:00</span
                          ></Col
                        >
                      </Row>
                      <Row>
                        <Col span="" class="segment">
                          <span style="color: #999999">任务并发数 </span>
                          <span style="display: inline-block; margin-left: 15px"
                            >15</span
                          ></Col
                        >
                      </Row>
                    </div>
                  </Content>
                </Layout>
              </div>
            </TabPane>
            <TabPane label="任务监控" name="name1">
              <div>
                <div
                  style="
                    margin-top: 10px;
                    padding: 10px;
                    border: 0.8px solid #e5e5e5;
                  "
                >
                  <Row>
                    <Col span="7" style="margin: 10px 0px 0px 10px"
                      >任务执行ID
                      <input
                        type="text"
                        placeholder="请输入..."
                        style="
                          width: 200px;
                          height: 30px;
                          margin-left: 10px;
                          border: 1px solid #bbbbbb;
                          padding: 8px;
                        "
                      />
                    </Col>
                    <Col span="7" style="margin: 10px 0px 0px 10px"
                      >执行状态
                      <Select
                        v-model="model1"
                        style="width: 210px; margin-left: 20px"
                      >
                        <Option
                          v-for="item in cityList1"
                          :value="item.value"
                          :key="item.value"
                          >{{ item.label }}</Option
                        >
                      </Select>
                    </Col>
                    <Col span="" style="margin: 10px 0px 0px 10px">
                      创建时间<DatePicker
                        type="datetimerange"
                        format="yyyy-MM-dd HH:mm"
                        placeholder="选择日期和时间"
                        style="width: 300px; margin-left: 24px"
                      ></DatePicker>
                    </Col>
                  </Row>
                  <Row>
                    <Col span="8"></Col>
                    <Col span="8"></Col>
                    <Col span="" style="margin: 10px">
                      <div style="margin-left: 170px">
                        <Button type="primary" style="margin-left: 10px"
                          >查询</Button
                        >
                        <Button style="margin-left: 10px">重置</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style="margin: 20px 0px">
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
                    <Col span="3" style="padding-left: 30px">任务执行ID</Col>
                    <Col span="17">
                      <Row style="">
                        <Col span="3">调度类型</Col>
                        <Col span="3">执行状态</Col>
                        <Col span="7">执行进度</Col>
                        <Col span="4">开始时间</Col>
                        <Col span="4">结束时间</Col>
                        <Col span="3">执行时长</Col>
                      </Row>
                    </Col>
                    <Col span="">操作</Col>
                  </Row>
                  <Row
                    style="
                      height: 45px;
                      line-height: 45px;
                      border-bottom: 1px solid #e9ebef;
                    "
                  >
                    <Col span="3" style="padding-left: 10px">
                      <Checkbox v-model="check" style="">
                        <span style="margin-left: 5px">19960716</span>
                      </Checkbox></Col
                    >
                    <Col span="17">
                      <Row>
                        <Col span="3"> <span>单次</span> </Col>
                        <Col span="3"
                          ><span
                            ><Icon
                              type="ios-medical-outline"
                              size="12"
                              style="
                                border-radius: 6px;
                                background-color: #75849b;
                                color: #ffffff;
                              "
                            />
                            已中断</span
                          >
                        </Col>
                        <Col span="7">
                          <span
                            ><Progress :percent="58" :stroke-color="'#75849b'"
                          /></span>
                        </Col>
                        <Col span="4">
                          <span>2021-7-8 11:00:00</span>
                        </Col>
                        <Col span="4"> <span>2021-7-8 11:00:00</span> </Col>
                        <Col span="3"> <span>1H 16M 30S</span> </Col>
                      </Row>
                    </Col>
                    <Col span="">
                      <span style="color: #337dff; cursor: pointer"
                        >查看日志</span
                      >
                    </Col>
                  </Row>
                  <Row
                    style="
                      height: 45px;
                      line-height: 45px;
                      border-bottom: 1px solid #e9ebef;
                    "
                  >
                    <Col span="3" style="padding-left: 10px">
                      <Checkbox v-model="check" style="">
                        <span style="margin-left: 5px">19960716</span>
                      </Checkbox></Col
                    >
                    <Col span="17">
                      <Row>
                        <Col span="3"> <span>周期</span> </Col>
                        <Col span="3"
                          ><span
                            ><Icon
                              type="ios-checkmark"
                              size="12"
                              style="
                                border-radius: 6px;
                                background-color: green;
                                color: #ffffff;
                              "
                            />
                            成功</span
                          >
                        </Col>
                        <Col span="7">
                          <span
                            ><Progress :percent="100" :stroke-color="'green'"
                          /></span>
                        </Col>
                        <Col span="4">
                          <span>2021-7-8 11:00:00</span>
                        </Col>
                        <Col span="4"> <span>2021-7-8 11:00:00</span> </Col>
                        <Col span="3"> <span>1H 16M 30S</span> </Col>
                      </Row>
                    </Col>
                    <Col span="">
                      <span style="color: #337dff; cursor: pointer"
                        >查看日志</span
                      >
                    </Col>
                  </Row>
                  <Row
                    style="
                      height: 45px;
                      line-height: 45px;
                      border-bottom: 1px solid #e9ebef;
                    "
                  >
                    <Col span="3" style="padding-left: 10px">
                      <Checkbox v-model="check" style="">
                        <span style="margin-left: 5px">19960716</span>
                      </Checkbox></Col
                    >
                    <Col span="17">
                      <Row>
                        <Col span="3"> <span>周期</span> </Col>
                        <Col span="3"
                          ><span
                            ><Icon
                              type="ios-checkmark"
                              size="12"
                              style="
                                border-radius: 6px;
                                background-color: #337dff;
                                color: #ffffff;
                              "
                            />
                            执行中</span
                          >
                        </Col>
                        <Col span="7">
                          <span
                            ><Progress :percent="50" :stroke-color="'#337dff'"
                          /></span>
                        </Col>
                        <Col span="4">
                          <span>2021-7-8 11:00:00</span>
                        </Col>
                        <Col span="4"> <span>2021-7-8 11:00:00</span> </Col>
                        <Col span="3"> <span>1H 16M 30S</span> </Col>
                      </Row>
                    </Col>
                    <Col span="">
                      <span style="color: #337dff; cursor: pointer"
                        >查看日志</span
                      >
                      <span
                        style="color: #337dff; cursor: pointer"
                        @click="modal1 = true"
                      >
                        中断</span
                      >
                      <Modal
                        v-model="modal1"
                        title=""
                        @on-ok="ok"
                        @on-cancel="cancel"
                        :styles="{ top: '320px', width: '360px' }"
                      >
                        <div>
                          <span class="icon_alert">!</span>
                          <span>是否中断任务XXXX</span>
                          <div style="font-size: 13px; padding: 10px">
                            任务中断后不能恢复，请谨慎操作
                          </div>
                        </div>
                      </Modal>
                    </Col>
                  </Row>
                  <Row
                    style="
                      height: 45px;
                      line-height: 45px;
                      border-bottom: 1px solid #e9ebef;
                    "
                  >
                    <Col span="3" style="padding-left: 10px">
                      <Checkbox v-model="check" style="">
                        <span style="margin-left: 5px">19960716</span>
                      </Checkbox></Col
                    >
                    <Col span="17">
                      <Row>
                        <Col span="3"> <span>周期</span> </Col>
                        <Col span="3"
                          ><span
                            ><Icon
                              type="ios-close"
                              size="12"
                              style="
                                border-radius: 6px;
                                background-color: red;
                                color: #ffffff;
                              "
                            />
                            失败</span
                          >
                        </Col>
                        <Col span="7">
                          <span
                            ><Progress :percent="0" :stroke-color="'red'"
                          /></span>
                        </Col>
                        <Col span="4">
                          <span>2021-7-8 11:00:00</span>
                        </Col>
                        <Col span="4"> <span>2021-7-8 11:00:00</span> </Col>
                        <Col span="3"> <span>1H 16M 30S</span> </Col>
                      </Row>
                    </Col>
                    <Col span="">
                      <span style="color: #337dff; cursor: pointer"
                        >查看日志</span
                      >
                      <span
                        style="color: #337dff; cursor: pointer"
                        @click="modal2 = true"
                      >
                        重试</span
                      >
                      <Modal
                        v-model="modal2"
                        title=""
                        @on-ok="ok"
                        @on-cancel="cancel"
                        :styles="{ top: '320px', width: '360px' }"
                      >
                        <p>
                          <span class="icon_alert">!</span> 是否重试任务XXXX
                        </p>
                      </Modal>
                    </Col>
                  </Row>
                  <Row
                    style="
                      height: 45px;
                      line-height: 45px;
                      border-bottom: 1px solid #e9ebef;
                    "
                  >
                    <Col span="3" style="padding-left: 10px">
                      <Checkbox v-model="check" style="">
                        <span style="margin-left: 5px">19960716</span>
                      </Checkbox></Col
                    >
                    <Col span="17">
                      <Row>
                        <Col span="3"> <span>周期</span> </Col>
                        <Col span="3"
                          ><span
                            ><Icon
                              type="ios-close"
                              size="12"
                              style="
                                border-radius: 6px;
                                background-color: red;
                                color: #ffffff;
                              "
                            />
                            失败</span
                          >
                        </Col>
                        <Col span="7">
                          <span
                            ><Progress :percent="58" :stroke-color="'red'"
                          /></span>
                        </Col>
                        <Col span="4">
                          <span>2021-7-8 11:00:00</span>
                        </Col>
                        <Col span="4"> <span>2021-7-8 11:00:00</span> </Col>
                        <Col span="3"> <span>1H 16M 30S</span> </Col>
                      </Row>
                    </Col>
                    <Col span="">
                      <span
                        style="color: #337dff; cursor: pointer"
                        @click="journalModal5 = true"
                        >查看日志</span
                      >
                      <Modal
                        v-model="journalModal5"
                        title="查看日志"
                        @on-ok="ok"
                        @on-cancel="cancel"
                        :styles="{ top: '120px', width: '600px' }"
                      >
                        <div
                          style="
                            height: 280px;
                            background-color: black;
                            margin: 20px;
                            padding: 20px;
                            color: #ffffff;
                          "
                        >
                          <p>任务执行ID：2086231</p>
                          <p>任务执行开始时间： 2021-03-22 16:32:33</p>
                          <p>任务执行结束时间： 2021-03-22 16:31:33</p>
                          <p>任务执行时长：120秒</p>
                          <p>任务执行结果：</p>
                          <p>table1：记录数173465条，数据量70M</p>
                          <p>table2：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                          <p>
                            报错信息：
                            java.lang.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxx
                          </p>
                        </div>
                        <p style="margin-left: 500px; color: blue">
                          复制<Icon type="ios-copy-outline" size="24" />
                        </p>
                      </Modal>
                      <span
                        style="color: #337dff; cursor: pointer"
                        @click="modal3 = true"
                      >
                        重试</span
                      >
                      <Modal
                        v-model="modal3"
                        title=""
                        @on-ok="ok"
                        @on-cancel="cancel"
                        :styles="{ top: '320px', width: '360px' }"
                      >
                        <p>
                          <span class="icon_alert">!</span> 是否重试任务XXXX
                        </p>
                      </Modal>
                    </Col>
                  </Row>
                </div>
                <div style="height: 60px; padding: 10px">
                  <Page :total="100" show-total show-sizer show-elevator />
                </div>
              </div>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      journalModal5: false,
      isShow: false,
      showAttr: true,
      isActive: true,
      cityList1: [
        {
          value: "执行中",
          label: "执行中",
        },
        {
          value: "成功",
          label: "成功",
        },
        {
          value: "失败",
          label: "失败",
        },
        {
          value: "已中断",
          label: "已中断",
        },
      ],
    };
  },
  methods: {},
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
/* !图标 */
.icon_alert {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: #ffdd81;
  line-height: 18px;
  border-radius: 9px;
  text-align: center;
  color: #ffffff;
}
</style>