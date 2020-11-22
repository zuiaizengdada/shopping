<template>
  <div id="home">
    <NavBar class="home-nav">
      <h3 slot="center">购物街</h3>
    </NavBar>
    <TabControl :titles="titles"
                @tabClick='tabClick'
                ref="topTabControl"
                :class="isTabFix? 'tabFix':''"
                class="tab-control"
                v-if="isTabFix">
    </TabControl>
    <Scroll class="scroll-region"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <homeSwiper :banners="banners"
                  @swiperImgLoad.once="swiperImgLoad"></homeSwiper>
      <homeRecommend :recommends="recommends"></homeRecommend>
      <feature></feature>
      <TabControl :titles="titles"
                  @tabClick='tabClick'
                  ref="tabControl"
                  :class="isTabFix? 'tabFix':''">
      </TabControl>
      <GoodsList :goods="showType"></GoodsList>
    </Scroll>
    <back-top @click.native="backtop"
              v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar"
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/backTop'


import { getHomeMultidata, getHomeGoods } from 'network/home'


import homeSwiper from './chlidComps/homeSwiper'
import homeRecommend from './chlidComps/homeRecommend'
import feature from './chlidComps/Feature'

export default {
  data () {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: null,
      tabBarOffsetTop: 0,
      isTabFix: false,
      scrollY: 0
    }
  },
  computed: {
    showType () {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    homeRecommend,
    homeSwiper,
    feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  methods: {
    // 事件监听相关方法
    backtop () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      if (this.$refs.topTabControl !== undefined) {
        this.$refs.tabControl.currentIndex = index
        this.$refs.topTabControl.currentIndex = index
        // console.log(this.$refs.topTabControl.currentIndex)
      }
    },
    contentScroll (position) {
      this.isShow = Math.abs(position.y) > 1000
      this.isTabFix = Math.abs(position.y) > this.tabBarOffsetTop
    },

    loadMore () {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.refresh()

    },
    swiperImgLoad () {
      this.tabBarOffsetTop = this.$refs.tabControl.$el.offsetTop
    },

    // 网络请求方法
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },

    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.scrollY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: pink;
  color: white;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.scroll-region {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}

.tabFix {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
}
</style>
