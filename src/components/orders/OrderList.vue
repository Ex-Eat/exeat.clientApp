<script>
import PageTitle from "@/components/ui/PageTitle.vue";
import AppH4 from "@/components/ui/typo/AppH4.vue";
import AppDivider from "@/components/ui/AppDivider.vue";
import instance from "@/api/axios";

export default {
    name: "OrderList",
    components: {AppDivider, AppH4, PageTitle},
    props: {
        client: {
            required: true
        }
    },
    data: () => ({
        orders: []
    }),
    watch: {
        client: async function(newValue, oldValue) {
            if (newValue?._id) {
                const response = await instance.get('order?client=' + newValue._id);
                this.orders = response.data;
            }
        }
    },
}
</script>

<template>
    <div class="flex flex-col">
        <div class="grid grid-cols-4 mt-4" v-for="order in orders" :key="order._id">
            <div>Numéro de commande</div>
            <div>Articles</div>
            <div>Prix</div>
            <div>Status</div>
        </div>
        <AppDivider />
        <div class="grid grid-cols-4" v-for="order in orders" :key="order._id">
            <div>n°{{ order._id }}</div>
            <div>{{ order.articles.length + order.menus.length }}</div>
            <div>{{ order.restaurantPrice }}€</div>
            <div>{{ order.status }}</div>
        </div>
    </div>
</template>

<style scoped>

</style>