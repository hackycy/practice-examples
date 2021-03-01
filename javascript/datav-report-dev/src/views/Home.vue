<template>
  <div class="home">
    <top-view />
  </div>
</template>

<script>
import TopView from '../components/TopView/TopView.vue'

export default {
  name: 'Home',
  components: {
    TopView
  }
}
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>
