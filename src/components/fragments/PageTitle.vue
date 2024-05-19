<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목'
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
