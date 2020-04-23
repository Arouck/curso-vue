<template>
    <v-app>
        <NavigationBar />

		<Toolbar />

		<v-content>
        	<Carousel />
		</v-content>

        <Footer />
    </v-app>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
	components: {
		Carousel,
	},
};
</script>
