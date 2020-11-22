<template>
  <div class="wrapper DetailSwiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in topImages"
                    :key="index">
        <img class="swiper-img"
             :src="item">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination">
      </div> <!-- 分页 -->
    </swiper>
  </div>

</template>

<script>
import 'swiper/swiper-bundle.css'
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        //自动轮播
        autoplay: {
          delay: 3000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      },
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: pink;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 300px;
  padding-bottom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
