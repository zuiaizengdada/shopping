<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         :key="index"
         class="tab-control-item"
         :class="isActive(index)"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  },
  computed: {
    isActive () {
      return index => {
        return this.currentIndex === index ? 'active' : '';
      }
    }
  }
}
</script>

<style scoped>
.active {
  color: var(--color-tint);
}
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 999;
}

.tab-control .tab-control-item {
  flex: 1;
}

.tab-control .tab-control-item span {
  padding: 5px;
}

.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
