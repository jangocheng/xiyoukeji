<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="zhibo" style="background:white;margin-top:20px" @click="handleBlur">
            <div class="big-title">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>技术架构</h3>
            </div>
            <div style="padding:0 2.5%;margin-top:20px;">
                <img src="../../../static/images/img/framework@2x.png" alt="" class="jishu-img">
            </div>
            <div class="big-title" style="margin-top:40px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>产品介绍</h3>
            </div>
            <div>
                <div v-for="item in lastList" :key="item.id" class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>{{item.title}}</span>
                    </div>
                    <p>{{item.con}}</p>
                </div>
            </div>
            <div class="big-title" style="margin-top:40px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>覆盖行业</h3>
                <p style="padding:0 5%;">开发对接成熟第三方直播平台，降低直播平台开发的技术门槛。用最少的开发成本满足客户建设直播平台的需求。</p>
            </div>
            <div class="icon-title">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/live1@2x.png" alt="">
                        <span>电商直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live4@2x.png" alt="">
                        <span>展会直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live7@2x.png" alt="">
                        <span>金融直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live10@2x.png" alt="">
                        <span>竞拍直播</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/live2@2x.png" alt="">
                        <span>教育直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live5@2x.png" alt="">
                        <span>游戏直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live8@2x.png" alt="">
                        <span>企业直播</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/industry6@2x.png" alt="">
                        <span>旅游直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live6@2x.png" alt="">
                        <span>社交直播</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/live9@2x.png" alt="">
                        <span>医疗直播</span>
                    </li>
                </ul>
            </div>
            <div class="big-title" style="margin-top:40px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>产品介绍</h3>
                <p style="padding-left:5%;">包含PC端, APP端(安卓+iOS), 微信端, 手机wap端</p>
            </div>
            <div class="bottom-box">
                <div class="last-list">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>娃娃抓抓</span>
                    </div>
                    <p style="padding-right:5%;">一款真实在线远程抓娃娃机，手机遥控真实娃娃机。种类丰富，高质量玩偶任你挑选。抓到的娃娃直接邮寄到您家。</p>
                </div>
                <div class="my-pic">
                    <img v-lazy="imgBox.imgUrl1" alt="">
                    <img v-lazy="imgBox.imgUrl2" alt="">
                    <img v-lazy="imgBox.imgUrl3" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "zhibo",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/zhibo11.png",
        imgUrl2: "../../../static/images/img/zhibo22.png",
        imgUrl3: "../../../static/images/img/zhibo33.png"
      },
      titleName: "直播解决方案",
      isClose: false,
      lastList: [
        {
          title: "定制开发",
          con:
            "按需定制优质的直播平台。为客户呈现视觉盛宴，满足企业个性化、差异化的直播需求"
        },
        {
          title: "全网同步",
          con: "支持多个终端，后台数据统一管理，实时同步，画质流畅"
        },
        {
          title: "售后保障",
          con:
            "开发对接成熟第三方直播平台，降低直播平台开发的技术门槛。用最少的开发成本满足客户建设直播平台的需求。"
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
.zhibo {
  padding-bottom: 20px;
}
.jishu-img {
  width: 100%;
}
.icon-title::after {
  display: block;
  clear: both;
  content: "";
}
.icon-title {
  padding: 0 5%;
}
.icon-title span {
  font-size: 14px;
  color: #333333;
  vertical-align: middle;
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
  /* text-align: center; */
}
.icon-title img {
  width: 14.1%;
  padding-right: 5%;
  vertical-align: middle;
}
.my-pic {
  padding: 0 5%;
}
.my-pic > img {
  width: 32.2%;
}
</style>