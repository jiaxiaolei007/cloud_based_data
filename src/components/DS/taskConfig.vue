<template>
  <div>
    <Layout>
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
                  style="margin: 30px 0 0 -40px"
                >
                  <FormItem
                    prop="mode"
                    label="调度方式"
                    label-position="right"
                    :label-width="200"
                  >
                    <div>
                      <div style="width: 200px; height: 35px">
                        <RadioGroup v-model="formValidate.mode" type="button">
                          <div @click="one" style="display: inline-block">
                            <Radio
                              class="radio_button"
                              label="单次"
                              :style="{ backgroundColor: leftButtonColor }"
                            >
                            </Radio>
                          </div>
                          <div @click="cycle" style="display: inline-block">
                            <Radio
                              class="radio_button"
                              label="周期"
                              :style="{ backgroundColor: rightButtonColor }"
                            >
                            </Radio>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </FormItem>
                  <FormItem
                    prop="date"
                    label="开始执行时间"
                    label-position="right"
                    :label-width="200"
                  >
                    <DatePicker
                      type="datetime"
                      placeholder="选择时间和日期"
                      v-model="formValidate.date"
                      style="width: 300px; margin: 2px 0"
                    ></DatePicker>
                  </FormItem>
                  <div v-if="isShow">
                    <FormItem
                      prop="date"
                      label="调度周期"
                      label-position="right"
                      :label-width="200"
                    >
                      <Input
                        placeholder="请输入正整数..."
                        style="width: 360px; height: 35px"
                        v-model="formValidate.dispatchCycle"
                      />
                      <Dropdown @on-click="changeMenu">
                        <a href="javascript:void(0)" style="margin-left: 10px">
                          {{ itemName }}
                          <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                          <DropdownItem
                            v-for="item in timeList"
                            :key="item"
                            :name="item"
                            >{{ item }}</DropdownItem
                          >
                        </DropdownMenu>
                      </Dropdown>
                    </FormItem>
                    <FormItem
                      prop="dispatchBeginTime"
                      label="调度开始时间"
                      label-position="right"
                      :label-width="200"
                    >
                      <DatePicker
                        type="datetime"
                        placeholder="选择时间和日期"
                        v-model="formValidate.dispatchBeginTime"
                        style="width: 300px; margin: 2px 0"
                      ></DatePicker>
                    </FormItem>
                    <FormItem
                      prop="dispatchOverTime"
                      label="调度结束时间"
                      label-position="right"
                      :label-width="200"
                    >
                      <DatePicker
                        type="datetime"
                        placeholder="选择时间和日期"
                        v-model="formValidate.dispatchOverTime"
                        style="width: 300px; margin: 2px 0"
                      ></DatePicker>
                    </FormItem>
                    <FormItem
                      prop="policy"
                      label="任务失败策略"
                      label-position="right"
                      :label-width="200"
                    >
                      <div>
                        <Select
                          v-model="formValidate.policy"
                          style="width: 400px"
                        >
                          <Option
                            v-for="item in policyList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                      </div>
                    </FormItem>
                  </div>

                  <div style="height: 35px">
                    <div
                      style="
                        float: left;
                        width: 120px;
                        text-align: right;
                        margin-left: 86px;
                      "
                    >
                      <div v-if="showAttr">
                        <span
                          style="color: #337dff; cursor: pointer"
                          @click="showBtn"
                          >显示高级属性
                        </span>
                        <Icon type="ios-arrow-down" size="16" color="#337DFF" />
                      </div>
                      <div v-if="!showAttr">
                        <span
                          style="color: #337dff; cursor: pointer"
                          @click="showBtn"
                          >隐藏高级属性
                        </span>
                        <Icon type="ios-arrow-up" size="16" color="#337DFF" />
                      </div>
                    </div>
                  </div>
                  <FormItem
                    prop="number"
                    label="任务并发数"
                    label-position="right"
                    :label-width="200"
                    v-if="!showAttr"
                  >
                    <div>
                      <Input
                        type="text"
                        style="
                          width: 400px;
                          height: 35px;
                        "
                        v-model="formValidate.number"
                        placeholder="请输入正整数"
                      />
                    </div>
                  </FormItem>
                </Form>
              </Content>
            </template>
            <template v-slot:button>
              <div style="padding: 20px; margin-top: 212px">
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
    </Layout>
  </div>
</template>

<script>
const breadCrumb = () => import("./BreadCrumb");
const commonComponent = () => import("./CommonComponent");
const steps = () => import("./Steps");

export default {
  data() {
    return {
      leftButtonColor: "#e1ecff",
      rightButtonColor: "#ffffff",
      isShow: false,
      itemName: "分",
      timeList: ["分", "小时", "周", "月", "年"],
      showAttr: true,
      active: true,
      formValidate: {
        mode: "单次",
        date: "",
        number: "",
        dispatchBeginTime: "",
        dispatchOverTime: "",
        policy: "",
      },
      ruleValidate: {
        mode: [
          {
            required: true,
            message: "请选择调度方式",
            trigger: "change",
          },
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "请选择开始时间",
            trigger: "change",
          },
        ],
        number: [
          {
            required: false,
            message: "",
            trigger: "change",
          },
        ],
        dispatchBeginTime: [
          {
            required: true,
            type: "date",
            message: "请选择调度开始时间",
            trigger: "change",
          },
        ],
        dispatchOverTime: [
          {
            required: true,
            type: "date",
            message: "请选择调度结束时间",
            trigger: "change",
          },
        ],
        policy: [
          {
            required: true,
            message: "请选择调度策略",
            trigger: "change",
          },
        ],
      },
      policyList: [
        {
          value: "单次失败任务后，不在执行后续的调度任务",
          label: "单次失败任务后，不在执行后续的调度任务",
        },
        {
          value: "单次任务失败后，忽略失败并执行下一次任务",
          label: '"单次任务失败后，忽略失败并执行下一次任务",',
        },
      ],
    };
  },
  methods: {
    cycle() {
      this.isShow = true;
      this.rightButtonColor = "#e1ecff";
      this.leftButtonColor = "#ffffff";
    },
    one() {
      this.isShow = false;
      this.leftButtonColor = "#e1ecff";
      this.rightButtonColor = "#ffffff";
    },
    changeMenu(name) {
      this.itemName = name;
    },
    showBtn() {
      this.showAttr = !this.showAttr;
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success("成功!");
          this.$store.commit("increment");
          // console.log(this.$store.state.current);
          // emitter.emit("basicConfig", this.current);
          this.$store.commit('dispatchmodeInfo',this.formValidate.mode)
          this.$store.commit('dispatchmoexecutionTimeInfodeInfo',this.formValidate.date)
          this.$store.commit('taskNumberinfo',this.formValidate.number)
          // sessionStorage.setItem("dispatchmode", this.formValidate.mode);
          // sessionStorage.setItem("executionTime", this.formValidate.date);
          // sessionStorage.setItem("taskNumber", this.formValidate.number);
        } else {
          // this.$Message.error("失败!");
        }
      });
    },
    last() {
      this.$store.commit("decrement");
      // console.log(this.$store.state.current);
    },
  },
  components: {
    breadCrumb,
    commonComponent,
    steps,
  },
  watch: {},
};
</script>

<style scoped>
.radio_button {
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 32px;
  font-size: 13px;
}
</style>