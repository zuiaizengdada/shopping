<template>
  <div class="DetailCommentInfo"
       v-if="Object.keys(commentInfo).length !==0">
    <div class="info-header">
      <span class="info-title">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="info-user">
      <div class="user-img">
        <img :src="commentInfo.user.avatar"
             alt="">
      </div>
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <div class="evaluation">{{commentInfo.content}}</div>
      <div class="info-others">
        <span class="info-date">{{commentInfo.created | DateFormat(commentInfo.created)}}</span>
        <span class="info-style">{{commentInfo.style}}</span>
      </div>
      <div class="info-img"
           v-if="commentInfo.images">
        <div v-for="(item,index) in commentInfo.images"
             :key="index"><img :src="item"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
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
  mounted () {

  },
  components: {

  }
}
</script>

<style scoped>
.DetailCommentInfo {
  padding: 20px 10px 20px;
  border-bottom: 1px solid #f4f4f4;
  margin-bottom: 10px;
}

.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 0;
  border-bottom: 1px solid #f4f4f4;
}

.more {
  font-size: 13px;
}

.info-user {
  display: flex;
  align-items: center;
  padding: 15px 0;
}

.user-img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.user-name {
  margin-left: 10px;
}

.info-detail {
  display: flex;
  flex-direction: column;
}

.evaluation {
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 10px;
}

.info-others {
  color: var(--color-text);
  font-size: 14px;
}

.info-date {
  margin-right: 10px;
}

.info-img {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}

.info-img img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
</style>
