<template>
  <button @click="changeValue">자식변경</button>
  <button @click="callChildprint()">자식함수호출</button>
  <div>
    <ChildComponent
      :str="strParent"
      :num="numParent"
      :isOk="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @change-num="getData"
      ref="child1"
    />
  </div>
</template>

<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'

export default {
  components: { ChildComponent },
  data() {
    return {
      strParent: '개발자',
      numParent: 12,
      isOkParent: true,
      arrParent: [1, 2, 3, 4, 5],
      objParent: { name: 'jery' }
    }
  },
  methods: {
    getData(data) {
      console.log('getData 호출', data)
    },
    changeValue() {
      this.$refs.child1.str2 = 'seoul'
    },
    callChildprint() {
      this.$refs.child1.print()
    }
  }
}
</script>

<style scoped></style>
