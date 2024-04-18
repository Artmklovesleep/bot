<template>
    <ClientOnly>
        <UButton :icon="isDark
            ? 'i-heroicons-moon-20-solid'
            : 'i-heroicons-sun-20-solid'
            " color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark"
            class="absolute bottom-0 left-0 overflow-hidden z-20" />
    </ClientOnly>

    <slot />
    <UNotifications />
</template>

<script setup lang="ts">

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>

<style></style>
