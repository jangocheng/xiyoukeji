<template>
	<div class="firstPage">
        <div class="header">
            <div class="menu-icon" @click="show10=true"></div>
            <div class="text align-center">
                <h2>发展历程</h2>
                <p style="text-align:justify;">
                    西柚的发展，是不断自我更迭、精益求精的过程。木欣欣以向荣，3年来，在众多西柚人的努力下，西柚蓬勃生长。在这过程中，我们坚持与客户的合作需要互惠共赢，相信客户成功即是
                </p>
            </div>
        </div>
        <div class="develop clear">
            <h1 class="align-center">Development path</h1>
            <h3 class="align-center">2015年成立至今</h3>
            <div class="align-center">
                <img src="../../static/images/pic/oval1@2x.png" style="width:7px;">
            </div>
            <div class="fl left-sec">
                <div class="sec-item" style="top:8px;">
                    <div class="year-box">
                        <img src="../../static/images/pic/2015@2x.png">
                    </div>
                </div>
                <div class="sec-item" style="top:50px;">
                    <div class="date-box">
                        <img src="../../static/images/pic/text@2x.png">
                    </div>
                    <p class="text mt-5">西柚在一个不到5平米的工作室宣告成立。</p>
                </div>
                <div class="sec-item" style="top:188px;">
                    <div class="date-box">
                        <img src="../../static/images/pic/text3@2x.png">
                    </div>
                    <p class="text mt-5">我们搬迁至浙报印务的众创空间，拥有了一块50平米的场地。特别感谢政府的扶持与钱迅雷创业导师无私的帮助。</p>
                </div>
                <div class="sec-item" style="top:448px;">
                    <div class="date-box">
                        <img src="../../static/images/pic/text5@2x.png">
                    </div>
                    <p class="text mt-5">辛勤工作，同时也享受生活。我们配备了冰箱、咖啡机、微波炉、电视；每周采购零食饮料小吃、每季度旅游。营造出轻松愉悦的工作氛围。</p>
                </div>
                <div class="sec-item" style="top:670px;">
                    <div class="year-box">
                        <img src="../../static/images/pic/2017@2x.png">
                    </div>
                </div>
            </div>
            <div class="fl mid-sec">
                <img src="../../static/images/pic/oval2@2x.png" class="oval2 mt-20">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:31px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:70px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:55px;">
                <img src="../../static/images/pic/oval2@2x.png" class="oval2" style="margin-top:105px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:31px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:100px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:115px;">
                <img src="../../static/images/pic/oval2@2x.png" class="oval2" style="margin-top:90px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:31px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:85px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:145px;">
                <img src="../../static/images/pic/oval2@2x.png" class="oval2" style="margin-top:75px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:31px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin-top:70px;">
                <img src="../../static/images/pic/oval3@2x.png" class="oval3" style="margin:55px 0;">
            </div>
            <div class="fl right-sec">
                <div class="sec-item" style="top:124px;">
                    <div class="date-box">
                        <img src="../../static/images/pic/text2@2x.png">
                    </div>
                    <p class="text mt-5">我们接到了第一个项目。</p>
                </div>
                <div class="sec-item" style="top:300px;">
                    <div class="year-box">
                        <img src="../../static/images/pic/2016@2x.png">
                    </div>
                </div>
                <div class="sec-item" style="top:322px;">
                    <div class="date-box" style="margin-top:18px;">
                        <img src="../../static/images/pic/text4@2x.png">
                    </div>
                    <p class="text mt-5">埋头苦干、招兵买马。5个月时间，我们拥有15名志同道合的小伙伴以及150平米的办公场地。</p>
                </div>
                <div class="sec-item" style="top:550px;">
                    <div class="date-box" style="margin-top:18px;">
                        <img src="../../static/images/pic/text6@2x.png">
                    </div>
                    <p class="text mt-5">西柚与浙江律人网络科技有限公司达成合作，成立律超人研发中心。</p>
                </div>
            </div>
        </div>
        <div v-transfer-dom>
            <popup v-model="show10" position="top" height="100%"> 
                <div class="gy-menu-box">
                    <div class="icon-close" @click="show10=false"></div>
                    <div class="menu-item">发展历程</div>
                    <div class="menu-item">技术栈</div>
                    <div class="menu-item">UI设计规范</div>
                    <div class="menu-item">产品交付</div>
                    <div class="menu-item">案例展示</div>
                    <div class="menu-item">解决方案</div>
                </div>
            </popup>
        </div>
    </div>
</template>

<script>
import { TransferDom,Popup } from 'vux'
export default {
	name:'',
	components:{
        Popup
	},
    directives: {
        TransferDom
    },
	data(){
		return{
            show10:false
		}
	},
	methods:{
        handleMenu(){
            console.log(1)
        }
	},
	created(){},
	mounted(){},
}
</script>

<style lang='less'>
.firstPage{
    font-family:'FZLTXHK--GBK1-0',sans-serif;
    .header{
        height:110px;
        background:url('../../static/images/pic/bg@2x.png');
        background-size:cover;
        position:relative;
        padding-top:30px;
        .menu-icon{
            width:18px;
            height:14px;
            background:url('../../static/images/pic/select@2x.png');
            background-size:100%;
            position:absolute;
            top:10px;
            left:10px;
        }
        .text{
            color:#fff;
            margin:0 20px;
            h2{
                font-size:16px;
                line-height:22px;
            }
            p{
                font-size:12px;
                font-weight:lighter;
                line-height:17px;
            }
        }
    }
    .develop{
        padding:20px;
        box-sizing:border-box;
        background:#fff;
        h1{
            font-size:14px;
        }
        h3{font-size:12px;}
        .mid-sec{
            width:30px;
            box-sizing:border-box;
            padding:0 8px;
            margin-top:-7px;
            text-align:center;
            background:url('../../static/images/pic/line2@2x.png');
            background-repeat:repeat-y;
            background-position:50%;
            .oval1,.oval3{
                width:7px;
            }
            .oval2{
                width:11px;
            }
        }
        .left-sec{
            text-align:right;
            position:relative;
            height:100px;
            .sec-item{
                position:absolute;
                width:100%;
            }
            .year-box,.date-box{
                height:22px;
                box-sizing:border-box;
                padding:2px;
                img{
                    height:100%;
                    vertical-align:baseline;
                }
            }
            .text{
                font-size:12px;
                color:#333333;
                line-height:18px;
            }
        }
        .right-sec{
            text-align:left;
            position:relative;
            min-height:100px;
            .sec-item{
                position:absolute;
                width:100%;
            }
            .year-box,.date-box{
                height:22px;
                box-sizing:border-box;
                padding:2px;
                img{
                    height:100%;
                    vertical-align:baseline;
                }
            }
            .text{
                font-size:12px;
                color:#333333;
                line-height:18px;
            }
        }
    }
}
.gy-menu-box {
    background: #010101;
    color: #ddd;
    position:relative;
    padding:40px;
    box-sizing:border-box;
    height:100%;
    .icon-close{
        position:absolute;
        top:4px;
        left:6px;
        width:27px;
        height:27px;
        background:url('../../static/images/pic/close@2x.png');
        background-size:60% 60%;
        background-position:50%;
        background-repeat:no-repeat;
    }
    .menu-item{
        font-family:'FZLTXHK--GBK1-0',Georgia,sans-serif;
        font-weight:lighter;
        line-height:48px;
        font-size:14px;
        border-bottom:1px solid #fff;
    }
}

</style>