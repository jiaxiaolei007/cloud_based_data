<template>
  <div>
    <Layout>
      <Row style="background:#ffffff;width:1300px;margin-left:-20px;padding-left:30px">
        <Col span="24" >
          <Breadcrumb :style="{ margin: '24px' }" style="position: relative">
            <a href="" style="position: absolute; top: -1px; left: -30px">
              <Icon type="ios-arrow-back" size="20" style="border: 1px solid"
            /></a>
            <BreadcrumbItem style="color: blue">数据同步</BreadcrumbItem>
            <BreadcrumbItem>创建同步任务</BreadcrumbItem>
          </Breadcrumb></Col
        >
      </Row>
      <Steps :current="currentObj.current" style="height:80px;padding:25px">
        <Step title="任务类型"></Step>
        <Step title="基本信息配置"></Step>
        <Step title="源和目标配置"></Step>
        <Step title="任务配置"></Step>
        <Step title="流程确认"></Step>
      </Steps>
    </Layout>
  </div>
</template>

<script>
export default {
  inject: {
    currentObj: { default: () => {} },
  },
};
</script>

<style>
</style>