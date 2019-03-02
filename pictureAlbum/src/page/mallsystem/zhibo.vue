<template>
    <div class='zhibo'>
        <div class="big-title">
            <i class="iconfont icon-shixiangyoujiantou-"></i>
            <h3>技术架构</h3>
        </div>
        <div style="padding:0 2.5%;margin-top:20px;">
            <img src="../../../static/images/img/framework@2x.png" alt=""  class='jishu-img'/>
        </div>
        <div class="big-title" style="margin-top:40px">
            <i class="iconfont icon-shixiangyoujiantou-"></i>
            <h3>产品介绍</h3>
        </div>
        <div>
            <div v-for="item in lastList" :key="item.id" class="last-list">
                <img src="../../../static/images/icons/oval@2x.png" alt="">
                <span>{{item.title}}</span>
                <p>{{item.con}}</p>
            </div>
        </div>
        <div class="big-title" style="margin-top:40px">
            <i class="iconfont icon-shixiangyoujiantou-"></i>
            <h3>覆盖行业</h3>
            <p style="padding:0 5%;">开发对接成熟第三方直播平台，降低直播平台开发的技术门槛。用最少的开发成本满足客户建设直播平台的需求。</p>
        </div>
        <!-- <div class="icon-title">
            <ul>
                <li>
                    <img src="../../../static/images/icons/industry1@2x.png" alt="">
                    <span>电商直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry4@2x.png" alt="">
                    <span>展会直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry7@2x.png" alt="">
                    <span>金融直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry7@2x.png" alt="">
                    <span>竞拍直播</span>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="../../../static/images/icons/industry12@2x.png" alt="">
                    <span>教育直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry5@2x.png" alt="">
                    <span>游戏直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry8@2x.png" alt="">
                    <span>企业直播</span>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="../../../static/images/icons/industry3@2x.png" alt="">
                    <span>旅游直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry6@2x.png" alt="">
                    <span>社交直播</span>
                </li>
                <li>
                    <img src="../../../static/images/icons/industry9@2x.png" alt="">
                    <span>医疗直播</span>
                </li>
            </ul>
        </div> -->

    </div>
</template>

<script>
    export default {
        name:'zhibo',
        data(){
            return{
                lastList:[{
                    title:'定制开发',
                    con:'按需定制优质的直播平台。为客户呈现视觉盛宴，满足企业个性化、差异化的直播需求'
                },
                {
                    title:'全网同步',
                    con:'支持多个终端，后台数据统一管理，实时同步，画质流畅'
                },
                {
                    title:'售后保障',
                    con:'开发对接成熟第三方直播平台，降低直播平台开发的技术门槛。用最少的开发成本满足客户建设直播平台的需求。'
                },]
            }
        }
    }
</script>

<style scoped>
.zhibo{
    padding-bottom: 500px;
}
.jishu-img{
    width: 100%;
}
.icon-title{
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
}
.icon-title img {
  width: 14.1%;
  padding-right: 5%;
  vertical-align: middle;
}
</style>