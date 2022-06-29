<script>
import {useRoute} from "vue-router";
import PageTitle from "@/components/ui/PageTitle.vue";
import instance from "@/api/axios";
import routes from "@/api/routes";
import AppH2 from "@/components/ui/typo/AppH2.vue";
import MenuCard from "@/components/restaurants/MenuCard.vue";
import AppDivider from "@/components/ui/AppDivider.vue";
import ArticleCard from "@/components/restaurants/ArticleCard.vue";

export default {
    name: "RestaurantDetails",
    components: {ArticleCard, AppDivider, MenuCard, AppH2, PageTitle},
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
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <MenuCard v-for="menu in restaurant.menus" :key="menu._id" :menu="menu" :restaurant="restaurant" />
        </div>
        <AppDivider />
        <AppH2>Articles</AppH2>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ArticleCard v-for="article in restaurant.articles" :key="article._id" :article="article" :restaurant="restaurant" />
        </div>
    </div>
</template>


<style scoped>

</style>