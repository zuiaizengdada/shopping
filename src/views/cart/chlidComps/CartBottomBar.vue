<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button class="check-botton"
                    @click.native="checkedAll"
                    :class="{active:isChecked}"></check-button>
      <span>全选</span>
    </div>
    <div class="sum">
      合计:¥{{allPrice}}
    </div>
    <div class="pay"
         @click="payClick">
      去结算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'
export default {
  name: "bottom-bar",
  data () {
    return {
      isChecked: false
    }
  },
  methods: {
    checkedAll () {
      this.$store.commit('checkedAll')
      if (this.cartLength == 0) {
        this.isChecked = this.$store.state.all
      } else {
        this.isChecked = !this.$store.state.all
      }

      // if(this.$store.state.cartList.checked){
      //   this.isChecked
      // }
    },
    payClick () {
      if (this.cartLength == 0) {
        this.$toast.showToast('请先添加商品至购物车')
      } else if (this.checkedLength == 0) {
        this.$toast.showToast('请先选择要结算的商品')
      }
    }
  },
  computed: {
    ...mapGetters(['allPrice', 'checkedLength', 'cartLength'])

  },
  components: {
    CheckButton
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 147px;
  left: 0;
  height: 50px;
  background-color: #ececec;
}

.check-all {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 3px;
}

.check-botton {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.sum {
  margin-right: 60px;
}

.pay {
  padding: 15px;
  background-color: red;
  color: white;
}

.active {
  background-color: hotpink;
}
</style>
