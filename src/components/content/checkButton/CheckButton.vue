<template>
  <div class="check-botton"
       :class="{active:isChecked}">
    <img src="~assets/images/cart/tick.svg"
         alt="">
  </div>
</template>

<script>

export default {
  name: "check-button",
  props: {
    isChecked: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.check-botton {
  border-radius: 50%;
  border: 2px solid #aaaaaa;
}

.active {
  background-color: hotpink;
}
</style>
