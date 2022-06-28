<script lang="ts">
import PageTitle from "@/components/ui/PageTitle.vue";
import RestaurantGrid from "@/components/restaurants/RestaurantGrid.vue";

export default {
    name: 'RestaurantView',
    components: {RestaurantGrid, PageTitle},
}
</script>

<template>
    <PageTitle>Restaurants</PageTitle>
    <div class="mt-10 px-[10vw]">
        <RestaurantGrid />
    </div>
</template>
