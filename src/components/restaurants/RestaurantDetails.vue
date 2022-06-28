<script>
import {useRoute} from "vue-router";
import PageTitle from "@/components/ui/PageTitle.vue";
import instance from "@/api/axios";
import routes from "@/api/routes";
import AppH2 from "@/components/ui/typo/AppH2.vue";
import MenuCard from "@/components/restaurants/MenuCard.vue";

export default {
    name: "RestaurantDetails",
    components: {MenuCard, AppH2, PageTitle},
    async setup() {
        const route = useRoute();

        const response = await instance.get(`${routes.ALL_RESTAURANTS}/${route.params.id}`);
        const restaurant = response.data;

        return {
            restaurant
        }
    }
}
</script>

<template>
    <PageTitle>{{ restaurant.name }}</PageTitle>
    <div class="my-10 px-[10vw]">
        <AppH2>Menus</AppH2>
        <div class="grid grid-cols-3 gap-5">
            <MenuCard v-for="menu in restaurant.menus" :key="menu._id" :menu="menu" />
        </div>
    </div>
</template>


<style scoped>

</style>