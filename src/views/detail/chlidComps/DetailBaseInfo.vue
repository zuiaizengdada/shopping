<template>
  <div class="DetailBaseInfo"
       v-if="Object.keys(GoodsInfo).length !== 0">
    <div class="info-title">
      {{GoodsInfo.title}}
    </div>
    <div class="info-price">
      <span class="new-price">{{GoodsInfo.newPrice}}</span>
      <del>
        <span class="old-price">{{GoodsInfo.oldPrice}}</span>
      </del>
      <span class="discount"
            v-if="GoodsInfo.discount">{{GoodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span class="salesVolume">{{GoodsInfo.columns[0]}}</span>
      <span class="collection">{{GoodsInfo.columns[1]}}</span>
      <span class="post">{{GoodsInfo.services[GoodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-serve">
      <div class="info-serve-item"
           v-for="index in GoodsInfo.services.length-1"
           :key="index">

        <img :src="GoodsInfo.services[index-1].icon"
             alt="">
        <span class="info-serve-item-text">{{GoodsInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    GoodsInfo: {
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
  components: {

  }
}
</script>

<style scoped>
.DetailBaseInfo {
  padding: 13px 7px;
}

.info-title {
  margin-bottom: 10px;
}

.info-price {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
}

.new-price {
  color: var(--color-tint);
  font-size: 23px;
  margin-right: 10px;
}

.old-price {
  font-size: 10px;
  margin-right: 10px;
  color: #b4b4b4;
}

.discount {
  background-color: var(--color-high-text);
  color: white;
  width: 60px;
  text-align: center;
  border-radius: 10px;
  font-size: 13px;
  padding: 4px;
}

.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #b4b4b4;
  padding-bottom: 8px;
  border-bottom: 1px solid #f8f8f8;
}

.info-serve {
  display: flex;
  justify-content: space-between;
  padding: 19px 0;
  font-size: 13px;
  color: #868686;
  box-shadow: 0 3px 3px #f4f4f4;
}

.info-serve img {
  width: 13px;
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>
