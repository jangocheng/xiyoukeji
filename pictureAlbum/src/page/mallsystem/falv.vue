<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="falv" style="background:white;margin-top:20px" @click="handleBlur">
            <div class="head-con">
                <h4>为创新法律服务而服务</h4>
                <p>
                    打造融合性法律服务体系，为律政人提供快速多元化的就业平台，
                    使优秀的人才在互联网时代脱颖而出。互联网＋O2O的服务模式，
                    为更多企业和个人，提供经验丰富的法治服务。法律服务便捷可触。
                </p>
            </div>
            <div class="icons-con" style="margin-top:40px">
                <div class="icon-con">
                    <div class="icon-left">
                        <img src="../../../static/images/icons/zhibo-icon1@2x.png" alt="">
                        <h3>律师事务所</h3>
                    </div>
                    <div class="icon-right">
                        <ul>
                            <li>· 提高信誉度</li>
                            <li>· 节省线下成本</li>
                            <li>· 精准定位服务潜在客户</li>
                            <li>· 增加业务量</li>
                        </ul>
                    </div>
                </div>
                <div class="icon-con">
                    <div class="icon-left">
                        <img src="../../../static/images/icons/zhibo-icon1@2x.png" alt="">
                        <h3>律师事务所</h3>
                    </div>
                    <div class="icon-right">
                        <ul>
                            <li>· 提高信誉度</li>
                            <li>· 节省线下成本</li>
                            <li>· 精准定位服务潜在客户</li>
                            <li>· 增加业务量</li>
                        </ul>
                    </div>
                </div>
                <div class="icon-con">
                    <div class="icon-left">
                        <img src="../../../static/images/icons/zhibo-icon1@2x.png" alt="">
                        <h3>律师事务所</h3>
                    </div>
                    <div class="icon-right">
                        <ul>
                            <li>· 提高信誉度</li>
                            <li>· 节省线下成本</li>
                            <li>· 精准定位服务潜在客户</li>
                            <li>· 增加业务量</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="my-img">
                <img v-lazy="imgBox.imgUrl1" alt="">
                <img v-lazy="imgBox.imgUrl2" alt="">
                <img v-lazy="imgBox.imgUrl3" alt="">
            </div>
            <div class="big-title" style="margin-top:27px;padding:0 5%;">
                <div class="title-bar">
                    <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
                    <span>模块介绍</span>
                </div>
            </div>
            <!-- <div style="margin:0 5%;"> -->
                <div class="bottom-box" style="margin-top:0px;padding:0 5%;">
                    <div class="last-list">
                        <div class="last-list-title">
                            <img src="../../../static/images/icons/oval@2x.png" alt="">
                            <span>个人服务</span>
                        </div>
                        <p>提供各种类型的法律服务，以律师与用户一对一服务的模式，全面满足用户的法律需求。</p>
                    </div>
                    <div class="last-list">
                        <div class="last-list-title">
                            <img src="../../../static/images/icons/oval@2x.png" alt="">
                            <span>政企服务</span>
                        </div>
                        <p>由5年以上经验的专业律师团队为政府机关单位和企业提供有关法律的全方位线上服务。</p>
                    </div>
                    <div class="last-list">
                        <div class="last-list-title">
                            <img src="../../../static/images/icons/oval@2x.png" alt="">
                            <span>免费咨询</span>
                        </div>
                        <p>用户可在咨询板块发布提问，律师提供一次简要的文字回复，咨询内容公开。</p>
                    </div>
                    <div class="last-list">
                        <div class="last-list-title">
                            <img src="../../../static/images/icons/oval@2x.png" alt="">
                            <span>公益服务</span>
                        </div>
                        <p>校园公益普法与免费法律诉讼援助</p>
                    </div>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "falv",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/falv001.png",
        imgUrl2: "../../../static/images/img/falv002.png",
        imgUrl3: "../../../static/images/img/falv03.png"
      },
      titleName: "法律服务解决方案",
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
.falv {
  padding-bottom: 20px;
}
.my-img {
  padding: 0 2%;
  margin-top: 40px;
}
.my-img img {
  width: 32.5%;
}
.icon-right li {
  color: #333333;
  font-size: 12px;
}
.icon-con .icon-left h3 {
  margin-top: 10px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
}
.icon-con .icon-left {
  width: 37%;
  float: left;
  text-align: center;
}
.icon-con .icon-left img {
  width: 31.5%;
}
.icon-con .icon-right {
  width: 63%;
  float: right;
}
.icon-con::after {
  clear: both;
  content: "";
  display: block;
}
.icon-con {
  margin-top: 20px;
}
.head-con {
  padding: 20px 5% 0 5%;
}
.head-con h4 {
  font-size: 14px;
  color: #000000;
}
.head-con p {
  font-size: 12px;
  color: #333333;
  margin-top: 10px;
}
</style>