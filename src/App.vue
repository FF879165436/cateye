<template>
  <div id="app">
		<!-- <Home-com v-if="flag == 0"/>
		<Movie-com v-if="flag == 1"/>
		<My-com v-if="flag == 2"/>
		<Footer-com @handleFl="toggle"/> -->
		<Component :is="com"></Component>
		<Footer-com @handleFl="toggle"/>
  </div>
</template>

<script>
	import Footer from "./components/footer";
	import Home from "./components/home";
	import Movie from "./components/movie";
	import My from "./components/my";
export default {
  components:{
		"Footer-com":Footer,
		"Home-com":Home,
		"Movie-com":Movie,
		"My-com":My,
	},
	data(){
		return{
			com:"Home-com"
		}
	},
	methods:{
		toggle(params){
			// this.flag = params
			switch(params){
				case 0:
					this.com = "Home-com";
					break;
				case 1:
					this.com = "Movie-com";
					break;
				case 2:
					this.com = "My-com";
					break;
			}
		}
	}
}
</script>

<style>
	#app{
		width:100%;
		height:100%;
	}

</style>
