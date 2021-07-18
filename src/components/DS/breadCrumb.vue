<template>
  <div>
    <Row
      style="
        background: #ffffff;
        width: 1250px;
        margin-left: -20px;
        padding-left: 30px;
      "
    >
      <Col span="24">
        <Breadcrumb :style="{ margin: '24px' }" style="position: relative">
          <a href="" style="position: absolute; top: -1px; left: -30px">
            <Icon type="ios-arrow-back" size="20" style="border: 1px solid"
          /></a>
          <BreadcrumbItem style="color: blue">数据同步</BreadcrumbItem>
          <BreadcrumbItem>创建同步任务</BreadcrumbItem>
        </Breadcrumb></Col
      >
    </Row>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
</style>