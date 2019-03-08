<template>
	<div class="uiDesign">
        <div class="header">
            <div class="menu-icon" @click="show10=true"></div>
            <div class="text align-center">
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
    .header{
        height:110px;
        background:url('../../static/images/UI/bg@2x.png');
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
        }
    }
}
</style>