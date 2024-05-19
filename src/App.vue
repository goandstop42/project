<template>
  <HeaderLayout />
  <div class="container">
    <router-view />
  </div>
  <FooterLayout />
</template>

<style></style>
<script setup>
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
</script>
