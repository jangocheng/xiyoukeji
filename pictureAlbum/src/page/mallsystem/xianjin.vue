<template>
    <div style="background:white;">
        <div class="xianjin">
            <div class="head">
                <div class="head-title">多元化产品特性组合，简单贷，简单偿</div>
                <p class="head-con">
                    现金贷，是小额现金贷款业务的简称，具有便捷借贷轻松还款的
                    优点，无需抵押担保，程序简化，更具及时审核、快速到账的功
                    能，方便用户需求，提高用户体验。我国目前现金贷市场规模300亿人民币左右。如果
                    达到相同的渗透率和借款规模，预计市场规模将达到4000亿以上。
                </p>
            </div>
            <div class="big-title">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>用户端（iOS+安卓）</h3>
                <p>
                    注册登录，可贷额度，货款查询，利率计算，到期还款，实名认证，绑卡，运营商认证，
                    货款记录，风控模型，反欺诈，全流程管理
                </p>
                <div class="pic-box">
                    <img src="../../../static/images/img/1.1@2x.png" alt="">
                    <img src="../../../static/images/img/2.1@2x.png" alt="">
                    <img src="../../../static/images/img/3.1@2x.png" alt="">
                </div>
            </div>
            <div class="gongsi big-title">
                <i class="iconfont icon-shixiangyoujiantou-"></i>
                <h3>公司运营端</h3>
                <img src="../../../static/images/img/2.4.png" alt="">
            </div>
        </div>
        <div class="system">
            <div style="text-align:center;">
                <h3>系统架构</h3>
                <p>缜密架构保障系统安全,为平台保驾护航</p>
            </div>
            <img src="../../../static/images/icons/line@2x.png" alt="">
            <ul class="system-list list-mar" style="width:20%;">
                <li style="color: #333333;font-size: 14px;">业务层</li>
                <li>用户注册</li>
                <li>借款</li>
                <li>还款</li>
            </ul>
            <ul class="system-list list-mar" style="width:20%">
                <li style="color: #333333;font-size: 14px;">系统层</li>
                <li>信息搜集</li>
                <li>指令发送</li>
                <li>会员管理</li>
                <li>贷前管理</li>
                <li>黑名单</li>
                <li>坏账管理</li>
                <li>逾期催收</li>
                <li>贷后管理</li>
            </ul>
            <ul class="system-list list-mar" style="width:25%">
                <li style="color: #333333;font-size: 14px;">资金通道</li>
                <li>实名开户</li>
                <li>绑卡</li>
                <li>代扣</li>
                <li>代付</li>
            </ul>
            <div style="width:30%;text-align:center;" class="system-list">
                <p style="color: #333333;font-size: 14px;margin-top:4px;">风控层</p>
                <ul class="system-list">
                    <li>OCR</li>
                    <li>反欺诈</li>
                    <li>人脸识别</li>
                    <li>征信报告</li>
                    <li>多头借贷</li>
                    <li>央行征信</li>
                    <li>网贷黑名单</li>
                </ul>
                <ul class="system-list">
                    <li>风险模型</li>
                    <li>风险名单</li>
                    <li>通话记录</li>
                    <li>关系图谱</li>
                    <li>设备状态</li>
                    <li>信用评分</li>
                    <li>活体检测</li>
                </ul>
            </div>
        </div>
        <div class="xianjin">
            <div class="last-box">
                <div class="big-title">
                    <i class="iconfont icon-shixiangyoujiantou-"></i>
                    <h3>风控模型特征</h3>
                    <p>有效快速识别用户欺诈风险与逾期风险</p>
                </div>
            </div>
        </div>
        <div style="margin-top:-20px;">
            <div v-for="item in lastList" :key="item.id" class="last-list">
              <div class='last-list-title'>
                  <img src="../../../static/images/icons/oval@2x.png" alt="">
                  <span>{{item.title}}</span>
              </div>
                <p>{{item.con}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "xianjin",
  data() {
    return {
      lastList: [
        {
          title: "多方借贷",
          con: "借款平台数，还款平台数，还款笔数，细分行业借还款情况"
        },
        {
          title: "风险分析",
          con: "安全防御过低，个人信息疑似泄露，是否操作过于频繁"
        },
        {
          title: "设备监控",
          con: "精准识别设备，识别设备风险，展示设备关键信息"
        },
        {
          title: "综合评分",
          con:
            "依托海量大数据，采用人工智能模型输出用户评分，为机审提供先觉条件。"
        },
        {
          title: "用户信息",
          con: "多平台黑名单，信誉低，羊毛党"
        },
        {
          title: "运营商",
          con: "用户半年通讯记录，亲友号码，为催收提供便捷渠道。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.xianjin {
  padding: 20px 5%;
  background: white;
}
.head .head-title {
  font-size: 14px;
  color: #000000;
}
.head .head-con {
  font-size: 12px;
  color: #333333;
  margin-top: 10px;
  line-height: 20px;
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
.icon-shixiangyoujiantou- {
  font-size: 26px;
  color: #f1b84b;
  margin-left: -30px;
  float: left;
}
.big-title .pic-box img {
  width: 32.3%;
  height: 60%;
}
.big-title .pic-box {
  margin-top: 15px;
}
.gongsi img {
  width: 100%;
}
.system {
  margin-top: 27px;
}
.system p {
  color: #666666;
  font-size: 12px;
}
.system h3 {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  /* line-height: 40px; */
}
.system img {
  width: 75%;
  margin: 0 auto;
  display: block;
  margin-top: 10px;
}
.system .list-title::after {
  display: block;
  clear: both;
  content: "";
}

.system::after {
  display: block;
  clear: both;
  content: "";
}
.system .system-list {
  font-size: 12px;
  float: left;
}
.system .list-mar {
}
.system .system-list {
  /* margintop */
}
.system .system-list {
  color: #666666;
  font-size: 10px;
  line-height: 30px;
  text-align: center;
}
.last-box > .big-title > p {
  font-size: 12px;
  color: #333333;
}

</style>