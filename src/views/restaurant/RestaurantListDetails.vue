<script>
import RestaurantDetails from "@/components/restaurants/RestaurantDetails.vue";

export default {
    name: "RestaurantViewDetails",
    components: {RestaurantDetails},
}
</script>

<template>
    <Suspense>
        <RestaurantDetails />
    </Suspense>
</template>


<style scoped>

</style>