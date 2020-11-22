<template>
  <div class="DetailParamsInfo"
       v-if="Object.keys(GoodsParam).length !== 0">
    <table v-for="(table,indexX) in GoodsParam.sizes"
           :key="indexX"
           class="info-size">
      <tr v-for="(tr,indexY) in table"
          :key="indexY">
        <td v-for="(td,indexZ) in tr"
            :key="indexZ">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(item,index) in GoodsParam.infos"
          :key="index">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="GoodsParam.images">
      <img v-lazy="GoodsParam.images[0]"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    GoodsParam: {
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
.DetailParamsInfo {
  padding-bottom: 20px;
  box-shadow: 0 3px 3px #f4f4f4;
}
.info-size {
  width: 100%;
  padding: 30px 10px 0;
}

.info-size tr {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
}

.info-size td {
  width: 70px;
}

.info-params {
  width: 100%;
  padding: 0 10px 0;
}

.info-params tr {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
}

.info-params td {
  margin-right: 60px;
}

.info-value {
  color: var(--color-tint);
}
</style>
