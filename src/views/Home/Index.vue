<template>
  <div class="container">
    <div class="header">
      <PageHeader/>
    </div>
    <div class="main-container">
      <div class="wrapper">
        <div class="swiper-wrapper">
<!--          <my-swiper :banner-list="bannerList"></my-swiper>-->
        </div>
        <div class="focus">
          <div class="focus-item" v-for="(item, index) in focus" :key="index">
            <focus :title="item.title" :thumbs="item.image"></focus>
          </div>
        </div>
      </div>
      <div class="main-wrapper">
        <div class="main-left">
          <div class="artcle-list">
            <div class="title-wrapper">
              <title-bar></title-bar>
            </div>
            <div class="artcle-item" v-for="(item,index) in 10" :key="index">
              <artcle-item></artcle-item>
            </div>
          </div>
          <div class="loadmore">
            <load-more></load-more>
          </div>
        </div>
        <div class="main-right">
          <div class="news">
            <div class="title-wrapper">
              <title-bar title='精选快讯'></title-bar>
            </div>
            <div class="flash-news">
              <flash-news :news="flashNews"></flash-news>
            </div>
          </div>
          <div class="news">
            <div class="title-wrapper">
              <title-bar title='原创精选'></title-bar>
            </div>
            <news-bar></news-bar>
          </div>
          <div class="news">
            <div class="title-wrapper">
              <title-bar title='热文排行'></title-bar>
            </div>
            <news-bar></news-bar>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import MySwiper from '@/components/MySwiper'
import bannerImg from '@/assets/images/banner.png'
import focus1 from '@/assets/images/focus1.jpg'
import focus2 from '@/assets/images/focus2.jpg'
import Focus from '@/components/Focus'
import ArtcleItem from '@/components/ArtcleItem'
import TitleBar from '@/components/TitleBar'
import PageFooter from '@/components/PageFooter'
import LoadMore from '@/components/LoadMore'
import NewsBar from '../../components/NewsBar'
import FlashNews from '../../components/FlashNews'

export default {
  name: 'HomePage',
  components: {
    PageHeader,
    MySwiper,
    Focus,
    ArtcleItem,
    TitleBar,
    LoadMore,
    PageFooter,
    NewsBar,
    FlashNews
  },
  data() {
    return {
      flashNews: [
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者1',
          'createTime': '2022-01-22'
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者2',
          'createTime': '2022-01-22'
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者3',
          'createTime': '2022-01-22'
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者4',
          'createTime': '2022-01-22'
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者5',
          'createTime': '2022-01-22'
        }
      ],
      bannerList: [
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者1',
          'image': bannerImg
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者2',
          'image': focus1
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者3',
          'image': bannerImg
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者4',
          'image': focus1
        },
        {
          'title': '王老吉“姓氏罐”破圈背后，我们需要重新审视消费者5',
          'image': bannerImg
        }
      ],
      focus: [
        {
          'title': '王老吉“姓氏罐”破圈背后',
          'image': focus1
        },
        {
          'title': '王老吉“姓氏罐”破圈背后',
          'image': focus1
        },
        {
          'title': '王老吉“姓氏罐”破圈背后',
          'image': focus1
        },
        {
          'title': '王老吉“姓氏罐”破圈背后',
          'image': focus2
        }
      ]
    }
  },
  methods: {
    loadmore: function () {
      console.log('主页loadmore')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #f5f7fd;
}

.container .header {
  width: 100%;
}

.container .main-container {
  width: 1250px;
  margin: 30px 0;
  min-height: 800px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-direction: column;
}

.container .main-container .main-wrapper {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: 20px;
}

.container .main-container .main-wrapper .main-left {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 900px;
}

.container .wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}

.container .main-left .artcle-list .title-wrapper {
  margin-bottom: 10px;
  background: #ffffff;
}

.container .main-left .artcle-list {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
}

.container .main-left .artcle-list .artcle-item {
  margin-bottom: 10px;
}

.container .main-container .swiper-wrapper {
  width: 705px;
  height: 366px;
  display: flex;
  box-sizing: border-box;
}

.container .main-container .focus {
  width: 530px;
  height: 366px;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.container .main-container .focus .focus-item {
  height: 178px;
  width: 260px;
}

.container .main-left .loadmore {
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

/*右侧*/
.container .main-container .main-wrapper .main-right {
  width: 335px;
}

.container .main-container .main-wrapper .main-right .news {
  background: #ffffff;
  margin-bottom: 20px;
}

.container .main-container .main-wrapper .main-right .flash-news{
  width: 100%;
  height: 380px;
  display: flex;
  box-sizing: border-box;

}

.container .footer {
  width: 100%;
  background: #1d2431;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
}
</style>
