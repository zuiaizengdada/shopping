<template>
  <div class="goodslist-item"
       @click="itemClick">
    <img :src="showImg"
         alt="">
    <div class="content">
      <p class="title">{{goodsItem.title}}</p>
      <div class="num">
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }, data () {
    return {

    }
  },
  computed: {
    showImg () {
      return this.goodsItem.image || this.goodsItem.show.img
    }

  },
  components: {

  },
  methods: {
    itemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)

    }
  },
}
</script>

<style scoped>
.goodslist-item {
  width: 48%;
  font-size: 12px;
}

.goodslist-item img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.goodslist-item .title {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.3rem;
}

.goodslist-item .num {
  width: 60%;
  margin: 0 auto;
}
.goodslist-item .collect {
  position: relative;
  margin-left: 15px;
}
.goodslist-item .collect::before {
  content: "";
  position: absolute;
  left: -13px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}

.goodslist-item .price {
  color: var(--color-tint);
}
</style>
