<template>
  <div>
    <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
    <div class="dingzhi" @click="handleBlur">
      <div class="big-title">
        <div class="title-bar">
          <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
          <span>定制需求开发</span>
        </div>
      </div>
      <div class="pic-box">
        <div class="pic" style="background:url(../../../static/images/img/pic1@2x.png)">
          <div class="small-title">微信(微商城 / 微分销)</div>
          <div class="small-con">打入微信时长，抢占海量用户做推广</div>
        </div>
        <div class="pic" style="background:url(../../../static/images/img/pic2@2x.png);margin-left:0.89%;">
          <div class="small-title">后台管理(平台后台 / 商家后台)</div>
          <div class="small-con">平台管理整体运营商家管理入驻店铺</div>
        </div>
        <div class="pic" style="background:url(../../../static/images/img/pic3@2x.png);margin-top:3px;">
          <div class="small-title">PC端(购物商城)</div>
          <div class="small-con">完整购物体验和企业信息展示、商家入驻等</div>
        </div>
        <div class="pic" style="background:url(../../../static/images/img/pic4@2x.png);margin-left:0.89%;margin-top:3px;">
          <div class="small-title">APP(iPhone / Android)</div>
          <div class="small-con">搭建原生APP，聚拢用户购物、交流...</div>
        </div>
      </div>
      <div class="text-con">
        通过自建商城实现在线互动营销、提供开放数据等体系化一站式服务，
        秉承实现全网价值营销的理念，以数据为核心，结合营销、内容、创意、技术、研发等多维度.多渠道，
        多生态，丰富您的业务场景。
        <br>打造一整套真正属于你的商城系统。
        <br>涵盖平台：PC、微商城 、手机
      </div>
      <div class="thred-box" v-for="(item, index) in thredList" :key="item.id">
        <div class="thred-left">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </div>
        <div class="thred-right">{{item.container}}</div>
      </div>
      <div class="bottom-box">
        <img v-lazy="imgUrl1" alt="">
        <img v-lazy="imgUrl2" alt="">
        <img v-lazy="imgUrl3" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "dingzhi",
  data() {
    return {
      screenWidth:0,
      imgUrl1: "../../../static/images/img/1@2x.png",
      imgUrl2: "../../../static/images/img/2@2x.png",
      imgUrl3: "../../../static/images/img/3@2x.png",
      titleName: "商城系统",
      isClose: false,
      thredList: [
        {
          title: "独家定制",
          container:
            "原生态开发模式，提供集网站策划，视觉设计，功能交互，体验，程序开发于一体的定制化商城建设解决方案。",
          imgUrl: "../../../static/images/icons/design@2x.png",
          id: 0
        },
        {
          title: "完备的功能体系",
          container:
            "页面管理系统，商品展示系统，订单售后系统。拥有自主研发技术框架，支持线上线下无缝对接，保证业务数据的完整性和延续性。",
          imgUrl: "../../../static/images/icons/system@2x.png",
          id: 1
        },
        {
          title: "专业的服务",
          container:
            "由需求到整理，测试到上线，以最实惠的价格，打造最优质的产品",
          imgUrl: "../../../static/images/icons/heart@2x.png",
          id: 2
        }
      ],
      picList: [
        {
          title: "微信(微商城 / 微分销)",
          container: "打入微信时长，抢占海量用户做推广",
          imgUrl: "../../../static/images/img/pic1@2x.png",
          id: 0
        },
        {
          title: "后台管理(平台后台 / 商家后台)",
          container: "平台管理整体运营商家管理入驻店铺",
          imgUrl: "../../../static/images/img/pic2@2x.png",
          id: 1
        },
        {
          title: "PC端(购物商城)",
          container: "完整购物体验和企业信息展示、商家入驻等",
          imgUrl: "../../../static/images/img/pic3@2x.png",
          id: 2
        },
        {
          title: "APP(iPhone / Android)",
          container: "搭建原生APP，聚拢用户购物、交流...",
          imgUrl: "../../../static/images/img/pic4@2x.png",
          id: 3
        }
      ]
    };
  },
  components: {
    DropDown
  },
  methods: {
    handleBlur() {
      this.isClose = true;
    },
    isRotate(rotate) {
      if (rotate == false) {
        this.isClose = false;
      }
    }
  }
};
</script>

<style scoped>
.dingzhi {
  padding: 20px 5%;
  background: white;
  margin-top: 20px;
}
.title-box {
  display: flex;
  align-items: center;
}
.icon-shixiangyoujiantou- {
  font-size: 26px;
  color: #f1b84b;
  margin-left: -30px;
}
.title {
  font-size: 16px;
  color: #333333;
  font-family: FZLTZHK--GBK1-0;
  font-weight: bold;
}
.pic {
  width: 49.5%;
  float: left;
  height: 90px;
  background: no-repeat;
  background-size: 100% auto;
  text-align: center;
}
.small-title {
  margin-top:7%;
  font-size: 10px;
  color: #ffffff;
}
.small-con {
  opacity: 0.78;
  font-size: 8px;
  color: #ffffff;
  padding: 0 5px;
  margin-top: 5px;
  font-weight: 100;
}
.pic-box:after {
  clear: both;
  display: block;
  content: "";
}
.pic-box {
  margin-top: 15px;
}
.text-con {
  color: #333333;
  font-size: 12px;
  margin-top: 20px;
}
.thred-box {
  margin-top: 45px;
  justify-content: space-between;
  align-items: center;
}
.thred-box::after {
  clear: both;
  display: block;
  content: "";
}
.thred-left {
  width: 33%;
  text-align: center;
  float: left;
  margin-top: 5px;
}
.thred-left > img {
  width: 40px;
  height: 40px;
}
.thred-left > p {
  color: #333333;
  font-size: 14px;
  margin-top: 5px;
}
.thred-right {
  font-size: 12px;
  width: 60%;
  float: right;
}
.bottom-box {
  margin-top: 35px;
}

.bottom-box > img {
  width: 32.3%;
  height: 60%;
}
</style>