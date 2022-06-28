<script>
import AppH4 from "@/components/ui/typo/AppH4.vue";
import AppChip from "@/components/ui/AppChip.vue";
import AppDivider from "@/components/ui/AppDivider.vue";
import PinkButton from "@/components/ui/buttons/PinkButton.vue";

export default {
    name: "RestaurantsCard",
    components: {PinkButton, AppDivider, AppChip, AppH4},
    props: {
        restaurant: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="shadow-md rounded">
        <div class="p-2">
            <AppH4>{{ restaurant.name }}</AppH4>
            <div class="flex space-x-2 mt-2">
                <AppChip v-for="keyword in restaurant.keywords" :key="keyword">{{ keyword }}</AppChip>
            </div>
        </div>
        <img :src="restaurant.restaurantImage" :alt="restaurant.name">
        <div class="p-2">
            <p class="text-sm text-gray-600 max-h-24 overflow-hidden">{{ restaurant.description }}</p>
            <div class="flex justify-end mt-2">
                <RouterLink :to="'/restaurant/' + restaurant._id">
                    <PinkButton>Voir</PinkButton>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>