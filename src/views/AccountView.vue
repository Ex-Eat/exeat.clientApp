<script>
import {useUserStore} from "@/stores/user.store";
import {storeToRefs} from "pinia";
import instance from "../api/axios";
import PageTitle from "@/components/ui/PageTitle.vue";
import routes from "@/api/routes";
import AppH4 from "@/components/ui/typo/AppH4.vue";
import AppDivider from "@/components/ui/AppDivider.vue";
import {format} from 'date-fns'
import OrderList from "@/components/orders/OrderList.vue";

export default {
    name: "AccountView",
    components: {OrderList, AppDivider, AppH4, PageTitle},
    setup() {
        const userStore = useUserStore();
        const {user, client} = storeToRefs(userStore);

        return {
            userStore,
            user,
            client,
            format
        }
    },
}
</script>

<template>
    <PageTitle>Mon profil - {{ client?.firstName }} {{ client?.lastName }}</PageTitle>
    <div class="grid grid-cols-4 gap-5 my-10 mx-[10vw]">
        <div>
            <AppH4>Mes informations personnelles</AppH4>
            <AppDivider />
            <div class="flex flex-col" v-if="user && client">
                <p>Email: {{ user.email }}</p>
                <p>Adresse: {{ client.locations?.address }}</p>
            </div>
        </div>
        <div class="col-span-3">
            <AppH4>Mes commandes</AppH4>
            <Suspense>
                <OrderList :client="client" />
            </Suspense>
        </div>
    </div>
</template>

<style scoped>

</style>