import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: 0,
    partitionInfo: '',
    fieldList: [],
    valueList: [],
    taskName: '',
    taskDesc: '',
    connectClassification: '',
    connectType: '',
    connectName: '',
    dataBaseName: '',
    example: '',
    tablePrefix: '',
    storageType: '',
    dataCenter: '',
    accessMark: '',
    secretKey: '',
    storagePath: '',
    dispatchmode: '',
    executionTime: '',
    taskNumber: ''
  },
  mutations: {
    increment(state) {
      state.current++
    },
    decrement(state) {
      state.current--
    },
    taskNameInfo(state, info) {
      state.taskName = info
    },
    taskDescInfo(state, info) {
      state.taskDesc = info
    },

    connectClassificationInfo(state, info) {
      state.connectClassification = info
    },
    connectTypeInfo(state, info) {
      state.connectType = info
    },
    connectNameInfo(state, info) {
      state.connectName = info
    },
    dataBaseNameInfo(state, info) {
      state.dataBaseName = info
    },
    exampleInfo(state, info) {
      state.example = info
    },
    tablePrefixInfo(state, info) {
      state.tablePrefix = info
    },
    storageTypeInfo(state, info) {
      state.storageType = info
    },
    dataCenterInfo(state, info) {
      state.dataCenter = info
    },
    accessMarkInfo(state, info) {
      state.accessMark = info
    },
    secretKeyInfo(state, info) {
      state.secretKey = info
    },
    storagePathInfo(state, info) {
      state.storagePath = info
    },

    dispatchmodeInfo(state, info) {
      state.dispatchmode = info
    },
    executionTimeInfo(state, info) {
      state.executionTime = info
    },
    taskNumberinfo(state, info) {
      state.taskNumber = info
    },
  },
  actions: {
  },
  modules: {
  }
})
