<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div style="background:white;margin-top:20px" @click="handleBlur">
            <div class="zhihui">
                <div class="title-con">
                    <div class="title-con">
                        <h4>医疗信息平台</h4>
                        <p>
                            基于互联网系统，以患者为中心，打造健康档案医疗信息平台，
                            加强患者与医方平台的互动，建立良好医患关系，
                            同时减少医护人员繁琐的工作量
                        </p>
                    </div>
                    <div class="title-con" style="margin-top:20px;">
                        <h4>医疗服务智能化</h4>
                        <p>更加专业智能的服务，先进的运营模式，全方位提高诊所管理，降低成本，便利患者。</p>
                    </div>
                </div>
                <div class="big-title">
                    <i class="iconfont icon-shixiangyoujiantou-"></i>
                    <h3>风控模型特征</h3>
                    <p>让互联网与医疗多层面深度融合，创造新的发展生态，智连您的健康。</p>
                </div>
            </div>
            <div class="icon-box">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/icon1@2x.png" alt="">
                        <h4 style="margin-top:15px;">健康咨询</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/icon2@2x.png" alt="">
                        <h4 style="margin-top:10px;">医疗软件</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/icon3@2x.png" alt="">
                        <h4 style="margin-top:5px;">保健食品</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img
                            src="../../../static/images/icons/icon4@2x.png"
                            alt=""
                            style="width:35%;"
                        >
                        <h4 style="margin-top:13px;">养老服务</h4>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon5@2x.png"
                            alt=""
                            style="width:38%;"
                        >
                        <h4 style="margin-top:13px;">医药科技</h4>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon6@2x.png"
                            alt=""
                            style="width:38%;"
                        >
                        <h4 style="margin-top:16px;">智能穿戴</h4>
                    </li>
                </ul>
                <ul style="width:90%">
                    <li>
                        <img
                            src="../../../static/images/icons/icon7@2x.png"
                            alt=""
                            style="width:48%;"
                        >
                        <h4 style="margin-top:13px;">医院机构</h4>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon8@2x.png"
                            alt=""
                            style="width:38%;margin-top:0px;"
                        >
                        <h4 style="margin-top:15px;">医疗器械</h4>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon9@2x.png"
                            alt=""
                            style="width:45%;margin-top:3px;"
                        >
                        <h4 style="margin-top:13px;">基因检测</h4>
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon10@2x.png"
                            alt=""
                            style="width:45%;margin-top:5px;"
                        >
                        <h4 style="margin-top:18px;">整形美容</h4>
                    </li>
                </ul>
            </div>
            <div class="zhihui">
                <div class="big-title">
                    <i class="iconfont icon-shixiangyoujiantou-"></i>
                    <h3>场景应用</h3>
                </div>
                <div class="last-box">
                    <div class="last-list">
                        <div class="last-list-title">
                            <img src="../../../static/images/icons/oval@2x.png" alt="">
                            <span>患者端</span>
                        </div>
                        <p>
                            在线问诊，呼吸科医生全程呵护；专属医生，线下专家
                            线上服务；脱敏管理，再也不会忘记打针时间啦！
                        </p>
                        <div style="margin-top:15px;" class="box-images">
                            <img v-lazy="imgBox.imgUrl1" alt="">
                            <img v-lazy="imgBox.imgUrl2" alt="">
                            <img v-lazy="imgBox.imgUrl3" alt="">
                        </div>
                    </div>
                </div>
                <div class="last-box" style="margin-top:27px;">
                    <div class="last-list">
                        <div class="last-list-title">
                            <img src="../../../static/images/icons/oval@2x.png" alt="">
                            <span>医生端</span>
                        </div>
                        <p>全新首页，病患管理工具更“全面”；患者档案，查看更完整的患者信息；患者管理，分组管理更便捷</p>
                        <div style="margin-top:15px;text-align:center;" class="box-images">
                            <img v-lazy="imgBox.imgUrl4" alt="">
                            <img v-lazy="imgBox.imgUrl5" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "zhihui",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/patient1@2x.png",
        imgUrl2: "../../../static/images/img/patient2@2x.png",
        imgUrl3: "../../../static/images/img/patient3@2x.png",
        imgUrl4: "../../../static/images/img/doctor1@2x.png",
        imgUrl5: "../../../static/images/img/doctor2@2x.png"
      },
      titleName: "智慧医疗解决方案",
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
.last-list > .box-images > img {
  width: 32%;
}
.last-list h4 {
  color: #666666;
  font-size: 14px;
  line-height: 9px;
  margin-top: 20px;
  margin-left: 3%;
}
.last-list p {
  margin-top: 10px;
  line-height: 20px;
  font-size: 12px;
  color: #666666;
  padding-left: 3%;
}
.icon-box h4 {
  font-size: 14px;
  color: #333333;
}
.icon-box > ul {
  text-align: center;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-top: 33px;
}
.icon-box img {
  width: 50%;
  display: block;
  margin: 0 auto;
}
.icon-box ul li {
  float: left;
  text-align: center;
  width: 23%;
}
.icon-box ul::after {
  display: block;
  clear: both;
  content: "";
}
.icon-shixiangyoujiantou- {
  font-size: 26px;
  color: #f1b84b;
  margin-left: -30px;
  float: left;
}
.big-title::after {
  clear: both;
  display: block;
  content: "";
}
.big-title {
  margin-top: 10px;
}
.big-title > h3 {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  line-height: 40px;
}
.big-title > p {
  font-size: 12px;
  color: #333333;
  line-height: 20px;
}
.zhihui {
  background: white;
  padding: 20px 5%;
}
.title-con h4 {
  color: #000000;
  font-size: 14px;
}
.title-con p {
  color: #333333;
  font-size: 12px;
  margin-top: 10px;
}
.icon-box {
  width: 100%;
  height: 100%;
  background: url(../../../static/images/img/bg@2x.png) no-repeat;
  background-size: 100% auto;
}
</style>