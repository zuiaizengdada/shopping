<template>
  <div class="detail-bottom-bar">
    <div class="detail-bottom-bar-l item">
      <div class="serve">
        <i class="icon icon-serve"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon icon-shop"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon icon-collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="detail-bottom-bar-r">
      <div class="join"
           @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-bottom-bar",
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    },
    GoodsInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    iid: {
      type: String,
      default () {
        return ""
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    addToCart () {

      // 定义商品存储容器
      const product = {}

      // 将商品信息提取出来
      product.image = this.topImages[0]
      product.title = this.GoodsInfo.title
      product.desc = this.GoodsInfo.desc
      product.price = this.GoodsInfo.realPrice
      product.iid = this.iid
      // 将商品添加到购物车里

      // this.$store.carList.push(product)
      this.$store.commit('addCart', product)
      if (this.$store.state.cartList.length >= 1) {
        this.$toast.showToast("添加购物车成功")
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
.detail-bottom-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 49px;
  background-color: #ffffff;
  display: flex;
}

.detail-bottom-bar-l {
  flex: 1;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
}

.item {
  padding: 10px 10px 0;
}

.icon {
  background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
  display: block;
  width: 22px;
  height: 22px;
  margin-bottom: 3px;
  margin-left: 3px;
}

.icon-serve {
  background-position: 0 -54px;
}

.icon-shop {
  background-position: 0 -99px;
}

.icon-collect {
  background-position: 0 0;
}

.detail-bottom-bar-r {
  flex: 1;
  display: flex;
}

.join {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}

.buy {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-tint);
  color: white;
}
</style>
