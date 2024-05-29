<template>
  <div>Mixin</div>
</template>
<script>
// import Axios from '@/mixins/axios'
export default {
  components: {},
  mixins: [],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    // console.log(Math.round(-350023.7))
  },
  mounted() {
    this.getCustomers()
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const customers = await this.$get('http://127.0.0.1:3000/customers')
      console.log(customers)
    }
  }
}
</script>
