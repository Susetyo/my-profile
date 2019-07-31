<template>
	<layout-default>
	    <v-container
	      class="pa-2"
	      fluid
	      grid-list-md>
			<v-card class="mx-auto">

		    <v-system-bar 
		    	class="orange darken-1">
		    		
		    	</v-system-bar>

		    <v-toolbar
		      color="indigo"
		      dark
		    >
		      <v-app-bar-nav-icon></v-app-bar-nav-icon>

		      <v-toolbar-title>Kiostix Version Four</v-toolbar-title>

		      <v-spacer></v-spacer>
		    </v-toolbar>

		    <v-container
		      fluid
		      grid-list-md
		      pa-2
		    >
		      <v-layout
		        wrap
		      >
		        <v-flex
		          v-for="card in cards"
		          :key="card.title"
		          v-bind="{ [`xs${card.flex}`]: true }"
		        >
					<div class="v-card v-sheet theme--light" style="height: 400px;">
						<div class="v-responsive v-image white--text" style="height: 400px;">
							<div class="v-responsive__sizer" style="padding-bottom: 56.2121%;"></div>
							
							<div class="v-image__image v-image__image--cover" >
							
								<iframe 
									width="560" 
									height="400" 
									:src="card.src" 
									frameborder="0" 
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>		
								</iframe>

							</div>

						</div>
					</div>
		        </v-flex>
		      </v-layout>
		    </v-container>
		  </v-card>


		</v-container>

	</layout-default>
</template>
<script>
import LayoutDefault from '../layouts/LayoutDefault';
import {
	mdiShare,
  	mdiBookmark,
  	mdiFavorite,
  	mdiGit,
  	mdiSearch,
} from '@mdi/js';
export default {
	name: 'About',
  	created() {
		this.$emit('update:layout', LayoutDefault)
  	},
    data(){
    	return{
		    icons: {
				mdiShare,
			  	mdiBookmark,
			  	mdiFavorite,
			  	mdiGit,
			  	mdiSearch,
		    },
			cards: [
				{ title: 'Favorite road trips', src: 'https://www.youtube.com/embed/zj24Wprwygk', flex: 6 },
				{ title: 'Best airlines', src: 'https://www.youtube.com/embed/QMr6APBLclU', flex: 6 },
			],
		}
    }
}
</script>
<style scoped>
	.v-image__image iframe, .v-image__image object, .v-image__image embed {
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
	}
</style>