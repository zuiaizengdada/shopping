<template>
  <div class="wrapper2">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default () {
        return 1
      }
    },
    pullUpLoad: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 创建BScroll对象
    this.scroll = new BScroll('.wrapper2', {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })

    // 监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    // 监听上拉刷新事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  components: {

  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll.finishPullUp()
    },
    getScrollY () {
      return this.scroll ? this.scroll.y : 0
    },
    refresh () {
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
</style>
