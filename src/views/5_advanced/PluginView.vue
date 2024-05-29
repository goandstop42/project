<template>
  <div>{{ $translate(`${userInfo.lang}.welcome`, userInfo) }}</div>
  <div>{{ $translate(`${userInfo.lang}.welcome3`, userInfo) }}</div>
  <div>{{ $translate(`${userInfo.lang}.hi`) }}</div>
  <div>{{ $translate(`${userInfo.lang}.save`) }}</div>
  <button>{{ $translate(`${userInfo.lang}.search`) }}</button>
</template>

<script>
export default {
  name: 'PluginView',
  data() {
    return {
      userInfo: {
        name: 'jjj',
        email: 'jjj@jjj.com',
        lang: 'ko'
      }
    }
  },
  mounted() {
    this.getCustomers()
  },
  methods: {
    async getCustomers() {
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>

<style scoped></style>
