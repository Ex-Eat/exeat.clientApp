<script>
import AppH4 from "../ui/typo/AppH4.vue";

export default {
    name: "MenuCard",
    components: {AppH4},
    props: {
        menu: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="shadow-md rounded">
        <div class="p-2">
            <AppH4>{{ menu.name }}</AppH4>
        </div>
    </div>
</template>

<style scoped>

</style>