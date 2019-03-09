<template>
	<div class="uiDesign">
        <div class="header">
            <div class="menu-icon" @click="show10=true"></div>
            <div class="text align-center">
            </div>
        </div>
        <img src="../../static/images/UI/preview@2x.png" style="width:100%">
        <div class="content">
            <img src="../../static/images/UI/01@2x.png" class="img-title">
            <div class="clear table-head">
                <div class="fl" style="width:60px;">颜色</div>
                <div class="fl" style="width:70px;padding-left:20px;">色值</div>
                <div class="fl" style="width:calc(100% - 150px);">使用场景</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#555;"></div>
                <div class="fl color-val">#555555</div>
                <div class="fl scene" style="width:calc(100% - 150px);">标题、主要文字</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#888;"></div>
                <div class="fl color-val">#888888</div>
                <div class="fl scene" style="width:calc(100% - 150px);">大部分文字、图标</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#ccc;"></div>
                <div class="fl color-val">#cccccc</div>
                <div class="fl scene" style="width:calc(100% - 150px);">提示文字、无效按钮</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#ddd;"></div>
                <div class="fl color-val">#dddddd</div>
                <div class="fl scene" style="width:calc(100% - 150px);">线、框</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#f4f4f4;"></div>
                <div class="fl color-val">#f4f4f4</div>
                <div class="fl scene" style="width:calc(100% - 150px);">灰底</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#94c0bc;"></div>
                <div class="fl color-val">#94c0bc</div>
                <div class="fl scene" style="width:calc(100% - 150px);">主色调、按钮、待评价</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#e3ebea;"></div>
                <div class="fl color-val">#e3ebea</div>
                <div class="fl scene" style="width:calc(100% - 150px);">未设置头像时头像底色</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#cc9c5c;"></div>
                <div class="fl color-val">#cc9c5c</div>
                <div class="fl scene" style="width:calc(100% - 150px);">实付款后的金额、待付款</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#98bbe3;"></div>
                <div class="fl color-val">#98bbe3</div>
                <div class="fl scene" style="width:calc(100% - 150px);">已付款</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;height:20px;background:#d10000;"></div>
                <div class="fl color-val">#d10000</div>
                <div class="fl scene" style="width:calc(100% - 150px);">已收藏、标注、优惠券已过期</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:58px;height:18px;background:#ffffff;border:1px solid #DDD;"></div>
                <div class="fl color-val">#ffffff</div>
                <div class="fl scene" style="width:calc(100% - 150px);">#ffffff</div>
            </div>
            <img src="../../static/images/UI/02@2x.png" class="img-title mt-40">
            <div class="clear table-head">
                <div class="fl" style="width:60px;">样式</div>
                <div class="fl" style="width:60px;padding-left:20px;">字号</div>
                <div class="fl" style="width:calc(100% - 140px);text-align:left;">使用场景</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;font-size:18px;">标准字</div>
                <div class="fl font-size">18px</div>
                <div class="fl scene" style="width:calc(100% - 140px);">应用于每个页面顶栏的主标题</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;font-size:16px;">标准字</div>
                <div class="fl font-size">16px</div>
                <div class="fl scene" style="width:calc(100% - 140px);">应用于商品名称/文章主标题/主要内容/首页导航栏</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;font-size:14px;">标准字</div>
                <div class="fl font-size">14px</div>
                <div class="fl scene" style="width:calc(100% - 140px);">应用于文章内容/商品介绍/按钮/输入框/弹窗/其他</div>
            </div>
            <div class="clear table-row">
                <div class="fl color" style="width:60px;font-size:12px;">标准字</div>
                <div class="fl font-size">12px</div>
                <div class="fl scene" style="width:calc(100% - 140px);">应用于提示信息/其他</div>
            </div>
            <img src="../../static/images/UI/03@2x.png" class="img-title mt-40">
            <div class="btn-box">
                <p class="mt-20">常规按钮</p>
                <div>
                    <img src="../../static/images/UI/280px@2x.png" style="width:calc(50% - 20px);">
                </div>
                <div class="clear">
                    <div class="fl w_50">
                        <div class="btn-default" style="width:calc(100% - 20px);">Add</div>
                        <img src="../../static/images/UI/40px@2x.png" style="height:20px;">
                        <p style="font-size:12px;margin-right:20px;">颜色#94c0bc，字号14px，文字上下左右居中</p>
                    </div>
                    <div class="fl w_50">
                        <div class="btn-white" style="width:calc(100% - 20px);margin-left:20px;">Add</div>
                        <p style="font-size:12px;margin-left:20px;">描边#dddddd，文字#888888，字号14px</p>
                    </div>
                </div>
                <p class="mt-20">弹窗按钮</p>
                <div class="clear" style="padding-bottom:10px;border-bottom:1px solid #D8D8D8;">
                    <div>
                        <img src="../../static/images/UI/190px@2x.png" style="width:96px;margin-right:40px;">
                        <img src="../../static/images/UI/80px@2x.png" style="width:41px;">
                    </div>
                    <div class="fl" style="width:140px;">
                        <div class="btn-default" style="width:96px;">Add</div>
                        <img src="../../static/images/UI/40px@2x.png" style="height:20px;">
                    </div>
                    <div class="fl" style="width:40px;">
                        <div class="btn-default" style="width:100%;">Add</div>
                    </div>
                    <div class="fl" style="width:40px; margin-left:20px;">
                        <div class="btn-disabled" style="width:100%;">Add</div>
                    </div>
                </div>
            </div>
            <div class="clear mt-10">
                <div class="fl" style="color:#F1B84B;font-size:12px;">备注：</div>
                <div class="fl" style="width:calc(100% - 50px);color:#333;font-size:12px;">
                弹窗内只有一个按钮时，按钮的宽度为190px 按钮不可点击时，按钮的颜色为#cccccc</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name:'uiDesign',
	components:{

	},
	data(){
		return{
            show10:false
		}
	},
	methods:{

	},
	created(){},
	mounted(){},
}
</script>

<style lang='less' scoped>
.uiDesign{
    .content{
        padding:20px;
        background:#fff;
        .btn-box{
            color:#333;
            font-size:12px;
            .btn-default{
                height:20px;
                line-height:20px;
                background:#94C0BC;
                text-align:center;
                color:#fff;
                font-size:12px;
                font-weight:lighter;
                display:inline-block;
            }
            .btn-white{
                height:18px;
                line-height:18px;
                border:1px solid #DDDDDD;
                text-align:center;
                color:#888888;
                font-size:12px;
                font-weight:lighter;
            }
            .btn-disabled{
                height:20px;
                line-height:20px;
                background:#CCCCCC;
                text-align:center;
                color:#fff;
                font-size:12px;
                font-weight:lighter;
                display:inline-block;
            }
        }
        .img-title{
            display:block;
            height:30px;
        }
        .table-head{
            line-height:30px;
            border-bottom:1px solid #D8D8D8;
            margin-top:15px;
            color:#333333;
            font-size:14px;
        }
        .table-row{
            line-height:20px;
            margin-top:10px;
            font-size:12px;
            color:#333;
            .color-val{
                padding-left:20px;
                box-sizing:border-box;
                width:90px;
            }
            .font-size{
                padding-left:20px;
                box-sizing:border-box;
                width:80px;
            }
        }
    }
    .header{
        height:110px;
        background:url('../../static/images/UI/bg@2x.png');
        background-size:cover;
        background-position:50%;
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
        }
    }
}
</style>