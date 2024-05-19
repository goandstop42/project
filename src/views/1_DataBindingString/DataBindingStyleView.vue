<template>
  <div>
    <div :style="style1">스타일 바인딩: 글씨 green</div>
    <button @click="style1.color = 'blue'">색상바꾸기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      }
    }
  }
}
</script>

<style scoped></style>
