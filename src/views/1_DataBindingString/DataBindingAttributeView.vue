<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" readonly />
  </div>
  <br />
  <input type="search" name="" id="" v-model="txt1" />
  <button :disabled="txt1 === ''">조회</button>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      txt1: ''
    }
  }
}
</script>

<style scoped></style>
