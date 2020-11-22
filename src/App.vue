<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-bar></main-bar>
  </div>
</template>

<script>

import MainBar from '@/components/content/MainBar'
export default {
  name: 'app',
  components: {
    MainBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
