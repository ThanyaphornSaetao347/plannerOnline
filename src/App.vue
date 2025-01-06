<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
/* Add global styles if needed */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
</style>
