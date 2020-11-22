<template>
  <div class="detail">
    <DetailNavBar class="detail-nav"
                  @titleClick="titleClick"></DetailNavBar>

    <Scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :GoodsInfo="GoodsInfo">></detail-base-info>
      <detail-shop-info :ShopInfo="ShopInfo"></detail-shop-info>
      <detail-goods-info :DetailGoodsInfo="DetailGoodsInfo"
                         @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-params-info :GoodsParam="GoodsParam"
                          ref="params"></detail-params-info>
      <detail-comment-info :commentInfo="commentInfo"
                           ref="comment"></detail-comment-info>
      <goods-list :goods="Recommends"
                  ref="recommend"></goods-list>
    </Scroll>
    <detail-bottom-bar :topImages="topImages"
                       :GoodsInfo="GoodsInfo"
                       :iid="iid"></detail-bottom-bar>
    <back-top @click.native="backtop"
              v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/chlidComps/DetailNavBar'
import DetailSwiper from 'views/detail/chlidComps/DetailSwiper'
import DetailBaseInfo from 'views/detail/chlidComps/DetailBaseInfo'
import DetailShopInfo from 'views/detail/chlidComps/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/chlidComps/DetailGoodsInfo'
import DetailParamsInfo from 'views/detail/chlidComps/DetailParamsInfo'
import DetailCommentInfo from 'views/detail/chlidComps/DetailCommentInfo'
import DetailBottomBar from 'views/detail/chlidComps/DetailBottomBar'


import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'



import { getDetailGoods, GoodsInfo, ShopInfo, GoodsParam, getRecommend } from 'network/detail'
import { backTopMixin } from 'common/mixin'
export default {
  name: "Detail",
  mixins: [backTopMixin],
  data () {
    return {
      iid: null,

      topImages: [],
      GoodsInfo: {},
      ShopInfo: {},
      DetailGoodsInfo: {},
      GoodsParam: {},
      commentInfo: {},
      Recommends: [],
      themeTopYs: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,

  },
  created () {
    this.iid = this.$route.params.iid;
    getDetailGoods(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
      this.GoodsInfo = new GoodsInfo(res.result.columns, res.result.itemInfo, res.result.shopInfo.services)
      this.ShopInfo = new ShopInfo(res.result.shopInfo)
      this.DetailGoodsInfo = res.result.detailInfo
      this.GoodsParam = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
      this.commentInfo = res.result.rate.cRate !== 0 ? res.result.rate.list[0] : ''
    })
    getRecommend().then(res => {
      this.Recommends = res.data.list
    })
  },
  methods: {
    detailImageLoad () {
      this.$refs.scroll.refresh()
    },
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentScroll (position) {
      this.isShow = Math.abs(position.y) > 1000
    }
  },
  updated () {
    this.themeTopYs.push(0);
    this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail .detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail .content {
  /* height: 100%;
  position: absolute;
  top: 44px;
  right: 0;
  left: 0; */
  background-color: #fff;
  height: calc(100% - 49px - 44px);
}
</style>
