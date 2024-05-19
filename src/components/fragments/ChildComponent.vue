<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ str2 }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <select v-model="selectedNum" @change="callParent">
      <option v-for="num in arr" :key="num" :value="num">{{ num }}</option>
    </select>
    <button @click="callParent">부모로 데이터 전달</button>
  </div>
</template>

<script>
export default {
  props: {
    str: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selectedNum: 1,
      str2: '제주'
    }
  },
  methods: {
    callParent() {
      this.$emit('change-num', this.selectedNum)
    },
    print() {
      this.str2 = '부모에서 변경'
    }
  }
}
</script>

<style scoped></style>
