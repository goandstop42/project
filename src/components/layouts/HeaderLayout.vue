<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">개발자의 품격</a>
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              aria-current="page"
              class="nav-link active"
              @click="goToMenu('/')"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToMenu('/ablut')">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToMenu('/databinding/string')"
              >String</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToMenu('/databinding/html')">Html</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            aria-label="Search"
            class="form-control me-2"
            placeholder="Search"
            type="search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style scoped></style>
