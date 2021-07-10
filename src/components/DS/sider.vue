<template>
    <Sider hide-trigger :style="{ background: '#fff' }">
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <MenuItem name="1" style="color: black; font-weight: 900"
          >云原生大数据分析LakeHouse</MenuItem
        >
        <MenuItem name="2">概览</MenuItem>
        <MenuItem name="3">实例列表</MenuItem>
        <MenuItem name="4">数据同步</MenuItem>
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
</template>

<script>
export default {};
</script>

<style scoped>
</style>