<template>
  <div class="dropdown">
    <div class='dropdown-title' @click="handleDropDown">
      <span class='title'>{{titleName}}</span>
      <img src="../../static/images/icons/up@2x.png" alt="" :class="[rotate ? 'down':'up']" />
    </div>
    <div :class=" [rotate ? 'dropdowm-list-up dropdowm-list' : 'dropdowm-list-down dropdowm-list']" >
      <ul v-for="(item,index) in list" :key="item.title" >
        <li @click="handleSelect(item.title)" class='select-li'><router-link :to="{path:item.link}"
         :class="{active : titleName == item.title}" >{{item.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
    props: {
      isClose:Boolean,
      titleName: String,
      required: true
    },
  data () {
    return {
      myIndex:0,
      rotate:true,
      active:'商城系统',
      list:[{
        title:'商城系统',
        link:'/dingzhi'
      },{
        title:'现金贷系统解决方案',
        link:'/xianjin'
      },{
        title:'智慧医疗解决方案',
        link:'/zhihui'
      },{
        title:'社交解决方案',
        link:'/shejiao'
      },{
        title:'直播解决方案',
        link:'/zhibo'
      },{
        title:'法律服务解决方案',
        link:'/falv'
      },{
        title:'官网解决方案',
        link:'/guanwang'
      },{
        title:'O2O系统解决方案',
        link:'/o2o'
      },{
        title:'西柚微信小程序',
        link:'/xiyou'
      },{
        title:'智能硬件解决方案',
        link:'/zhineng'
      },{
        title:'西柚数据解决方案',
        link:'/xiyoudata'
      },{
        title:'在线教育解决方案',
        link:'/zaixian'
      },]
    }
  },
  methods: {
    handleDropDown(){
      this.rotate = !this.rotate
      if(!this.rotate){
        this.$emit('isRotate', this.rotate)
      }

    },
    handleSelect(name){
      this.active = name
    }
  },
  watch: {
    isClose(f){
      if(f == true){
        this.rotate = true
      }

    }
  },
}
</script>

<style scoped>
.active {
  color:rgb(34, 211, 255) !important;
}
.dropdowm-list-down{
  transition: all 0.4s;
  transform:translateY(0px);
}
.dropdowm-list-up{
  transition: all 0.4s;
  transform:translateY(-636px);
}
.dropdowm-list{
  position: absolute;
  width: 100%;
  top: 100%;
  background: white;
  z-index: 10;
  box-shadow: 0px 1px 10px #dfdfdf;

}
.dropdowm-list li{
  border-bottom: 1px solid #DDDDDD;
  padding: 15px 0;
  width: 78.6%;
  margin: 0 auto;
}
.dropdown a{
  color: #333333;
  font-size: 12px;
}
.select-style{
  font-size: 12px;
  color: #666666;
}
.up{
  transition: all 0.3s; 
  transform:rotate(0deg);

}
.down{
  transition: all 0.3s; 
  transform:rotate(180deg);
}
.dropdown-title{
  position: relative;
  padding: 15px 5%;
  z-index: 999;
  box-shadow: 0px 5px 10px #f0f0f0;
  background: white;
}
.dropdown-title>span{
  /* float: left; */
  vertical-align: middle;
}
.dropdown-title>img{
  /* float: right; */
  position: absolute;
  right: 5%;
  /* height: 50%; */
  top:40%;
  vertical-align: middle;
  width: 3.5%;
}
.dropdown{
  background: white;
  position: relative;
}
.title{
  font-size:20px;
  color: #333333;
  font-weight:600;
}
</style>
