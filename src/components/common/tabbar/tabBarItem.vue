<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveText">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {


    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.path
      // return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveColor () {
      return this.isActive ? { color: this.activeColor } : {}
    },
    isActiveText () {
      return this.isActive ? this.isActiveColor : '';
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }}
</script>

<style scoped>
/* .red {
  color: red;
} */
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
</style>
