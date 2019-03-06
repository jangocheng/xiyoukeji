<template>
  <div>
    <DropDown :titleName="titleName" :isClose="isClose" v-on:isRotate="isRotate"></DropDown>
    <div class="zaixian" style="background:white;margin-top:20px" @click="handleBlur">
      <div v-for="item in listData" :key="item.id" class="list-con">
        <div class="title-box">
          <img :src="item.imgUrl" alt="">
          <span>{{item.title}}</span>
        </div>
        <div v-for="item in item.container" :key="item.id" class="list-detail">
          <h4>{{item.smallTitle}}</h4>
          <p>{{item.con}}</p>
        </div>
      </div>
      <div class="big-title" style="margin-top:40px;padding:0 5%;">
        <div class="title-bar">
          <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
          <span>技术架构</span>
        </div>
      </div>
      <img v-lazy="imgBox.imgUrl1" alt="" class="jiagou-img">
      <div class="big-title" style="margin-top:30px;padding:0 5%;">
        <div class="title-bar">
          <img src="../../../static/images/icons/right_icon.png" alt="" class="jiantou">
          <span>案例展示</span>
        </div>
      </div>
      <div class="bottom-box">
        <div class="last-list" style="margin-top:20px;">
          <div class="last-list-title" style="padding:0 2%;">
            <img src="../../../static/images/icons/oval@2x.png" alt="">
            <span>快问学生端</span>
          </div>
        </div>
        <div class="img-box">
          <img v-lazy="imgBox.imgUrl2" alt="">
          <img v-lazy="imgBox.imgUrl3" alt="">
          <img v-lazy="imgBox.imgUrl4" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "../../components/dropdown";
export default {
  name: "zaixian",
  data() {
    return {
      imgBox: {
        imgUrl1: "../../../static/images/img/Group6@2x.png",
        imgUrl2: "../../../static/images/img/case2@2x.png",
        imgUrl3: "../../../static/images/img/case1@2x.png",
        imgUrl4: "../../../static/images/img/case3@2x.png"
      },
      titleName: "在线教育解决方案",
      isClose: false,
      listData: [
        {
          id: 0,
          imgUrl: "../../../static/images/icons/last1.png",
          title: "教",
          container: [
            {
              id: 6,
              smallTitle: "互动视频",
              con: "视频弹题，边学边巩固，让学习更有深度"
            },
            {
              id: 7,
              smallTitle: "轻直播",
              con:
                "轻松应对十万人在线；多平台观看，随时随地学；微信宣传，一键分享"
            },
            {
              id: 8,
              smallTitle: "智能题库",
              con: "真题测评、智能组卷、学情分析，提高工作效率"
            }
          ]
        },
        {
          id: 1,
          imgUrl: "../../../static/images/icons/last2.png",
          title: "学",
          container: [
            {
              id: 9,
              smallTitle: "笔记",
              con: "知识共享、内容沉淀、知识提炼"
            },
            {
              id: 10,
              smallTitle: "问答",
              con: "答疑解惑、实时互动"
            },
            {
              id: 11,
              smallTitle: "学习计划",
              con: "系统学习，构建知识体系，学习就像打怪升级"
            }
          ]
        },
        {
          id: 2,
          imgUrl: "../../../static/images/icons/last3.png",
          title: "管",
          container: [
            {
              id: 12,
              smallTitle: "课程管理",
              con: "标签化管理，知识结构更科学，让学员轻松找到心仪课程"
            },
            {
              id: 13,
              smallTitle: "学员管理",
              con: "看得见的学习进程，全方位跟踪学员学习情况"
            },
            {
              id: 14,
              smallTitle: "营收管理",
              con: "交易额、会员费、续费率、多维度解读营收，订单实时追踪"
            }
          ]
        },
        {
          id: 3,
          imgUrl: "../../../static/images/icons/last4.png",
          title: "销",
          container: [
            {
              id: 15,
              smallTitle: "学习卡",
              con: "打通线上线下推广方式，营销电子化，环保更高效"
            },
            {
              id: 16,
              smallTitle: "组合营销",
              con: "立体化课程促销策略，目标学员一网打尽"
            },
            {
              id: 17,
              smallTitle: "会员成长",
              con: "提高学员忠诚度，完课率续费率节节高"
            }
          ]
        },
        {
          id: 4,
          imgUrl: "../../../static/images/icons/last5.png",
          title: "聊",
          container: [
            {
              id: 18,
              smallTitle: "小组互动",
              con: "知识共鸣打造学习轻社区，精华内容增强学员荣誉感"
            },
            {
              id: 19,
              smallTitle: "语音交流",
              con: "学习版的微信朋友圈"
            },
            {
              id: 20,
              smallTitle: "私信沟通",
              con: "多端同步，高效交流，知识传递更灵活"
            }
          ]
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
.img-box {
  margin-top: 15px;
}
.img-box img {
  width: 32.5%;
}
.jiagou-img {
  width: 100%;
}
.list-con .list-detail::before {
  content: "·";
  float: left;
  width: 5.3%;
  text-align: center;
  margin-left: 5%;
}
.list-con .list-detail p {
  color: #666666;
  font-size: 12px;
  padding-right: 5%;
  padding-left: 10%;
  margin-top: 5px;
}
.list-con .list-detail h4 {
  font-size: 14px;
  color: #666666;
  font-weight: 600;
  margin-top: 10px;
}
.list-con .title-box img {
  width: 5.3%;
  vertical-align: middle;
}
.list-con .title-box span {
  font-size: 20px;
  color: #ffcc1c;
  vertical-align: middle;
  margin-left: 1%;
}
.list-con .title-box {
  padding-left: 2.7%;
}
.list-con {
  padding-top: 20px;
}
.zaixian {
  background: white;
  padding-bottom: 15px;
}
</style>