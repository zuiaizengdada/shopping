<template>
  <div class="DetailGoodsInfo"
       v-if="Object.keys(DetailGoodsInfo).length !==0">
    <div class="goods-info-desc">
      <div class="start"></div>
      <div class="desc">{{DetailGoodsInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="goods-info-key">{{DetailGoodsInfo.detailImage[0].key}}</div>
    <div class="goods-info-imgs"
         v-for="(item,index) in DetailGoodsInfo.detailImage[0].list"
         :key="index">
      <img v-lazy="item"
           alt=""
           @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    DetailGoodsInfo: {
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
    imgLoad () {
      this.$emit('detailImageLoad')
    }
  },
  components: {

  }
}
</script>

<style scoped>
.DetailGoodsInfo {
  padding-bottom: 15px;
  box-shadow: 0 5px 1px #f4f4f4;
}

.goods-info-desc {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
}
.start,
.end {
  width: 6px;
  height: 6px;
  background-color: black;
}

.start {
  margin-bottom: 15px;
}

.end {
  position: absolute;
  right: 20px;
  bottom: 0;
}

.start::after,
.end::before {
  content: "";
  display: inline-block;
  margin-bottom: 9px;
  width: 80px;
  height: 1px;
  background-color: #ccc;
}

.start::after {
  margin-left: 6px;
}

.end::before {
  margin-left: -80px;
}

.desc {
  font-size: 13px;
}

.goods-info-key {
  margin-left: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}

.goods-info-imgs img {
  width: 100%;
  margin-bottom: 5px;
}
</style>
