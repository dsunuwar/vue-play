<template>
  <div id="app">
    <CustomerInfo></CustomerInfo>
  </div>
</template>

<script>
import CustomerInfo from './components/CustomerInfo.vue';

export default {
  name: 'App',
  components: {
    CustomerInfo
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
</style>

<style lang="scss" scoped></style>
