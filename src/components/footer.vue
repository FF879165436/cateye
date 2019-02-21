<template>
	<div id="foot">
		<ul>
			<li v-for="(item,index) in tabBar">
				<a href="##" @click="handleFlag(index)">
					<i class="iconfont" v-html="item.icon"></i>
					<span>{{item.text}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return{
			tabBar:[
				{
					icon:"&#xe679;",
					text:"首页",
				},
				{
					icon:"&#xe61d;",
					text:"影院",
				},
				{
					icon:"&#xe64f;",
					text:"我的",
				}
			]
		}
	},
	methods:{
		handleFlag(index){
			this.$emit("handleFl",index)
		}
	}
}
</script>

<style>
	#foot{
		width:100%;
		height:.98rem;
		border-top:2px solid #cdcdcd;
		background:#fff;
		position:fixed;
		bottom:0;
		left:0;
	}
	#foot>ul{
		width:100%;
		height:100%;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	#foot>ul>li,#foot>ul>li>a{
		width:100%;
		height:100%;
		
	}
	#foot>ul>li>a{
		display:flex;
		flex-direction:column;
		justify-content:space-around;
		align-items:center;
	}
	#foot>ul>li>a>i{
		font-size:.32rem;
	}
	#foot>ul>li>a>span{
		font-size:.28rem;
	}
</style>