<script setup>
import { RouterView } from "vue-router";
import Nav from "../src/components/Nav.vue";
</script>

<template>
  <Nav></Nav>
  <div class="container-fluid mt-3">
    <RouterView />
  </div>
</template>
