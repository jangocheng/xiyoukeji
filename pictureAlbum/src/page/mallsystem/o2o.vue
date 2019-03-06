<template>
    <div>
        <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
        <div class="o2o" style="background:white;margin-top:20px" @click="handleBlur">
            <div class="head-list">
                <ul>
                    <li>
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>个性定制全品类O2O系统</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>PC、移动端一体化服务</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>更优质的服务体验</span>
                    </li>
                    <li>
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>网上和门店一体化营销</span>
                    </li>
                </ul>
            </div>
            <div class="big-title" style="margin-top:27px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>模块介绍</h3>
            </div>
            <div class="icons-con" style="margin-top:20px">
                <div class="icon-con">
                    <div class="icon-left">
                        <img src="../../../static/images/icons/o2o_icon1@2x.png" alt="">
                        <h3>更优质的服务体验</h3>
                    </div>
                    <div class="icon-right">
                        <p>通过O2O选择更好的服务体验，线下商务与互联网结合</p>
                    </div>
                </div>
                <div class="icon-con">
                    <div class="icon-left">
                        <img src="../../../static/images/icons/o2o_icon2@2x.png" alt="">
                        <h3>网上和门店一体化营销</h3>
                    </div>
                    <div class="icon-right">
                        <p>借助O2O，帮助传统连锁企业打通线上线下，实现网上和门店一体化营销。</p>
                    </div>
                </div>
                <div class="icon-con">
                    <div class="icon-left">
                        <img src="../../../static/images/icons/o2o_icon3@2x.png" alt="">
                        <h3>线上线下消费结合</h3>
                    </div>
                    <div class="icon-right">
                        <p>平台通过O2O将线上订单和线下消费结合，所有的消费行为均可以准确统计，掌握用户数据。</p>
                    </div>
                </div>
            </div>
            <div class="big-title" style="margin-top:27px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>覆盖行业</h3>
            </div>
            <!-- icons的内容 -->
            <div class="icons-list">
                <div>
                    <ul class="list-img">
                        <li>
                            <img src="../../../static/images/icons/cover1@2x.png" alt="">
                        </li>
                        <li>
                            <img src="../../../static/images/icons/cover2@2x.png" alt="">
                        </li>
                        <li>
                            <img src="../../../static/images/icons/cover3@2x.png" alt="">
                        </li>
                        <li>
                            <img src="../../../static/images/icons/cover4@2x.png" alt="">
                        </li>
                    </ul>
                    <ul class="list-title">
                        <li>
                            <h4>学习培训</h4>
                        </li>
                        <li>
                            <h4>餐饮美食</h4>
                        </li>
                        <li>
                            <h4>健身</h4>
                        </li>
                        <li>
                            <h4>租房</h4>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="list-img">
                        <li>
                            <img src="../../../static/images/icons/cover5@2x.png" alt="">
                        </li>
                        <li>
                            <img src="../../../static/images/icons/cover6@2x.png" alt="">
                        </li>
                        <li>
                            <img src="../../../static/images/icons/cover7@2x.png" alt="">
                        </li>
                        <li>
                            <img src="../../../static/images/icons/cover8@2x.png" alt="">
                        </li>
                    </ul>
                    <ul class="list-title">
                        <li>
                            <h4>酒店</h4>
                        </li>
                        <li>
                            <h4>社区服务</h4>
                        </li>
                        <li>
                            <h4>电影购票</h4>
                        </li>
                        <li>
                            <h4>美容美发</h4>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="list-img">
                        <li>
                            <img src="../../../static/images/icons/cover9@2x.png" alt="">
                        </li>
                        <li>
                            <img
                                src="../../../static/images/icons/cover10@2x.png"
                                alt=""
                                style="width:35%;"
                            >
                        </li>
                    </ul>
                    <ul class="list-title">
                        <li>
                            <h4>学习培训</h4>
                        </li>
                        <li>
                            <h4>餐饮美食</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="big-title" style="margin-top:40px">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>Deli-gourment外卖平台</h3>
            </div>
            <div class="last-con">
                <div class="last-list" style="margin-top:10px">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>用户端</span>
                    </div>
                    <p>包含PC端、APP端（安卓+iOS）、微信端、手机wap端</p>
                </div>
                <div class="icons-list">
                    <div>
                        <ul class="list-img">
                            <li>
                                <img src="../../../static/images/icons/user1@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/user2@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/user3@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/user4@2x.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-title">
                            <li>
                                <h4>LBS精准定位</h4>
                            </li>
                            <li>
                                <h4>各色美食</h4>
                            </li>
                            <li>
                                <h4>我的订单</h4>
                            </li>
                            <li>
                                <h4>多种支付方式</h4>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="list-img">
                            <li>
                                <img src="../../../static/images/icons/user5@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/user6@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/user7@2x.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-title">
                            <li>
                                <h4>优惠券
                                    <br>消费券/红包
                                </h4>
                            </li>
                            <li>
                                <h4>评价分享</h4>
                            </li>
                            <li>
                                <h4>查看配送进度</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="img-box">
                        <img v-lazy="imgBox.imgUrl1" alt="">
                        <img v-lazy="imgBox.imgUrl2" alt="">
                    </div>
                </div>
            </div>
            <div class="last-con" style="margin-top:27px;">
                <div class="last-list" style="margin-top:10px">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>商家</span>
                    </div>
                </div>
                <div class="icons-list">
                    <div>
                        <ul class="list-img">
                            <li>
                                <img src="../../../static/images/icons/business1@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/business2@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/business3@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/business4@2x.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-title">
                            <li>
                                <h4>订单管理</h4>
                            </li>
                            <li>
                                <h4>商品列表</h4>
                            </li>
                            <li>
                                <h4>商家管理</h4>
                            </li>
                            <li>
                                <h4>会员管理</h4>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="list-img">
                            <li>
                                <img src="../../../static/images/icons/business5@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/business6@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/business7@2x.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-title">
                            <li>
                                <h4>营销功能</h4>
                            </li>
                            <li>
                                <h4>配送方式管理</h4>
                            </li>
                            <li>
                                <h4>活动发布</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="img-box">
                        <img
                            v-lazy="imgBox.imgUrl4"
                            alt=""
                            style="width:71.4%;"
                        >
                    </div>
                </div>
            </div>
            <div class="last-con">
                <div class="last-list" style="margin-top:27px">
                    <div class="last-list-title">
                        <img src="../../../static/images/icons/oval@2x.png" alt="">
                        <span>用户端</span>
                    </div>
                </div>
                <div class="icons-list">
                    <div>
                        <ul class="list-img">
                            <li>
                                <img src="../../../static/images/icons/platform1@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/platform2@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/platform3@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/platform4@2x.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-title">
                            <li>
                                <h4>团购列表</h4>
                            </li>
                            <li>
                                <h4>商品列表</h4>
                            </li>
                            <li>
                                <h4>商家管理</h4>
                            </li>
                            <li>
                                <h4>会员管理</h4>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="list-img">
                            <li>
                                <img src="../../../static/images/icons/platform5@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/platform6@2x.png" alt="">
                            </li>
                            <li>
                                <img src="../../../static/images/icons/platform7@2x.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-title">
                            <li>
                                <h4>营销功能</h4>
                            </li>
                            <li>
                                <h4>配送方式管理</h4>
                            </li>
                            <li>
                                <h4>活动发布</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="img-box">
                        <img
                            v-lazy="imgBox.imgUrl5"
                            alt=""
                            style="width:71.4%;"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "o2o",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/page1@2x.png",
        imgUrl2: "../../../static/images/img/page2@2x.png",
        imgUrl4: "../../../static/images/img/backstage@2x.png",
        imgUrl5: "../../../static/images/img/backstage2@2x.png"
      },
      titleName: "O2O系统解决方案",
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
  width: 100%;
  margin-top: 10px;
}
.img-box::after {
  clear: both;
  display: block;
  content: "";
}
.img-box img {
  display: inline-block;
  width: 30.9%;
}
.last-con .icons-list .list-img img {
  width: 23%;
}
.last-con .icons-list .list-img {
  margin-top: 20px;
}
.last-con .icons-list .list-title h4 {
  margin-top: 5px;
}

/* icons的样式 */
.icons-list .list-title h4 {
  color: #666666;
  font-size: 12px;
  margin-top: 7px;
}
.icons-list .list-img img {
  width: 42.6%;
}
.icons-list .list-img {
  margin-top: 20px;
}
.icons-list ul::after {
  clear: both;
  display: block;
  content: "";
}
.icons-list ul > li {
  text-align: center;
  width: 25%;
  float: left;
}

.head-list span {
  font-size: 12px;
  color: #333333;
  vertical-align: middle;
}
.head-list img {
  width: 2.8%;
  vertical-align: middle;
}
.head-list::after {
  clear: both;
  display: block;
  content: "";
}
.head-list > ul {
  width: 50%;
  float: left;
}
.head-list > ul > li {
  padding-left: 3%;
  margin-top: 20px;
}

.icon-con .icon-left h3 {
  margin-top: 10px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
}
.icon-con .icon-left {
  width: 45%;
  float: left;
  text-align: center;
}
.icon-con .icon-left img {
  width: 25%;
}
.icon-con .icon-right p {
  color: #333333;
  font-size: 12px;
  padding-left: 5%;
  padding-right: 13%;
}
.icon-con .icon-right {
  display: flex;
  align-items: center;
  height: 70px;
  width: 55%;
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
</style>