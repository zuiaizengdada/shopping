<template>
  <div>
    <Navbar>
      <div slot="left"
           @click="backClick"><img src="~assets/images/common/back.svg"
             alt=""></div>
      <div slot="center"
           class="title">
        <div v-for="(item,index) in titles"
             :key="index"
             class="title-item"
             :class="{active:index === currentIndex }"
             @click="titleClick(index)">{{item}}</div>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

export default {
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,

    }
  },
  components: {
    Navbar
  },

  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick () {
      this.$router.go(-1)
    }

  }
}
</script>

<style scoped>
.active {
  color: var(--color-high-text);
}
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.left img {
  vertical-align: middle;
  margin-bottom: 5px;
}
</style>
