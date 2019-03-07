<template>
	<div class="firstPage">
        <div class="header">
            <div class="menu-icon"></div>
            <div class="text align-center">
                <h2>发展历程</h2>
                <p>
                    西柚的发展，是不断自我更迭、精益求精的过程。木欣欣以向荣，3年来，在众多西柚人的努力下，西柚蓬勃生长。在这过程中，我们坚持与客户的合作需要互惠共赢，相信客户成功即是
                </p>
            </div>
            
        </div>
    </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
	name:'',
	components:{
        XHeader,
        Actionsheet,
        ButtonTab,
        ButtonTabItem
	},
	data(){
		return{

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
}
</style>