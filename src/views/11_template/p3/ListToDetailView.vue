<template>
  <div mt-3>
    <div class="row gx-3 gy-2 align-items-center">
      <div class="col-sm-3">
        <label class="visually-hidden" for="customerName">Name</label>
        <input
          type="text"
          class="form-control"
          id="customerName"
          placeholder="Customer Name"
          v-model="searchName"
          @keyup.enter="doSearch"
        />
      </div>
      <div class="col-auto">
        <button class="btn btn-primary me-1" @click="doSearch">Search</button>
      </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          h>
        </tr>
      </thead>
      <tbody>
        <tr :key="customer.id" v-for="customer in customers">
          <td>
            <a class="link-primary" @click="goToDetail(customer.id)"></a>
            {{ customer.name }}
          </td>
          <td>{{ customer.company }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListToDetailView',
  data() {
    return {
      customers: [],
      searchName: ''
    }
  },
  methods: {
    async doSearch() {
      this.customer = await this.$get('http://localhost:3000/customers')
      // this.customers = await this.$get(
      //   `/customers?name_like=${this.searchName}`
      // )
    },
    goToDetail() {}
  }
}
</script>

<style scoped></style>
