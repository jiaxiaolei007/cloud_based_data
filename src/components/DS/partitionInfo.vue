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
        ><input
          type="text"
          style="width: 200px; border: 1px solid #bbbbbb"
          v-model="field"
          @blur="onblur1"
        />
      </Col>
      <Col span="9"
        ><input
          type="text"
          style="width: 200px; border: 1px solid #bbbbbb"
          v-model="value"
          @blur="onblur2"
      /></Col>
      <Col span="6">
        <span style="color: #337dff; cursor: pointer" @click="deleteInfo"
          >删除
        </span>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      field: "",
      value: "",
      fieldList: [],
      valueList: [],
    };
  },
  methods: {
    deleteInfo() {
      this.$emit("deleteInfo");
    },
    onblur1() {
      this.fieldList.push(this.field);
      console.log(this.fieldList)
      sessionStorage.setItem("fieldList", JSON.stringify(this.fieldList));
    },
    onblur2() {
      this.valueList.push(this.value);
      console.log(this.valueList)
      sessionStorage.setItem("valueList", JSON.stringify(this.valueList));
    },
  },
  // watch: {
  //   field(newName, oldName) {
  //     console.log(newName);
  //     this.fieldList.push(newName);
  //     sessionStorage.setItem("fieldList", JSON.stringify(this.fieldList));
  //   },
  //   value(newName, oldName) {
  //     this.valueList.push(newName);
  //     sessionStorage.setItem("valueList", JSON.stringify(this.valueList));
  //   },
  // },
};
</script>

<style scoped>
</style>