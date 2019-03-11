<template>
	<div class="gyHeader">
        <div v-transfer-dom>
            <popup v-model="value" position="top" height="100%" style="z-index:2000;"> 
                <div class="gy-menu-box">
                    <div class="icon-close" @click="handleValue"></div>
                    <div class="menu-item" @click="handleRoute('/firstPage')">发展历程</div>
                    <div class="menu-item" @click="handleRoute('/technologyStack')">技术栈</div>
                    <div class="menu-item" @click="handleRoute('/uiDesign')">UI设计规范</div>
                    <div class="menu-item" @click="handleRoute('/product')">产品交付</div>
                    <div class="menu-item" @click="handleRoute('/casePresentation')">案例展示</div>
                    <div class="menu-item" @click="handleRoute('/dingzhi')">解决方案</div>
                </div>
            </popup>
        </div>
    </div>
</template>

<script>
import { TransferDom,Popup } from 'vux'
import router from '@/router'
export default {
	name:'gyHeader',
	components:{
        Popup
	},
    directives: {
        TransferDom
    },
    props:{
        value:{
            type:Boolean,
        }
    },
	data(){
		return{

		}
	},
	methods:{
        handleRoute(route){
            router.push({path:route})
        },
        handleValue(){
            this.$emit('input', false)
        },
	},
	created(){},
	mounted(){},
}
</script>

<style lang='less'>
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