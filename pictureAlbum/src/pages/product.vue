<template>
	<div class="product">
        <div class="header">
            <div class="menu-icon" @click="show10=true"></div>
            <div class="text align-center">
            </div>
        </div>
        <div class="content">
            <div class="title clear">
                <div class="fl triangle-icon"></div>
                <div class="fl title-text">交付项目材料</div>
            </div>
            <div class="clear material mt-20">
                <div class="fl w_50">
                    <p>
                        <span class="small-icon" style="background:url('../../static/images/product/icon1@2x.png');background-size:cover;background-position:50%;"></span>
                        项目账号资料
                    </p>
                    <p class="mt-20">
                        <span class="small-icon" style="background:url('../../static/images/product/test@2x.png');background-size:cover;background-position:50%;"></span>
                        测试文档
                    </p>
                    <p class="mt-20">
                        <span class="small-icon" style="background:url('../../static/images/product/word@2x.png');background-size:cover;background-position:50%;"></span>
                        技术文档
                    </p>
                    <p class="mt-20">
                        <span class="small-icon" style="background:url('../../static/images/product/explain@2x.png');background-size:cover;background-position:50%;"></span>
                        后天系统使用指导
                    </p>
                </div>
                <div class="fl w_50">
                    <p>
                        <span class="small-icon" style="background:url('../../static/images/product/icon2@2x.png');background-size:cover;background-position:50%;"></span>
                        项目设计图
                    </p>
                    <p class="mt-20">
                        <span class="small-icon" style="background:url('../../static/images/product/prototype@2x.png');background-size:cover;background-position:50%;"></span>
                        项目原型图
                    </p>
                    <p class="mt-20">
                        <span class="small-icon" style="background:url('../../static/images/product/mind@2x.png');background-size:cover;background-position:50%;"></span>
                        项目思维导图
                    </p>
                    <p class="mt-20">
                        <span class="small-icon" style="background:url('../../static/images/product/code@2x.png');background-size:cover;background-position:50%;"></span>
                        项目源码
                    </p>
                </div>
            </div>
            <div class="title clear mt-40">
                <div class="fl triangle-icon"></div>
                <div class="fl title-text">交付流程</div>
            </div>
            <div class="process">
                <div class="process-card">
                    <h1 style="color:#FFAA66;">产品经理</h1>
                    <p style="background:#FFCAA0;">项目通过内部质检测试<br>向客户发送验收单与项目测试地址</p>
                </div>
                <div class="line"></div>
                <div class="process-card">
                    <h1 style="color:#86D864;">客户</h1>
                    <p style="background:#B8E9A4;">确认可进行验收<br>验收单加盖公章寄回</p>
                </div>
                <div class="line"></div>
                <div class="process-card">
                    <h1 style="color:#76D7D7;">产品经理</h1>
                    <p style="background:#A0E0E0;">验收单与项目资料存档</p>
                </div>
                <div class="line"></div>
                <div class="process-card">
                    <h1 style="color:#8097CC;">业务经理</h1>
                    <p style="background:#A4B9E9;">提供项目发票等待项目尾款</p>
                </div>
                <div class="line"></div>
                <div class="process-card">
                    <h1 style="color:#BA80D3;">客户</h1>
                    <p style="background:#D4A4E9;">获得源代码与全部项目资料<br>项目部署上线</p>
                </div>
            </div>
        </div>
        <gyHeader v-model="show10"></gyHeader>
    </div>
</template>

<script>
import gyHeader from '@/components/gyHeader'
export default {
	name:'',
	components:{
        gyHeader
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
.product{
    .content{
        background:#fff;
        padding:20px;
        .process{
            padding:20px 20%;
            text-align:center;
            .process-card{
                box-shadow:0 0 5px 5px #f0f0f0;
                border-radius:4px;
                background:#F9FAFA;
                text-align:center;
                margin-top:-5px;
                h1{
                    line-height:40px;
                    font-size:14px;
                }
                p{
                    font-size:12px;
                    line-height:16px;
                    color:#fff;
                    padding:14px 0;
                }
            }
            .line{
                height:40px;
                display:inline-block;
                width:1px;
                border-right:1px solid #D8D8D8;
            }
        }
        .title{
            .triangle-icon{
                width:10px;
                height:10px;
                background:url('../../static/images/technology/mark@2x.png');
                background-size:100%;
                margin:6px 10px 6px 0;
            }
            .title-text{
                line-height:22px;
                font-size:16px;
            }
            
        }
        .material{
            line-height:20px;
            font-size:14px;
            color:#333;
            p{
                white-space :nowrap;
                text-overflow :ellipsis ;
                overflow:hidden;
            }
            .small-icon{
                display:inline-block;
                height:20px;
                width:20px;
                margin-right:10px;
                margin-bottom:-5px;
            }
        }
    }
    .header{
        height:110px;
        background:url('../../static/images/product/bg@2x.png');
        background-size:cover;
        background-position:50%;
        position:relative;
        padding-top:30px;
        .menu-icon{
            width:18px;
            height:14px;
            background:url('../../static/images/product/select@2x.png');
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