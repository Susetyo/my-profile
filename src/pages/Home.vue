<template>
	<layout-default>
    <v-container
      class="pa-2"
      fluid
      grid-list-md>

      <v-layout>
        <v-flex
          v-for="(item, i) in items"
          :key="i"
          xs4
        >

          <v-card>
            
            <v-list-item three-line>

              <v-list-item-content class="align-self-start">

                <v-list-item-title
                  class="headline mb-2"
                  v-text="item.title"
                ></v-list-item-title>

                <v-list-item 
                style="padding-left: 0px; font-size: 13px; text-align: justify;">
                	Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Ruby,Ruby on Rails, JavaScript, Vue.js and Node.js.
                </v-list-item>

              </v-list-item-content>

              <v-list-item-avatar
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>

            </v-list-item>

            <v-card-actions>
            	
            	<v-tooltip bottom>
            		<template v-slot:activator="{ on }">
		            	<v-btn text>
		            		<v-icon @click="shareLink('linkedin')">{{ icons.mdiLinkedin }}</v-icon>
		            	</v-btn>
		            </template>
	            	<span>Hello</span>
	            </v-tooltip>

				<v-btn text>
					<v-icon @click="shareLink('fb')">{{ icons.mdiFacebook }}</v-icon>
				</v-btn>
				<v-btn text>
					<v-icon @click="shareLink('git')">{{ icons.mdiGit }}</v-icon>
				</v-btn>
	    
		    </v-card-actions>

          </v-card>

					<v-card
						style="margin-top:10px;"
				    class="mx-auto"
				    tile
					  >
					    <v-list-item>
					      <v-list-item-content>
				        	<v-list-item-title>Experience</v-list-item-title>
					      </v-list-item-content>
					    </v-list-item>

					    <v-list-item two-line>
					      <v-list-item-content>
					        <v-list-item-title>Front End Developer</v-list-item-title>
					        <v-list-item-subtitle>kiosTix.com</v-list-item-subtitle>
					        <v-list-item-subtitle>
					          Feb 2019 - Present
					        </v-list-item-subtitle>
					      </v-list-item-content>
					    </v-list-item>

					    <v-list-item three-line>
					      <v-list-item-content>
					        <v-list-item-title>Full Stack Developer</v-list-item-title>
					        <v-list-item-subtitle>
					          PT. Arta Piranti Indokreasi
					        </v-list-item-subtitle>
					        <v-list-item-subtitle>
					        	Sep 2018 - Feb 2019
					        </v-list-item-subtitle>
					      </v-list-item-content>
					    </v-list-item>

					    <v-list-item four-line>
					      <v-list-item-content>
					        <v-list-item-title>Ruby on Rails Developer</v-list-item-title>
					        <v-list-item-subtitle>
					          PT. Dutakom Wibawa Putra (D~NET)
					        </v-list-item-subtitle>
					        <v-list-item-subtitle>
					        	Sep 2017 - Feb 2018
					        </v-list-item-subtitle>
					      </v-list-item-content>
					    </v-list-item>
					  
					  </v-card>

        </v-flex>

        <v-flex xs8>

         	<v-layout column>		        
			      <v-flex
		          v-for="(item, i) in skills"
		          :key="i"
		          xs4>
			          <v-card>
			            
			            <v-list-item three-line>

			              <v-list-item-content class="align-self-start">
			                <v-list-item-title class="headline mb-2" v-text="item.title"></v-list-item-title>
			                <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>

       								<progress-bar :value="item.bar" />
			              </v-list-item-content>

			              <v-list-item-avatar size="125" tile>
			                <v-img :src="item.src"></v-img>
			              </v-list-item-avatar>

			            </v-list-item>

			          </v-card>
		        	</v-flex>
	       		</v-layout>
        </v-flex>

      </v-layout>



    </v-container>
	</layout-default>
</template>
<script>
import LayoutDefault from '../layouts/LayoutDefault';
import ProgressBar from '../components/shared/ProgressBar';
import {
		mdiFacebook,
  mdiLinkedin,
  mdiAt,
  mdiGit
} from '@mdi/js';

export default{
	name: 'Home',
	data(){
		return{
			valueDeterminate: 50,
	    icons: {
				mdiFacebook,
	      mdiLinkedin,
	      mdiAt,
	      mdiGit
	    },
			show: false,
		  items: [
		    {
		      color: '#1F7087',
		      src: 'https://media.licdn.com/dms/image/C5103AQEaVIyGyxMOHQ/profile-displayphoto-shrink_200_200/0?e=1570060800&v=beta&t=GQ1aWlvMjzuwB4Z1jWxOi_SAOIZVIDttGezOZCWpXH8',
		      title: 'Susetyo Mulia Pambudi',
		      artist:'asdasdasdasdasdasdas'
		    },
		  ],
		  skills: [
		    {
		      color: '#1F7087',
		      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKWHAtuiF6Are9RN7DvFnLAIupgnkh0QOhtE3upzS6nW-PB31',
		      title: 'JavaScript',
		      artist:`'Two JavaScript developers walked into the variable bar. Ouch!'`,
		    	bar: '100%'
		    },
		    {
		      color: '#1F7087',
		      src: 'https://miro.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg',
		      title: 'Vue Js',
		      artist:`'Vue js make you'r life easy, right???`,
		    	bar: '80%'
		    },
		    {
		      color: '#1F7087',
		      src: 'https://www.petanikode.com/img/nodejs/nodejs.png',
		      title: 'Node Js',
		      artist:`'Why was the JavaScript developer sad?. Because he didn’t Node how to Express himself'`,
		      bar: '80%'
		    },
		  ],
		}
	},
	components:{
		ProgressBar
	},
	created(){
		this.$emit('update:layout', LayoutDefault);
	},
	methods:{
		shareLink(type){
			if(type === "linkedin")
				window.open('https://www.linkedin.com/in/susetya-mulia-pambudi/', '_blank');
			if(type === "git")
				window.open('https://github.com/Susetyo', '_blank');
			if(type === "fb")
				window.open('https://www.facebook.com/SMuliaPambudi', '_blank');
			
		}
	}
}
</script>