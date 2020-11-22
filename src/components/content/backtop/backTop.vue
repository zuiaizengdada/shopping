<template>
  <div class="backTop">
    <img src="~assets/images/common/top.png"
         alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.backTop {
  position: fixed;
  bottom: 60px;
  right: 10px;
}

img {
  width: 40px;
  height: 40px;
}
</style>
