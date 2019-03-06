<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="guanwang" style="background:white;margin-top:20px" @click="handleBlur">
            <p class="head-con">专业的设计团队私人订制，支持以数据库为核心的数据，保证系统稳定性，安全地运行；运用B/S架构得信息发布平台。</p>
            <div class="big-title" style="margin-top:20px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>网站套餐</h3>
            </div>
            <div class="bottom" style="margin-top:-20px">
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>企业营销型网站建设</span>
                    </div>
                    <p>整合SEO结构，适合于网络营销，从网站定位，策划到设计，充分体现产品与服务的优势。</p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>创意品牌型网站建设</span>
                    </div>
                    <p>以创意元素设计，企业品牌定位，充分了解企业文化，由资深设计师为您打造令人眼前一亮精品网站。</p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>购物商城型网站建设</span>
                    </div>
                    <p>专业量身定制设计，定制功能，注重用户体验是商城型网站的重点，整合SEO优化架构，为您的电子商务提速。</p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>手机微信网站建设</span>
                    </div>
                    <p>个性设计，独一无二，用设计风格体现企业文化，追求速度，兼容主流手机浏览器和PC端数据同步。</p>
                </div>
            </div>
            <div class="big-title" style="margin-top:40px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>产品特点</h3>
            </div>
            <div class="list-con">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/product1@2x.png" alt="">
                        <h4>网站整体风格设计</h4>
                        <p>风格简洁，突出产品，设计定制开发型手机版网站</p>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/product3@2x.png"
                            alt=""
                            style="width:23%;"
                        >
                        <h4>便捷管理网站数据</h4>
                        <p>共享同一个后台系统，管理和录入同步</p>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/product5@2x.png"
                            alt=""
                            style="width:16%;"
                        >
                        <h4>SEO优化</h4>
                        <p>WAP搜索引擎优先收录手机网站，占领引擎第一屏</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/product2@2x.png" alt="">
                        <h4>产品询盘功能</h4>
                        <p>直接对站内产品标题编号搜索，发送在线询盘</p>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/product4@2x.png" alt="">
                        <h4>移动在线商城</h4>
                        <p>根据数据统计，某些一线城市支付订单达到30%以上</p>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/product6@2x.png" alt="">
                        <h4>彰显公司实力</h4>
                        <p>建立一个手机网站，提高企业的形象和品牌知名度</p>
                    </li>
                </ul>
            </div>
            <div class="big-title" style="margin-top:40px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>案例展示</h3>
            </div>
            <div class="bottom-box" style="margin-top:-10px">
                <div class="last-list" style="padding:0%;padding-left:0%;">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>创道资本</span>
                    </div>
                    <div class="last-list-img">
                        <img v-lazy="imgBox.imgUrl1" alt="">
                    </div>
                </div>
                <div class="last-list" style="padding:0;padding-right:0%;">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>网银互联</span>
                    </div>
                    <div class="last-list-img">
                        <img v-lazy="imgBox.imgUrl2" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "guanwang",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/a1@2x.png",
        imgUrl2: "../../../static/images/img/a2@2x.png"
      },
      titleName: "官网解决方案",
      isClose: false
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
/* .last-list-title{
    padding-left: 5%;
} */
.last-list-title img {
  width: 2.7%;
}
.bottom-box::after {
  clear: both;
  display: block;
  content: "";
}
.bottom-box .last-list .last-list-img {
  text-align: center;
}
.bottom-box .last-list .last-list-img img {
  width: 80%;
  margin-top: 10px;
}
.bottom-box > .last-list {
  float: left;
  width: 50%;
}
.list-con {
  padding: 0 5%;
}
.list-con:after {
  display: block;
  clear: both;
  content: "";
}
.list-con ul {
  text-align: center;
  width: 50%;
  float: left;
}
.list-con ul li img {
  width: 21.3%;
  /* height: 40px; */
}
.list-con ul li h4 {
  color: #333333;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
}
.list-con ul li {
  margin-top: 20px;
}
.list-con ul li p {
  color: #333333;
  font-size: 12px;
  margin-top: 10px;
  padding: 0 2%;
}
.head-con {
  color: #333333;
  font-size: 12px;
  margin-top: 20px;
  padding: 0 5%;
}
.guanwang {
  padding-bottom: 20px;
}
</style>