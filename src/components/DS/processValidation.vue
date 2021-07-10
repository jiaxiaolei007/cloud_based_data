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
                <span style="display: inline-block; margin-left: 15px"
                  >这里是任务名称</span
                ></Col
              >
            </Row>
            <Row>
              <Col span="12" class="segment">
                <span style="color: #999999">任务描述</span>
                <span style="display: inline-block; margin-left: 15px"
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
                style="color: #337dff; cursor: pointer; margin-left: 15px"
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
                      style="background: #f4f5f7; padding-left: 10px"
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
</template>

<script>
const breadCrumb = () => import("./breadCrumb.vue");

export default {
  data() {
    return {
      modal: false,
    };
  },
  components: {
    breadCrumb,
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
</style>