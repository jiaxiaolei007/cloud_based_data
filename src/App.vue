<template>
  <div id="app">
    <div class="layout">
      <Layout
        style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px"
      >
        <nav-bar></nav-bar>
        <Layout>
          <Sider hide-trigger :style="{ background: '#fff' }">
            <Menu
              active-name="1-2"
              theme="light"
              width="auto"
              :open-names="['1']"
            >
              <MenuItem name="1" style="color: black; font-weight: 900"
                >云原生大数据分析LakeHouse</MenuItem
              >
              <MenuItem name="2">概览</MenuItem>
              <MenuItem name="3">实例列表</MenuItem>
              <MenuItem name="4" @click.native="taskManageBtn"
                >数据同步</MenuItem
              >
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  数据管理
                </template>
                <MenuItem name="1-1">数据目录</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  数据探索
                </template>
                <MenuItem name="2-1">SQL Console</MenuItem>
              </Submenu>
              <MenuItem name="5">运维管理</MenuItem>
            </Menu>
          </Sider>
          <Layout :style="{ padding: '0 24px 24px' }">
            <div>
              <router-link to="/taskType"></router-link>
              <router-link to="/basicConfig"></router-link>
              <router-link to="/sourceAndTargetConfig"></router-link>
              <router-link to="/taskConfig"></router-link>
              <router-link to="/processValidation"></router-link>
              <router-link to="/taskManage"></router-link>
            </div>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
            <!-- <task-type></task-type> -->
          </Layout>
        </Layout>
        <Footer style="background: #fff">
          <div
            style="margin-left: 155px; padding: 20px"
            v-if="isShowTaskManage"
          >
            <Button type="default" @click="cancel" class="btn_margin"
              >取消</Button
            >
            <Button v-if="lastShow" @click="last" class="btn_margin"
              >上一步</Button
            >
            <Button
              type="default"
              @click="modal = true"
              v-if="!nextShow"
              class="btn_margin"
              >预检查
            </Button>
            <Button
              type="primary"
              @click="over"
              v-if="!nextShow"
              class="btn_margin"
              >完成</Button
            >
            <Button
              type="primary"
              @click="next"
              v-if="nextShow"
              class="btn_margin"
              >下一步</Button
            >
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
          </div>
        </Footer>
      </Layout>
    </div>
  </div>
</template>
<script>
const navBar = () => import("./components/DS/navBar.vue");
const breadCrumb = () => import("./components/DS/breadCrumb.vue");
const sider = () => import("./components/DS/sider.vue");
const taskType = () => import("./components/DS/taskType.vue");
const basicConfig = () => import("./components/DS/basicConfig.vue");
const sourceAndTargetConfig = () =>
  import("./components/DS/sourceAndTargetConfig.vue");
const taskConfig = () => import("./components/DS/taskConfig.vue");
const processValidation = () => import("./components/DS/processValidation.vue");
const taskManage = () => import("./components/DS/taskManage.vue");
import axios from 'axios'

export default {
  data() {
    return {
      isShowTaskManage: true,
      modal: false,
      currentObj: { current: 0 },
      lastShow: false,
      nextShow: true,
      assList: [
        "/taskType",
        "/basicConfig",
        "/sourceAndTargetConfig",
        "/taskConfig",
        "/processValidation",
      ],
    };
  },
  provide() {
    return {
      currentObj: this.currentObj,
    };
  },
  components: {
    navBar,
    breadCrumb,
    sider,
    taskType,
    basicConfig,
    sourceAndTargetConfig,
    taskConfig,
    processValidation,
    taskManage,
  },
  methods: {
    next() {
      this.currentObj.current += 1;
      this.lastShow = true;
      this.$router.push(this.assList[this.currentObj.current]);
      // 保存状态信息到sessionStorage
      if (this.currentObj.current <= 4) {
        sessionStorage.setItem(
          "currentObj.current",
          JSON.stringify(this.currentObj.current)
        );
      }
      if (this.currentObj.current == 4) {
        this.nextShow = false;
      }
      // console.log(this.currentObj.current, this.assList[this.currentObj.current]);
    },
    last() {
      this.currentObj.current -= 1;
      this.nextShow = true;
      this.$router.push(this.assList[this.currentObj.current]);
      if (this.currentObj.current >= 0) {
        sessionStorage.setItem(
          "currentObj.current",
          JSON.stringify(this.currentObj.current)
        );
      }
      if (this.currentObj.current == 0) {
        this.lastShow = false;
      }
    },
    cancel() {
      this.$router.push("/taskManage");
    },
    over() {
      this.$router.push("/taskManage");
      this.isShowTaskManage = false;
      this.currentObj.current = 5;
    },
    taskManageBtn() {
      this.over();
    },
    // goBack() {
    //   if (this.currentObj.current == 5) {
    //     this.nextShow = false;
    //   } else {
    //     this.nextShow = true;
    //   }
    //   this.isShowTaskManage = true;
    //   this.currentObj.current -= 1;
    //   console.log(this.currentObj.current);
    // },
    establishTask(){
      this.isShowTaskManage=true
    }
  },
  watch: {
    $route(to, from) {
      var array = sessionStorage.getItem("hrefArray").split(",");
      console.log(array.indexOf(to.fullPath) == array.indexOf(from.fullPath));
      if (array.indexOf(to.fullPath) > array.indexOf(from.fullPath)) {
        this.currentObj.current = array.indexOf(to.fullPath);
        console.log("goon", this.currentObj.current);
        this.$router.push(this.assList[this.currentObj.current]);
        if (this.currentObj.current == 4) {
          this.lastShow = true;
          this.nextShow = false;
        }else if(this.currentObj.current>=5){
          this.isShowTaskManage=false;
        }
      } else {
        this.establishTask()
        this.currentObj.current = array.indexOf(to.fullPath);
        console.log("goback", this.currentObj.current);
        this.$router.push(this.assList[this.currentObj.current]);
        if (this.currentObj.current !== 4) {
          this.lastShow = true;
          this.nextShow = true;
        }
        if (this.currentObj.current == 0) {
          this.nextShow = true;
          this.lastShow = false;
        }
        if (this.currentObj.current == 4) {
          this.nextShow = false;
          this.lastShow = true;
          this.isShowTaskManage=true
        }
      }
    },
  },
  // 监听浏览器的回退按钮，监听到回退后执行goBack方法
  // mounted() {
  //   if (window.history && window.history.pushState) {
  //     history.pushState(null, null, document.URL);
  //     window.addEventListener("popstate", this.goBack, false);
  //   }
  // },
  // destroyed() {
  //   window.removeEventListener("popstate", this.goBack, false);
  // },
  created() {
    // 在页面刷新时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem("currentObj.current")) {
    //   this.currentObj.current = JSON.parse(
    //     sessionStorage.getItem("currentObj.current")
    //   );
    //   console.log(this.currentObj.current);
    //   if (this.currentObj.current == 4) {
    //     this.nextShow = false;
    //     this.lastShow = true;
    //   }
    //   if (this.currentObj.current < 4) {
    //     this.lastShow = true;
    //   }
    //   if (this.currentObj.current == 0) {
    //     this.lastShow = false;
    //   }
    // }
  },
};
</script>

<style>
.btn_margin {
  margin-left: 10px;
}
.ivu-modal {
  top: 800px;
}
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
