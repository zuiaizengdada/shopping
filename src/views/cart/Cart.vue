<template>
  <div class="Cart">
    <!-- 导航 -->
    <navbar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </navbar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'


import CartList from 'views/cart/chlidComps/CartList'
import CartBottomBar from 'views/cart/chlidComps/CartBottomBar'
import { mapGetters } from 'vuex'
export default {
  name: "Cart",

  data () {
    return {

    }
  },
  components: {
    Navbar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: white;
}
</style>
