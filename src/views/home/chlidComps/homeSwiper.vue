<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item,index) in banners"
                    :key="index">
        <a :href="item.link">
          <img class="swiper-img"
               :src="item.image"
               alt=""
               @load="imgLoad">
        </a>
      </swiper-slide>

      <div class="swiper-pagination"
           slot="pagination"></div> <!-- 分页 -->
      <div class="swiper-button-prev swiper-button-white"
           slot="button-prev"></div> <!-- 箭头左 -->
      <div class="swiper-button-next swiper-button-white"
           slot="button-next"></div> <!-- 箭头右 -->
    </swiper>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'
export default {

  name: 'homeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    },
    recommends: {
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
  methods: {
    imgLoad () {
      this.$emit('swiperImgLoad');
    }
  },
  computed: {
    showSwiper () {
      return this.banners.length
    }
  }

}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: white;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 215px;
  padding-bottom: 31.25%;
  background-color: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
