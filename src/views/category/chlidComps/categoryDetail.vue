<template>
  <div class="category-detail">

    <div class="category-detail-img">
      <div class="category-detail-img-item"
           v-for="(item,index) in cateGoodsList"
           :key="index">
        <img :src="item.image"
             alt="">
        <div class="title">{{item.title}}</div>
      </div>
    </div>
    <!-- <div>切换栏</div> -->
    <tab-control :titles="titles"
                 @tabClick='tabClick'
                 ref="tabControl"></tab-control>
    <div>商品列表</div>
    <!-- <tab-control :titles="titles"
                 @tabClick='tabClick'
                 ref="tabControl"></tab-control>
    <goods-list></goods-list> -->

  </div>

</template>

<script>


import TabControl from 'components/content/tabControl/TabControl'
// import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: "category-detail",
  props: {
    cateGoodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      titles: ['综合', '新品', '销量'],
      detailGoods: {
        'synthesize': { list: [] },
        'news': { list: [] },

      }
    }
  },
  components: {
    TabControl,
    // GoodsList

  },
  methods: {
    tabClick (index) {
      switch (index) {
        case 0:

      }
    }
  }
}
</script>

<style scoped>
.category-detail {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.category-detail-img {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.category-detail-img-item {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 30%;
  font-size: 13px;
}

.category-detail-img img {
  width: 100%;
}
.title {
  margin: 10px 0;
}
</style>
