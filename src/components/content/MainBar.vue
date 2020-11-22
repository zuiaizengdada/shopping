<template>
  <div>
    <TabBar>
      <TabBarItem path="/home"
                  activeColor="red">
        <img src="~assets/images/tabbar/home.svg"
             slot="item-icon"
             alt="">
        <img src="~assets/images/tabbar/home_active.svg"
             slot="item-icon-active"
             alt="">
        <div class="tab-bar-item"
             slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category"
                  activeColor="red">
        <img src="~assets/images/tabbar/category.svg"
             alt=""
             slot="item-icon">
        <img src="~assets/images/tabbar/category_active.svg"
             slot="item-icon-active"
             alt="">
        <div class="tab-bar-item"
             slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart"
                  activeColor="red">
        <img src="~assets/images/tabbar/shopcart.svg"
             alt=""
             slot="item-icon">
        <img src="~assets/images/tabbar/shopcart_active.svg"
             slot="item-icon-active"
             alt="">
        <div class="tab-bar-item"
             slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile"
                  activeColor="red">
        <img src="~assets/images/tabbar/profile.svg"
             alt=""
             slot="item-icon">
        <img src="~assets/images/tabbar/profile_active.svg"
             slot="item-icon-active"
             alt="">
        <div class="tab-bar-item"
             slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/tabBar'
import TabBarItem from 'components/common/tabbar/tabBarItem'
export default {
  data () {
    return {

    }
  }, components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
