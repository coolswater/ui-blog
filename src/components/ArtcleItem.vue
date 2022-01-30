<template>
  <div class="artcle-item">
    <div class="artcle-thumb">
      <a> <img :src="thumb" alt=""></a>
      <i class="artcle-category">{{ category }}</i>
    </div>
    <div class="artcle-info">
      <div class="artcle-wraper">
        <a class="artcle-title">{{ title }}</a>
        <p class="artcle-desc">{{ desc }}</p>
      </div>
      <div class="artcle-subbar">
        <div class="artcle-author">
          <img :src="userProfile" alt="" width="36" height="36">
          <div class="artcle-author-meta">
            <div class="nickname">{{ nickname }}</div>
            <div>{{ createTime }}</div>
          </div>
        </div>
        <div class="artcle-author-meta">{{ hits }} 浏览</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtcleItem',
  props: {
    title: {
      type: String,
      default: '2022，陌生人社交的钱还好赚吗？'
    },
    category: {
      type: String,
      default: '后端开发'
    },
    thumb: {
      type: String,
      default: 'https://image.yunyingpai.com/wp/2022/01/7iqtzoqjiA9Es240iaSe.jpg!/both/472x286'
    },
    desc: {
      type: String,
      default: '编辑导语：几乎每一位职场人，都知道、甚至对“摸鱼”一词深有体会，甚至有人开发出了“摸鱼”的各种好手段。与此同时，领导也开启了反摸鱼雷达，一场场摸鱼与反摸鱼的战争...'
    },
    userProfile: {
      type: String,
      default: 'http://image.woshipm.com/wp-files/2019/01/tO40deYeAyNna7IbwZnJ.jpg!/both/240x240'
    },
    nickname: {
      type: String,
      default: '孤独行者'
    },
    createTime: {
      type: Date,
      default: '2022-01-22'
    },
    hits: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style scoped>
.artcle-item {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
}

.artcle-item .artcle-thumb {
  position: relative;
}

.artcle-item .artcle-thumb img {
  width: 236px;
  height: 143px;
  padding: 15px;
}

.artcle-item .artcle-thumb .artcle-category {
  position: absolute;
  left: 30px;
  top: 25px;
  padding: 0 6px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-size: 12px;
  line-height: 20px;
}

.artcle-item .artcle-info {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 15px 15px 0;
  flex: 1 1 auto;
}

.artcle-item .artcle-info .artcle-wraper {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
}

.artcle-item .artcle-info .artcle-title {
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 5px;
  transition: .5s;
  font-weight: 700;
}

.artcle-item .artcle-info .artcle-desc {
  font-size: 14px;
  color: rgba(0, 0, 0, .6);
  text-align: justify;
  margin: 0;
  line-height: 1.8;
}

.artcle-item .artcle-info .artcle-subbar {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.artcle-item .artcle-info .artcle-subbar .artcle-author {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}

.artcle-item .artcle-info .artcle-subbar .artcle-author-meta {
  font-size: 12px;
  color: rgba(0, 0, 0, .5);
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.artcle-item .artcle-info .artcle-subbar .artcle-author-meta .nickname {
  color: rgba(0, 0, 0, .84);
}

.artcle-item .artcle-info .artcle-subbar .artcle-author img {
  border-radius: 36px;
  margin-right: 10px;
}
</style>
