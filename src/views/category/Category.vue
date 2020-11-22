<template>
  <div class="category">
    <navbar class="category-nav">
      <h3 slot="center">商品分类</h3>
    </navbar>
    <div class="category-content">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <category-list :categoryList="categoryList"
                       @liClick="liClick">
        </category-list>
      </van-list>
      <scroll class="scroll-detail">
        <category-detail :cateGoodsList="cateGoodsList"></category-detail>
      </scroll>
    </div>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import categoryList from 'views/category/chlidComps/categoryList'
import categoryDetail from 'views/category/chlidComps/categoryDetail'

import Scroll from 'components/common/scroll/Scroll'

import { getCategoryList, getCategoryGoods } from 'network/category'

export default {
  name: 'category',
  data () {
    return {
      categoryList: [],
      maitKey: 3627,
      cateGoodsList: [],
      loading: false,
      finished: false,

    }
  },
  components: {
    Navbar,
    Scroll,
    categoryList,
    categoryDetail
  },
  created () {
    this.getCategoryList()
    this.getCategoryGoods(this.maitKey)
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.categoryList.push(this.categoryList.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.categoryList.length >= 40) {
          this.finished = true;
          console.log(this.finished)
        }
      }, 1000);
    },

    getCategoryList () {
      getCategoryList().then(res => {
        this.categoryList = res.data.category.list
      })
    },
    getCategoryGoods (maitKey) {
      getCategoryGoods(maitKey).then(res => {
        this.cateGoodsList = res.data.list
      })
    },
    liClick (index) {
      this.maitKey = this.categoryList[index].maitKey
      this.getCategoryGoods(this.maitKey)
    }
  }

}
</script>

<style scoped>
.category-content {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
}

.category-nav {
  background-color: pink;
  color: white;
}

.scroll-list {
  flex: 2;
  height: calc(100% - 49px - 44px);
  overflow: hidden;
}

.scroll-detail {
  flex: 5;
  height: calc(100% - 49px - 44px);
  overflow: hidden;
}
</style>
