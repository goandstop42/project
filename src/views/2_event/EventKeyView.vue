<template>
  <div>
    <input v-model="searchText" type="search" @keyup="checkEnter($event)" />
    <input v-model="searchText" type="search" @keyup.="doSearch()" />
    <button @click="doSearch">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  },
  method: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if (event.keycode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

<style scoped></style>
