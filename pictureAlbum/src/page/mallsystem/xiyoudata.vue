<template>
  <div>
    <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
    <div class="xiyoudata" style="background:white;margin-top:20px" @click="handleBlur">
      <div class="head-con">
        <p>以平台为基础通过数据分析的方式，传播和分析信息数据。</p>
      </div>
      <div class="big-title" style="margin-top:0px;padding:0 5%;">
        <div class="title-bar">
          <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
          <span>我们的优势</span>
        </div>
      </div>
      <div class="youshi-list">
        <div v-for="item in youShiList" :key="item.id" class="youshi-con">
          <div class="list-left">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="list-right">
            <h4>{{item.title}}</h4>
            <p>{{item.con}}</p>
          </div>
        </div>
      </div>
      <div class="big-title" style="margin-top:40px;padding: 0 5%;">
        <div class="title-bar">
          <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
          <span>案例展示</span>
        </div>
      </div>
      <div class="botton-box">
        <div class="last-list" style="margin-top:10px">
          <div class="last-list-title" style="padding:0 5%;">
            <img src="../../../static/images/icons/oval@2x.png" alt="">
            <span>青塔网高等教育发展指标数据平台</span>
          </div>
          <p style="padding:0 5%;">
            青塔还致力于为高校和教育部门等提供专业和深度的高等教育数据服务，迄今为止，
            青塔已经为包括多所C9高校在内的众多大学提供数据服务。
          </p>
          <img v-lazy="imgUrl" alt="" class="last-pic">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "xiyoudata",
  data() {
    return {
      imgUrl: "../../../static/images/img/last_pic@2x.png",
      titleName: "西柚数据解决方案",
      isClose: false,
      youShiList: [
        {
          imgUrl: "../../../static/images/icons/data1.png",
          title: "数据采集",
          con: "持续解决数据来源问题。"
        },
        {
          imgUrl: "../../../static/images/icons/data2.png",
          title: "高度可制定化",
          con:
            "支持所有报表以及定制式报表，完美满足客户对数据分析和展现的多变需求。"
        },
        {
          imgUrl: "../../../static/images/icons/data3.png",
          title: "多设备随意展示",
          con: "手机／平板／大屏 …兼容多种设备，可随时随地任性展示"
        },
        {
          imgUrl: "../../../static/images/icons/data4.png",
          title: "数据可视化",
          con:
            "饼图、柱状图、折线图、气泡图、面积图、省份地图、词云、瀑布图、漏斗图..."
        },
        {
          imgUrl: "../../../static/images/icons/data5.png",
          title: "多维度数据分析",
          con:
            "自由选择数据，发掘数据背后的更多秘密；对多个图表数据联动查看，进行多维有效分析。"
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
.botton-box .last-pic {
  width: 71.5%;
  margin: 0 auto;
  display: block;
  margin-top: 15px;
  padding-bottom: 15px;
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