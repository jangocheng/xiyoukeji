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
                <div class="big-title" style="margin-top:20px;">
                    <div class="title-bar">
                        <img
                            src="../../../static/images/icons/right_icon.png"
                            alt=""
                            class="jiantou"
                        >
                        <span>覆盖行业</span>
                    </div>
                    <p>让互联网与医疗多层面深度融合，创造新的发展生态，智连您的健康。</p>
                </div>
            </div>
            <div class="icon-box">
                <ul style="margin-top:13px;">
                    <li>
                        <img src="../../../static/images/icons/icon1@2x.png" alt="">
                    </li>
                    <li>
                        <img src="../../../static/images/icons/icon2@2x.png" alt="">
                    </li>
                    <li>
                        <img src="../../../static/images/icons/icon3@2x.png" alt="">
                    </li>
                </ul>
                <ul style="margin-top:5px;">
                    <li>健康咨询</li>
                    <li>医疗软件</li>
                    <li>保健食品</li>
                </ul>
                <ul style="margin-top:30px;">
                    <li>
                        <img
                            src="../../../static/images/icons/icon4@2x.png"
                            alt=""
                            style="width:35%;"
                        >
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon5@2x.png"
                            alt=""
                            style="width:38%;"
                        >
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon6@2x.png"
                            alt=""
                            style="width:38%;"
                        >
                    </li>
                </ul>
                <ul style="margin-top:5px;">
                    <li>养老服务</li>
                    <li>医药科技</li>
                    <li>智能穿戴</li>
                </ul>
                <ul style="margin-top:30px;width:90%">
                    <li>
                        <img
                            src="../../../static/images/icons/icon7@2x.png"
                            alt=""
                            style="width:48%;"
                        >
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon8@2x.png"
                            alt=""
                            style="width:38%;"
                        >
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon9@2x.png"
                            alt=""
                            style="width:45%;"
                        >
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/icon10@2x.png"
                            alt=""
                            style="width:45%;"
                        >
                    </li>
                </ul>
                <ul style="margin-top:5px;width:90%">
                    <li>医院机构</li>
                    <li>医疗器械</li>
                    <li>基因检测</li>
                    <li>整形美容</li>
                </ul>
            </div>
            <div class="zhihui">
                <div class="big-title" style="margin-top:16px">
                    <div class="title-bar">
                        <img
                            src="../../../static/images/icons/right_icon.png"
                            alt=""
                            class="jiantou"
                        >
                        <span>场景应用</span>
                    </div>
                </div>
                <div class="last-box">
                    <div class="last-list">
                        <div class="last-list-title" style="margin-left:-4%;">
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
                        <div class="last-list-title" style="margin-left:-4%;">
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
  align-items: center;
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
  color: #333333;
  font-size: 14px;
}
.icon-box ul::after {
  display: block;
  clear: both;
  content: "";
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