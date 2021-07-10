<template>
  <div>
    <Row
      style="
        height: 38px;
        width: 800px;
        text-align: left;
        line-height: 30px;
        padding: 0 10px;
        border-bottom: 1px solid #bbbbbb;
        margin-top: 5px;
      "
    >
      <Col span="9"
        ><input type="text" style="width: 200px; border: 1px solid #bbbbbb" />
      </Col>
      <Col span="9"
        ><input type="text" style="width: 200px; border: 1px solid #bbbbbb"
      /></Col>
      <Col span="6">
      <span style="color: #337dff;cursor: pointer;" @click="deleteInfo">删除 </span>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  methods:{
    deleteInfo(){
      this.$emit('deleteInfo')
    }
  }
};
</script>

<style scoped>

</style>