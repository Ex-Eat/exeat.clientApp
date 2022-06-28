<script>
import {useRestaurantStore} from "@/stores/restaurant.store";
import {storeToRefs} from "pinia/dist/pinia";
import RestaurantsCard from "@/components/restaurants/RestaurantsCard.vue";

export default {
    name: 'RestaurantGrid',
    components: {RestaurantsCard},
    setup() {
        const restaurantStore = useRestaurantStore();
        const {restaurants} = storeToRefs(restaurantStore);

        restaurantStore.getRestaurants();

        return {
            restaurants
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-5 mt-4">
        <RestaurantsCard v-for="restaurant in restaurants" :key="restaurant._id" :restaurant="restaurant" />
    </div>
</template>

<style scoped>

</style>