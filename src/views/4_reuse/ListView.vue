<template>
  <div class="container">
    <button class="btn btn-primary me-1" @click="doSearch">조회</button>
    <button class="btn btn-danger" @click="doDelete">삭제</button>
    <SimpleGrid
      :headers="headers"
      :items="drinkList"
      :select-type="selectType"
      checkedEventName="change-item"
      checkedKey="drinkId"
      @change-item="changCheckedValue"
    />
  </div>
</template>

<script>
import SimpleGrid from '@/components/fragments/SimpleGrid.vue'

export default {
  components: { SimpleGrid },
  data() {
    return {
      drinkList: [],
      headers: [
        { title: '제품코드', key: 'drinkId' },
        { title: '제품명', key: 'drinkName' },
        { title: '제품가격', key: 'price' }
      ],
      checkedItems: [],
      checkedItem: '',
      selectType: 'radio'
    }
  },
  methods: {
    doSearch() {
      this.drinkList = [
        {
          drinkId: 1,
          drinkName: 'Coffee',
          price: 3.5
        },
        {
          drinkId: 2,
          drinkName: 'Tea',
          price: 2.0
        },
        {
          drinkId: 3,
          drinkName: 'Water',
          price: 1.0
        },
        {
          drinkId: 4,
          drinkName: 'Soda',
          price: 2.5
        },
        {
          drinkId: 5,
          drinkName: 'Juice',
          price: 3.0
        },
        {
          drinkId: 6,
          drinkName: 'Smoothie',
          price: 4.5
        },
        {
          drinkId: 7,
          drinkName: 'Milkshake',
          price: 5.0
        },
        {
          drinkId: 8,
          drinkName: 'Iced Coffee',
          price: 4.0
        },
        {
          drinkId: 9,
          drinkName: 'Hot Chocolate',
          price: 3.5
        },
        {
          drinkId: 10,
          drinkName: 'Lemonade',
          price: 2.5
        }
      ]
    },
    doDelete() {},
    changCheckedValue(data) {
      if (this.selectType === 'checkbox') {
        this.checkedItems = data
      } else if (this.selectType === 'radio') {
        this.checkedItem = data
      }
    }
  }
}
</script>

<style scoped></style>
