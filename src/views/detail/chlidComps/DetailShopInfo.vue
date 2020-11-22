<template>
  <div class="DetailShopInfo">
    <div class="shopinfo-title">
      <img :src="ShopInfo.logo"
           alt="">
      <span class="shopinfo-name">
        {{ShopInfo.name}}
      </span>
    </div>
    <div class="shopinfo-detail">
      <div class="shopinfo-l">
        <div class="shopinfo-sell">
          <div class="shopinfo-sell-count">
            {{ShopInfo.sells | FilterSellCount(ShopInfo.sells)}}
          </div>
          <span class="shopinfo-sell-text">
            总销量
          </span>
        </div>
        <div class="shopinfo-goods">
          <div class="shopinfo-goods-count">
            {{ShopInfo.goodsCount}}
          </div>
          <span class="shopinfo-goods-text">
            全部宝贝
          </span>
        </div>
      </div>
      <div class="shopinfo-r">
        <div class="shopinfo-evaluation">
          <div class="shopinfo-evaluation-item"
               v-for="(item,index) in ShopInfo.score"
               :key="index">
            <span class="item-name">{{item.name}}</span>
            <span class="item-score">{{item.score}}</span>
            <span class="item-evaluation-text"
                  :class="isBetter(item.isBetter)">{{item.isBetter?'高':'低'}}</span>
          </div>

        </div>
      </div>

    </div>
    <div class="goshop">
      进店逛逛
    </div>

  </div>

</template>

<script>

export default {
  name: "DetailShopInfo",
  props: {
    ShopInfo: {
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

  computed: {
    isBetter () {
      return (isBetter) => {
        if (isBetter) {
          return 'isBetter'
        } else {
          return 'isNotBetter'
        }
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
.isBetter {
  background-color: red;
}
.isNotBetter {
  background-color: green;
}

.DetailShopInfo {
  padding: 7px;
  color: var(--color-text);
  padding-bottom: 40px;
  box-shadow: 0 3px 3px #f4f4f4;
}

.shopinfo-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0 25px 0;
}

.shopinfo-title img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  margin-right: 20px;
}
.shopinfo-title .shopinfo-name {
  font-size: 16px;
}

.shopinfo-detail {
  display: flex;
}

.shopinfo-l,
.shopinfo-r {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
}

.shopinfo-l {
  border-right: 1px solid #cccccc;
}

.shopinfo-sell {
  margin-right: 20px;
}

.shopinfo-sell-count,
.shopinfo-goods-count {
  margin-bottom: 7px;
  font-weight: 600;
}

.shopinfo-sell-text,
.shopinfo-goods-text {
  font-size: 10px;
}

.shopinfo-evaluation {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-around;
}

.shopinfo-evaluation-item {
  font-size: 10px;
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
}

.shopinfo-evaluation-item:not(:last-child) {
  margin-bottom: 10px;
}

.item-evaluation-text {
  color: #fff;
}
.goshop {
  background-color: #f6f5fb;
  font-size: 13px;
  padding: 7px;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  margin: 20px auto 0;
}
</style>
