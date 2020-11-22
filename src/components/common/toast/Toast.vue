<template>
  <div class="Toast"
       v-show="show"
       :class="{index:isIndex}">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",

  data () {
    return {
      msg: '',
      show: false,
      isIndex: false
    }
  },
  methods: {
    showToast (msg, time = 2000) {
      this.show = true,
        this.msg = msg,
        this.isIndex = true
      setTimeout(() => {
        this.show = false,
          this.msg = ''
        this.isIndex = false
      }, time);
    }
  }
}
</script>

<style scoped>
.Toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
}

.index {
  z-index: 100;
}
</style>
