<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked"
                    @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image"
           alt="">
    </div>
    <div class="item-l">
      <span class="item-title">{{product.title}}</span>
      <p class="item-desc">{{product.desc}}</p>
      <div class="item-bottom">
        <span class="item-price">¥{{product.price}}</span>
        <span class="item-count">✖️{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: "cart-list-item",
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    checkClick () {
      this.product.checked = !this.product.checked
      for (let i = 0; i < this.$store.state.cartList.length; i++) {
        if (this.$store.state.cartList[i].checked == true) {
          this.$store.state.all = true
          console.log(this.$store.state.all)
        } else {
          this.$store.state.all = false
        }

      }
    }
  },
  components: {
    CheckButton
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #cccccc;
  padding: 10px 3px;
}

.item-selector {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-img {
}

.item-img img {
  width: 90px;
  border-radius: 5px;
  margin-left: 5px;
}

.item-l {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 7px;
}

.item-title,
.item-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 250px;
}

.item-title {
  font-size: 20px;
  font-weight: 600px;
}

.item-desc {
  margin-bottom: 30px;
}

.item-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  font-size: 18px;
}

.item-price {
  color: orangered;
  margin-left: 10px;
}

.item-count {
  margin-right: 10px;
}
</style>
