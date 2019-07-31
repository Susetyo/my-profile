import Vue from 'vue';
import VueRouter from 'vue-router';

const About = () => import(`../pages/About.vue`);
const Home = () =>  import(`../pages/Home.vue`);

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
  	{
  		path:`/`,
  		component: Home
  	},
  	{
  		path: `/home`,
  		name: `home`,
  		component: Home
  	},
    { 
    	path: `/portofolio`,
    	name: `portofolio`,
    	component: About
    },
  ],
  mode: `history`,
})



