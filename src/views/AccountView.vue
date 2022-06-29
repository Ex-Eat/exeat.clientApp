<script>
import {useUserStore} from "@/stores/user.store";
import {storeToRefs} from "pinia";
import instance from "../api/axios";
import PageTitle from "@/components/ui/PageTitle.vue";
import routes from "@/api/routes";

export default {
    name: "AccountView",
    components: {PageTitle},
    setup() {
        const userStore = useUserStore();
        const {user, client} = storeToRefs(userStore);

        return {
            userStore,
            user,
            client
        }
    },
}
</script>

<template>
    <PageTitle>Mon profil - {{ client?.firstName }} {{ client?.lastName }}</PageTitle>
</template>

<style scoped>

</style>