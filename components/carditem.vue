<script setup>

defineProps({
    imagesrc: String,
    title: String,
    price: Number
})
</script>

<template>

    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none hover:opacity-75">
        <img :src="imagesrc" class="" />
    </div>
    <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-md font-bold ">
                <!-- <span aria-hidden="true" class="absolute inset-0" /> -->
                {{ title }}
            </h3>
        </div>
        <p class="text-md font-medium">${{ price }}</p>
    </div>

</template>