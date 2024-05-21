<template>
  <div></div>
</template>
<script>
export default {
  name: 'TodoView',
  data() {
    return {
      todos() {
        return this.$store.state.todos
      }
    }
  }
}
</script>

<style scoped></style>
