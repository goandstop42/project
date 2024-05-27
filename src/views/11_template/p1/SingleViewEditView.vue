<template>
  <div class="mt-3">
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="selectCustomer"
        >Customer</label
      >
      <div class="col-sm-10">
        <select
          id="selectCustomer"
          v-model="selectedCustomerId"
          class="form-select"
          @change="getCustomer"
        >
          <option value="">=== Select Customer ===</option>
          <option
            v-for="customer in customers"
            :key="customer.id"
            :value="customer.id"
          >
            {{ customer.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="customerName">Name</label>
      <div class="col-sm-10">
        <input
          id="customerName"
          v-model="customer.name"
          :disabled="!editMode"
          class="form-control"
          type="text"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="customerCompany"
        >Company</label
      >
      <div class="col-sm-10">
        <input
          id="customerCompany"
          v-model="customer.company"
          :disabled="!editMode"
          class="form-control"
          type="text"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="customerEmail">Email</label>
      <div class="col-sm-10">
        <input
          id="customerEmail"
          v-model="customer.email"
          :disabled="!editMode"
          class="form-control"
          type="email"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="customerPhone">Phone</label>
      <div class="col-sm-10">
        <input
          id="customerPhone"
          v-model="customer.phone"
          :disabled="!editMode"
          class="form-control"
          type="tel"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" for="customerAddress"
        >Address</label
      >
      <div class="col-sm-10">
        <input
          id="customerAddress"
          v-model="customer.address"
          :disabled="!editMode"
          class="form-control"
          type="text"
        />
      </div>
    </div>
    <button
      v-show="!editMode"
      :disabled="selectedCustomerId === ''"
      class="btn btn-primary me-1"
      @click="editMode = true"
    >
      Edit
    </button>

    <button
      v-show="editMode"
      class="btn btn-secondary me-1"
      @click="editMode = false"
    >
      Cancel
    </button>
    <button v-show="editMode" class="btn btn-danger" @click="doSave">
      Save
    </button>
  </div>
</template>

<script>
import Axios from '@/maxins/axios'
export default {
  name: 'SingleViewEditView',
  mixins: [Axios],
  data() {
    return {
      selectedCustomerId: '',
      customers: [],
      customer: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      },
      editMode: false
    }
  },
  created() {
    this.getCustomerList()
  },
  methods: {
    async getCustomerList() {
      this.customers = await this.$get('http://localhost:8080/customers.json')
      console.log(this.customers)
    },
    async getCustomer() {
      this.editMode = false
      if (this.selectedCustomerId === '') {
        this.customer = {
          name: '',
          company: '',
          email: '',
          phone: '',
          address: ''
        }
      } else {
        // this.customer = await this.$get('http://localhost:8080/customers.json')
        this.customer = this.customers.find(
          (customer) => customer.id === this.selectedCustomerId
        )
      }
    },
    async doSave() {
      if (this.customer.name === '') {
        alert('name을 입력하세요')
      }
    }
  }
}
</script>

<style scoped></style>
