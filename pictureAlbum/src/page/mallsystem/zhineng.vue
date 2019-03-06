<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="zhineng" style="background:white;margin-top:20px" @click="handleBlur">
            <div class="head-con">
                <p>以平台性底层软硬件为基础，以智能传感互联、人机交互、新型展示及大数据处理等新一代信息技术为特征</p>
            </div>
            <div class="big-title" style="margin-top:0px;padding:0 5%;">
                <div class="title-bar">
                    <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
                    <span>智能硬件</span>
                </div>
            </div>
            <div class="zhineng-box">
                <ul style="margin-top:20px;">
                    <li>
                        <img src="../../../static/images/icons/zhineng1.png" alt="">
                    </li>
                    <li>
                        <img
                            src="../../../static/images/icons/zhineng2.png"
                            alt=""
                            style="width:15%;"
                        >
                    </li>
                </ul>
                <ul style="margin-top:10px;">
                    <li>拥有智能化功能</li>
                    <li>新型智能终端产品</li>
                </ul>
                <ul style="margin-top:20px;">
                    <li>
                        <img src="../../../static/images/icons/zhineng3.png" alt="">
                    </li>
                </ul>
                <ul style="margin-top:10px;">
                    <li>新型显示及大数据处理</li>
                </ul>
            </div>
            <div class="big-title" style="margin-top:40px;padding:0 5%">
                <div class="title-bar">
                    <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
                    <span>场景应用</span>
                </div>
            </div>
            <div class="bottom" style="margin-top:-10px">
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>服务机器人</span>
                    </div>
                    <p>
                        是在非结构环境下为人类提供必务的多种高技术集成的智能化装备，
                        主要以服务机器人和危险作业机器人应用需求为研究重点，研究设计方法、制造工艺、
                        智能控制和应用系统集成等共性基础技术。
                    </p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>智能家居</span>
                    </div>
                    <p>
                        以住宅为平台，利用综合布线技术、网络通信技术、 安全防范技术、自动控制技术、音视频技术将家居生活有关的设施集成，
                        构建高效的住宅设施与家庭提升家居、便利性、舒适性、艺术性，并实现环保节能的居住环境。
                    </p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>智能医疗</span>
                    </div>
                    <p>
                        通过打造健康档案区域医疗信息平台，利用最先进的物联网技术，
                        实现患者与医务人员、医疗机构、医疗设备之间的互动，逐步达到信息化。
                    </p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>穿戴设备</span>
                    </div>
                    <p>应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备的总称，如手表、手环、眼镜、服饰等。</p>
                </div>
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>智能交通</span>
                    </div>
                    <p>
                        将先进的信息技术、数据通讯传输技术、电子传感技术、
                        控制技术及计算机技术等有效地集成运用于整个地面交通管理系统而建立的一种在大范围内、
                        全方位发挥作用的，实时、准确、高效的综合交通运输管理系统。
                    </p>
                </div>
            </div>
            <div class="big-title" style="margin-top:40px;padding:0 5%;">
                <div class="title-bar">
                    <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
                    <span>案例展示</span>
                </div>
            </div>
            <div class="last-list" style="margin-top:20px;padding:0 5%;">
                <div class="last-list-title">
                    <img src="../../../static/images/icons/oval@2x.png" alt="">
                    <span>云螺</span>
                </div>
                <p
                    style="padding-right:5%;"
                >云螺是智能硬件管理APP。用户能便捷地通过手机与智能硬件交互，智能硬件之间的互联互通。（详情请见NO20.案例）</p>
            </div>
            <div class="img-box">
                <img v-lazy="imgBox.imgUrl1" alt="">
                <img v-lazy="imgBox.imgUrl2" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "zhineng",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/zhineng1.png",
        imgUrl2: "../../../static/images/img/zhineng2.png"
      },
      titleName: "智能硬件解决方案",
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
.img-box {
  text-align: center;
  margin-top: 20px;
}
.img-box img {
  width: 30.9%;
}
.bottom {
  padding: 0 5%;
}
.zhineng-box ul::after {
  clear: both;
  display: block;
  content: "";
}
.zhineng-box ul {
  text-align: center;
}
.zhineng-box ul li img {
  width: 19.7%;
}
.zhineng-box ul li {
  width: 50%;
  font-size: 12px;
  color: #333333;
  float: left;
}
.head-con {
  padding: 20px 5%;
}
.head-con p {
  color: #333333;
  font-size: 12px;
}
.zhineng {
  padding-bottom: 20px;
}
</style>