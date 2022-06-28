<script lang="ts">
import PageTitle from "@/components/ui/PageTitle.vue";
import RestaurantGrid from "@/components/restaurants/RestaurantGrid.vue";
import {useUserStore} from "@/stores/user.store";
import {storeToRefs} from "pinia";
import AppH2 from "@/components/ui/typo/AppH2.vue";

export default {
    name: 'HomeView',
    components: {AppH2, RestaurantGrid, PageTitle},
    setup() {
        const userStore = useUserStore();
        const {user} = storeToRefs(userStore)

        return {
            user
        }
    }
}
</script>

<template>
	<PageTitle>Bonjour {{ user?.username }}</PageTitle>
    <div class="mt-10 px-[10vw]">
        <RouterLink to="/restaurants">
            <AppH2>Restaurants</AppH2>
        </RouterLink>
        <RestaurantGrid />
    </div>
</template>
