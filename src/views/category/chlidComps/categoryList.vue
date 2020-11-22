<template>
  <div class="category-list">
    <ul v-for="(item,index) in categoryList"
        :key="index">
      <li @click="liClick(index)"
          :class="{active:currentIndex == index}">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "category-list",
  props: {
    categoryList: {
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
  components: {

  },
  methods: {
    liClick (index) {
      this.currentIndex = index
      this.$emit('liClick', index)
    }
  }
}
</script>

<style scoped>
ul {
  background-color: #f7f7f7;
}

li {
  padding: 12px 10px;
  line-height: 36px;
  text-align: center;
  color: var(--color-text);
  font-size: 13px;
}

.active {
  background-color: #fff;
  border-left: 4px solid #cf7381;
  color: var(--color-tint);
}
</style>
