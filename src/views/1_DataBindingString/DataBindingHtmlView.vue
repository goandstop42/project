<template>
  <div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  }
}
</script>

<style scoped></style>
