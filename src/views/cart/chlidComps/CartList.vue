<template>
  <div class="cart-list">
    <Scroll class="content"
            ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :product="item"></cart-list-item>
    </Scroll>

  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from 'views/cart/chlidComps/CartListItem'


export default {
  name: "cartl-list",
  data () {
    return {

    }
  },
  components: {
    Scroll,
    CartListItem,

  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  },
  activated () {
    this.$refs.scroll.refresh()

  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}

.content {
  height: 100vh;
  overflow: hidden;
}
</style>
