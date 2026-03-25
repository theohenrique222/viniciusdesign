<script setup>
const cards = [
    {
        id: 1,
        title: 'Web Design',
        text: 'Modern UI/UX design for brands.',
        imageUrl: "bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-1.jpg')]"
    }
];

const repeted = [...cards, ...cards, ...cards];

const banners = [{
    id: 1,
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
}];

const bannersLoop = [...banners, ...banners, ...banners, ...banners, ...banners, ...banners, ...banners];
</script>
<template>
    <section class="bg-black text-white">

        <div class="flex text-center items-center rounded-2xl p-10">
            <div class="w-full h-0.5 bg-neutral-800"></div>
            <p class="w-full text-neutral-300"> 
                Eleve O Nível Da Sua Presença Digital
            </p>
            <div class="w-full h-0.5 bg-neutral-800"></div>
        </div>


        <div class="py-10 overflow-hidden bg-white">
            <div class="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] gap-32">
                <img v-for="banner in bannersLoop" :src="banner.url" :key="banner.id" class="h-10">
            </div>
        </div>


        <div class="container mx-auto grid lg:grid-cols-3 gap-10 px-10 pt-5">

            <div v-for="card in repeted" :key="card.id"
                class="h-72 border bg-cover  border-neutral-800 hover:border-orange-400 transition flex flex-col justify-end cursor-pointer"
                :class="card.imageUrl">
                <div class="bg-neutral-950 w-full text-center p-2">
                    <h3 class="text-2xl font-bold mb-4">
                        {{ card.title }}
                    </h3>
                    <p class="text-gray-400">
                        {{ card.text }}
                    </p>
                </div>

            </div>

        </div>

    </section>
    <section class="py-32 bg-black">

        <div class="container mx-auto grid lg:grid-cols-3 gap-6">

            <img src="" class="hover:scale-105 transition">
            <img src="" class="hover:scale-105 transition">
            <img src="" class="hover:scale-105 transition">

        </div>

    </section>
</template>

<style>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>