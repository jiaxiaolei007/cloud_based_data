<template>
  <div style="position: relative">
    <Layout class="layout_nav">
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
          style="height: 63px"
        >
          <div class="layout-logo">
            <MenuItem
              name="1"
              class="logo"
              style="
                background: rgba(51, 125, 255, 1);
                height: 64px;
                position: relative;
              "
            >
              <Icon
                type="ios-menu"
                size="30"
                style="position: absolute; top: 25%; left: 10%"
                @click="divClick"
              />
            </MenuItem>
            <MenuItem
              name="2"
              style="position: relative; width: 100px; height: 63px"
            >
              <div>
                <img
                  src="../../../images/yun_logo.png"
                  alt=""
                  style="position: absolute; left: 0; top: 10px"
                />
              </div>
            </MenuItem>
            <MenuItem name="3"> 总览 </MenuItem>
            <MenuItem name="4" style="position: relative">
              <div style="position: absolute; width: 100px; top: 20px">
                <Cascader :data="data" @on-change="onChange"
                  ><Icon type="ios-pin" />{{ value1 }}</Cascader
                >
              </div>
            </MenuItem>
          </div>
          <!-- <div class="drag_menu" ref="d_tag;">hahah</div> -->
          <div class="layout-nav">
            <MenuItem name="5"> 购物车 </MenuItem>
            <MenuItem name="6"> 帮助中心 </MenuItem>
            <MenuItem name="7"> 站内信息 </MenuItem>
            <MenuItem name="8"> 备案 </MenuItem>
            <MenuItem name="9"> 工单 </MenuItem>
            <MenuItem name="10">
              <Icon type="ios-person" />
              用户信息
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "华北-北京",
      data: [
        {
          value: "华北-北京1",
          label: "华北-北京1",
        },
        {
          value: "华东-上海1",
          label: "华东-上海1",
        },
        {
          value: "华东-上海2",
          label: "华东-上海2",
        },
        {
          value: "华南-广州",
          label: "华南-广州",
        },
        {
          value: "华中-长沙",
          label: "华中-长沙",
        },
        {
          value: "华东-上海",
          label: "华东-上海",
        },
      ],
    };
  },
  methods: {
    onChange(value) {
      console.log(value[0]);
      this.value1 = value;
      console.log(this.value1);
    },
    divClick() {
      this.$refs.d_tag.style.display = "block";
    },
  },
};
</script>

<style scoped>
.layout-logo {
  float: left;
}
.ivu-layout-header {
  padding: 0;
}
.ivu-menu-dark {
  background: #1d1e1f;
}
.layout-nav {
  float: right;
}
.drag_menu {
  position: absolute;
  top: 0;
  width: 500px;
  height: 800px;
  padding: 10px;
  background: red;
  z-index: 999;
}
</style>