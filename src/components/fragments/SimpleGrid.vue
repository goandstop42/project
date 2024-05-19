<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-if="selectType === 'checkbox'">
          <input
            class="form-check-input"
            type="checkbox"
            @change="checkAll($event)"
          />
        </th>
        <th v-else-if="selectType === 'radio'">
          <input
            class="form-check-input"
            type="radio"
            @change="checkAll($event)"
          />
        </th>
        <th v-for="(header, index) in headers" :key="index">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in items" :key="i">
        <td v-if="selectType === 'checkbox'">
          <input
            v-model="checkedItems"
            :value="item[checkedKey]"
            class="form-check-input"
            type="checkbox"
            @change="doChecked"
          />
        </td>
        <td v-else-if="selectType === 'radio'">
          <input
            v-model="checkedItem"
            :value="item[checkedKey]"
            class="form-check-input"
            type="radio"
            @change="doChecked"
          />
        </td>
        <td v-for="th in headers" :key="th.key">{{ item[th.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    checkedEventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      checkedItems: [],
      checkedItem: ''
    }
  },
  methods: {
    doChecked() {
      if (this.selectType === 'checkbox') {
        this.$emit(this.checkedEventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.checkedEventName, this.checkedItem)
      }
    },
    checkAll(event) {
      console.log(event.target.checked)
      const checkedItems = []
      if (event.target.checked) {
        this.items.forEach((item) => checkedItems.push(item[this.checkedKey]))
      }
    }
  }
}
</script>

<style scoped></style>
