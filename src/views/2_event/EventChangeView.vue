<template>
  <div>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <option value="">=== 도시선택 ===</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <select>
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '01', title: '서울' },
        { cityCode: '02', title: '부산' },
        { cityCode: '03', title: '제주' }
      ],
      dongList: [
        { cityCode: '01', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '01', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '01', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '01', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '02', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '03', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '03', dongCode: '2', dongTitle: '제주 2동' },
        { cityCode: '03', dongCode: '3', dongTitle: '제주 3동' },
        { cityCode: '03', dongCode: '4', dongTitle: '제주 4동' }
      ],
      selectedDongList: []
    }
  },
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>

<style scoped></style>
