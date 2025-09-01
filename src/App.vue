<template>
  <div>
    <Navbar />  <!-- استدعاء Navbar -->
    <router-view /> <!-- صفحات الراوتر -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
