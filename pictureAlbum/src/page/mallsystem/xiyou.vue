<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="xiyou" style="background:white;margin-top:20px" @click="handleBlur">
            <div class="head-con">
                <p>为您定制有特色、有价值的小程序，给您高效的服务与高品质的体验。</p>
            </div>
            <div class="big-title" style="margin-top:-10px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>优势</h3>
            </div>
            <div class="youshi-list">
                <div v-for="item in youShiList" :key="item.id" class="youshi-con">
                    <div class="list-left">
                        <img v-lazy="item.imgUrl" alt="">
                    </div>
                    <div class="list-right">
                        <h4>{{item.title}}</h4>
                        <p>{{item.con}}</p>
                    </div>
                </div>
            </div>
            <div class="big-title" style="margin-top:30px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>服务体验</h3>
            </div>
            <div class="last-list" style="margin-top:10px">
                <div class="last-list-title">
                    <img src="../../../static/images/icons/oval@2x.png" alt="">
                    <span>平台</span>
                </div>
            </div>
            <div class="pingtai-con">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/pingtai1.png" alt="">
                        <h4>更快获取用户</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/pingtai3.png" alt="">
                        <h4>技术门槛更低</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/pingtai5.png" alt="">
                        <h4>多元的营销手段</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/pingtai2.png" alt="">
                        <h4>微信生态营销</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/pingtai4.png" alt="">
                        <h4>更少的前期成本</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/pingtai5.png" alt="">
                        <h4>用户数据统计留存</h4>
                    </li>
                </ul>
            </div>
            <div class="last-list" style="margin-top:40px">
                <div class="last-list-title">
                    <img src="../../../static/images/icons/oval@2x.png" alt="">
                    <span>用户</span>
                </div>
            </div>
            <div class="foot-list">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/yonghu1.png" alt="">
                        <h4>微信对接免注册</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/yonghu3.png" alt="">
                        <h4>附近优惠都知道</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/yonghu5.png" alt="">
                        <h4>用户体验堪比app</h4>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/yonghu2.png" alt="">
                        <h4>主动分享玩转社区</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/yonghu4.png" alt="">
                        <h4>无推送免打扰</h4>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/yonghu6.png" alt="">
                        <h4>更多玩法不断开放中</h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "xiyou",
  data() {
    return {
      titleName: "西柚微信小程序",
      isClose: false,
      youShiList: [
        {
          imgUrl: "../../../static/images/icons/advantage1@2x.png",
          title: "用完即走",
          con: "不用安装，即开即用，用完就走。省流量，省安装时间，不占用桌面"
        },
        {
          imgUrl: "../../../static/images/icons/advantage2@2x.png",
          title: "体验优良",
          con: "体验上虽然没法完全媲美原生APP，但综合考虑还是更优"
        },
        {
          imgUrl: "../../../static/images/icons/advantage3@2x.png",
          title: "降低成本",
          con:
            "对于小程序拥有者来说，开发成本更低，他们可以更多财力，人力，精力放在如何运营好产品，做好内容本身"
        },
        {
          imgUrl: "../../../static/images/icons/advantage4@2x.png",
          title: "更易用",
          con:
            "对于用户来说，相较于各种APP，微信小程序UI和操作流程会更统一。这也会降低用户的使用难度"
        },
        {
          imgUrl: "../../../static/images/icons/advantage5@2x.png",
          title: "易推广",
          con:
            "对于小程序拥有者来说，相较于原生APP，推广更容易更简单，更省成本。"
        },
        {
          imgUrl: "../../../static/images/icons/advantage6@2x.png",
          title: "连接一切",
          con:
            "微信小程序具有线下连接一切的使命，2014 年 11 月，马化腾在「世界互联网大会」上提出腾讯要「连接一切」，要成为互联网连接器"
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
.xiyou{
  padding-bottom: 20px;
}
.foot-list {
  padding: 0 5%;
}
.foot-list h4 {
  font-size: 12px;
  color: #333333;
  margin-left: 15%;
}
.foot-list::after,
.foot-list ul::after {
  clear: both;
  display: block;
  content: "";
}
.foot-list ul:nth-of-type(2) > li {
  margin-left: 5%;
}
.foot-list ul img {
  float: left;
  width: 13%;
  margin-left: 3%;
}
.foot-list ul li {
  width: 90%;
  border: 2px solid #f1b84b;
  border-radius: 8px;
  padding: 12px 1%;
  margin-top: 20px;
  /* padding-left: 10%; */
}
.foot-list ul {
  float: left;
  width: 50%;
}
.pingtai-con::after {
  clear: both;
  display: block;
  content: "";
}
.pingtai-con > ul li {
  margin-top: 20px;
}
.pingtai-con > ul h4 {
  color: #333333;
  font-size: 14px;
  margin-top: 10px;
}
.pingtai-con > ul img {
  width: 42.6%;
}
.pingtai-con > ul {
  width: 50%;
  text-align: center;
  float: left;
}
.youshi-con {
  margin-top: 20px;
}
.youshi-con .list-right p {
  color: #666666;
  font-size: 12px;
  margin-top: 10px;
}
.youshi-con .list-right h4 {
  color: #666666;
  font-size: 14px;
}
.youshi-con .list-right {
  width: 85%;
  float: right;
  /* vertical-align: middle; */
}
.youshi-con .list-left img {
  width: 50%;
  /* line-height: 100px; */

  /* vertical-align: middle; */
}
.youshi-con .list-left {
  float: left;
  width: 15%;
  line-height: 60px;
}
.youshi-con::after {
  content: "";
  clear: both;
  display: block;
}
.youshi-list {
  padding: 0 5%;
}
.head-con p {
  padding: 20px 5%;
  font-size: 12px;
  color: #333333;
}
</style>