<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="shejiao" style="background:white;margin-top:20px" @click="handleBlur">
            <div class="head-con">
                <div class="head-icon">
                    <img
                        src="../../../static/images/icons/shejiao_icon1@2x.png"
                        alt=""
                        style="margin-top:10%;padding-bottom:5%;"
                    >
                    <h4>降低企业成本</h4>
                </div>
                <div class="head-icon">
                    <img src="../../../static/images/icons/shejiao_icon2@2x.png" alt="">
                    <h4>降低企业成本</h4>
                </div>
                <div class="head-icon">
                    <img src="../../../static/images/icons/shejiao_icon3@2x.png" alt="">
                    <h4>降低企业成本</h4>
                </div>
            </div>
            <p class="head-p">
                基于多种交友功能，为企业打造一站式交友平台及社区管理平台。
                社交APP开发采用动态智能DNS掉线，快速重连机制，消息排重，持续重连直至到达。
            </p>
            <div class="big-title" style='margin-top:20px;'>
                <div class="title-bar">
                    <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
                    <span>覆盖行业</span>
                </div>
                <p>社交系统覆盖多个行业，支持个性化定制需求</p>
            </div>
            <div class="icon-title">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/industry1@2x.png" alt="">
                        <span>金融行业</span>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/industry4@2x.png"
                            alt=""
                            style="margin-top:8px;"
                        >
                        <span>银行行业</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/industry7@2x.png" alt="">
                        <span>医疗美容</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/industry12@2x.png" alt="">
                        <span>外卖行业</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/industry5@2x.png" alt="">
                        <span>服装行业</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/industry8@2x.png" alt="">
                        <span>餐饮行业</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/industry3@2x.png" alt="">
                        <span>地产行业</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/industry6@2x.png" alt="">
                        <span>直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/industry9@2x.png" alt="">
                        <span>机械行业</span>
                    </li>
                </ul>
            </div>
            <div class="big-title" style="margin-top:40px;">
                <div class="title-bar">
                    <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
                    <span>场景应用</span>
                </div>
            </div>
            <div >
                <div class="last-list" style="margin-top:15px;">
                    <div class="last-list-title" style="margin-left:-4%;">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>向蜜</span>
                    </div>
                    <p>
                        在线问诊，呼吸科医生全程呵护；专属医生，线下专家
                        线上服务；脱敏管理，再也不会忘记打针时间啦！
                    </p>
                    <div style="margin-top:15px;" class='img-box'>
                        <img v-lazy="imgBox.imgUrl1" alt="">
                        <img v-lazy="imgBox.imgUrl2" alt="">
                        <img v-lazy="imgBox.imgUrl3" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "shejiao",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/shejiao01@2x.png",
        imgUrl2: "../../../static/images/img/shejiao02@2x.png",
        imgUrl3: "../../../static/images/img/shejiao03@2x.png"
      },
      titleName: "社交解决方案",
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
* {
  margin: 0;
  padding: 0;
}
.last-list .img-box img {
  width: 32.3%;
}
.icon-title::after {
  display: block;
  clear: both;
  content: "";
}
.icon-title span {
  font-size: 14px;
  color: #333333;
}
.icon-title ul li {
  margin: 0 auto;
  margin-top: 18%;
  margin-left: 7%;
}
.icon-title ul li::after {
  display: block;
  clear: both;
  content: "";
}
.icon-title ul {
  width: 33.3%;
  float: left;
}
.icon-title img {
  width: 14.1%;
  padding-right: 5%;
}
.head-p {
  color: #333333;
  font-size: 12px;
  margin-top: 10px;
}
.head-con::after {
  clear: both;
  display: block;
  content: "";
}
.head-con .head-icon {
  width: 33%;
  height: auto;
  float: left;
  line-height: 40px;
  text-align: center;
}
.head-con img {
  width: 33%;
}
.head-con h4 {
  color: #333333;
  font-size: 12px;
  margin-top: 10px;
}
.shejiao {
  background: white;
  padding: 20px 5%;
}

/* 小圆圈+标题的样式 */
/* .last-list > img {
  width: 1.9%;
  height: 1.9%;
  float: left;
}
.last-box > .big-title > p {
  font-size: 12px;
  color: #333333;
}
.last-list h4 {
  color: #666666;
  font-size: 14px;
  line-height: 9px;
  margin-top: 20px;
  margin-left: 3%;
}
.last-list p {
  margin-top: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #666666;
  padding-left: 3%;
} */
</style>