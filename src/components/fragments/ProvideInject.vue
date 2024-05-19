<template>
  <div>
    <p>{{ size }}</p>
  </div>
</template>

<script>
export default {
  inject: ['size', 'str'],
  data() {
    return {}
  }
}
</script>

<style scoped></style>
