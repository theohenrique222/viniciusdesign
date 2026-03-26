<script setup>
const cards = [
    {
        id: 1,
        title: 'Estética Digital',
        text: 'Estética digital com impacto e coerência visual.',
        imageUrl: "bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-1.jpg')]"
    },
    {
        id: 1,
        title: 'Experiência Visual',
        text: 'Cada detalhe conduz o olhar e torna a experiência mais fluida e agradável.',
        imageUrl: "bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-2.jpg')]"
    },
    {
        id: 1,
        title: 'Design Estratégico',
        text: 'Design que posiciona marcas e gera resultados.',
        imageUrl: "bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-2.jpg')]"
    }
];

const banners = [{
    id: 1,
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
}];

const bannersLoop = [...banners, ...banners, ...banners, ...banners, ...banners, ...banners, ...banners];
</script>
<template>
    <section id="services" class="bg-black text-white">

        <div class="flex text-center items-center rounded-2xl p-10">
            <div class="w-full h-0.5 bg-neutral-800"></div>
            <p class="w-full text-neutral-500 lg:text-base text-sm">
                Eleve o nível da sua presença digital
            </p>
            <div class="w-full h-0.5 bg-neutral-800"></div>
        </div>


        <div class="py-10 overflow-hidden ">
            <div class="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] gap-32">
                <!-- <img v-for="banner in bannersLoop" :src="banner.url" :key="banner.id" class="h-10"> -->

                <p class="font-extrabold text-2xl text-neutral-600">Design Moderno</p>
                <p class="font-extrabold text-2xl text-neutral-600">Experiências digitais</p>
                <p class="font-extrabold text-2xl text-neutral-600">Detalhes que encantam</p>
                <p class="font-extrabold text-2xl text-neutral-600">Visual que gera impacto</p>
                <p class="font-extrabold text-2xl text-neutral-600">Experiências que inspiram</p>
                <p class="font-extrabold text-2xl text-neutral-600">Criatividade que diferencia </p>
                <p class="font-extrabold text-2xl text-neutral-600">Harmonia em cada detalhe</p>

            </div>
        </div>


        <div class="container mx-auto grid lg:grid-cols-3 gap-10 px-10 py-20">

            <div v-for="card in cards" :key="card.id"
                class="h-72 border border-neutral-800 hover:border-orange-400 transition flex flex-col justify-end cursor-pointer relative overflow-visible group">

                <!-- Imagem (zoom controlado aqui) -->
                <div class="absolute inset-0 overflow-hidden">
                    <div class="w-full h-full bg-cover bg-center grayscale 
                       group-hover:grayscale-0 group-hover:scale-110 
                       transition duration-700" :class="card.imageUrl">
                    </div>
                </div>

                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                <!-- Card -->
                <div class="bg-neutral-950 p-4 m-4 relative z-10 
                    transition-all duration-500 
                    h-20 group-hover:h-44 
                    flex flex-col justify-between overflow-visible">

                    <!-- Topo -->
                    <div class="flex justify-between items-center">
                        <h3 class="text-2xl font-bold">
                            {{ card.title }}
                        </h3>

                        <div class="absolute -top-6 right-6 z-20 bg-amber-500 rounded-full shadow-lg">
                            <i class="pi pi-verified p-3 text-white" style="font-size: 2rem"></i>
                        </div>
                    </div>

                    <!-- Wrapper só pro texto -->
                    <div class="overflow-hidden">
                        <p class="text-sm text-neutral-300 
                          opacity-0 translate-y-4 font-extralight
                          group-hover:opacity-100 group-hover:translate-y-0 
                          transition-all duration-500 leading-5">
                            {{ card.text }}
                        </p>
                        <div class="h-px w-full bg-neutral-600 my-3"/>

                        
                        <a href="#">
                            <div class="flex items-center">
                                <div class="text-white hover:text-amber-500 flex p-2">
                                    <p class=" font-extrabold">
                                        Saiba mais  
                                    </p>
                                    <i class="pi pi-arrow-down-right font-extrabold hover:-rotate-45 transition duration-300 px-5 "></i>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

            </div>

        </div>

    </section>
    <section class="bg-black">

        <div class="py-10 overflow-hidden border-t border-neutral-800">
            <div class="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] gap-32">
                <!-- <img v-for="banner in bannersLoop" :src="banner.url" :key="banner.id" class="h-10"> -->

                <p class="font-extrabold text-white text-9xl">Criar</p>
                <p class="font-extrabold text-9xl text-white">Inovar</p>
                <p class="font-extrabold text-9xl text-amber-500">&</p>
                <p class="font-extrabold text-9xl text-white ">Impactar</p>

            </div>
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