<template>
  <div class="homeRecommend">
    <div v-for="(item,index) in recommends"
         :key="index"
         class="homeRecommend-item">
      <a :href="item.link">
        <img v-lazy="item.image"
             alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    },
    data () {
      return {

      }
    },
    components: {

    }
  }
}
</script>

<style scoped>
.homeRecommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eeeeee;
}
.homeRecommend .homeRecommend-item {
  flex: 1;
}
.homeRecommend img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
