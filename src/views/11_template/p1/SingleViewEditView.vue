<template>
  <div class="mt-3">
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Customer</label>
      <div class="col-sm-10">
        <select class="form-select">
          <option value="">=== Select Customer ===</option>
          <option
            :value="customer.id"
            :key="customer.id"
            v-for="customer in customers"
          ></option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label"
        >Password</label
      >
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</template>

<script>
import Axios from '@/maxins/axios'

export default {
  name: 'SingleViewEditView',
  mixins: [Axios],
  data() {
    return {
      customers: []
    }
  },
  created() {
    this.getCustomerList()
  },
  methods: {
    async getCustomerList() {
      this.customers = await this.$get('http://localhost:3000/customers')
      console.log(this.customers)
    }
  }
}
</script>

<style scoped></style>
