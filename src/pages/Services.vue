<script setup>
const cards = [
    {
        id: 1,
        title: 'Estética Digital',
        text: 'A estética digital é construída com foco em impacto e coerência, garantindo que cores, tipografia e elementos visuais trabalhem juntos de forma estratégica.',
        imageUrl: "bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-1.jpg')]"
    },
    {
        id: 1,
        title: 'Experiência Visual',
        text: 'Cada elemento é cuidadosamente planejado para conduzir o olhar, facilitar a navegação e proporcionar uma experiência agradável do início ao fim.',
        imageUrl: "bg-[url('https://bracketweb.com/ogencywp/wp-content/uploads/2023/07/feature-2.jpg')]"
    },
    {
        id: 1,
        title: 'Design Estratégico',
        text: 'Desenvolvemos projetos que vão além do visual, utilizando o design como ferramenta para posicionar marcas e alcançar objetivos.',
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

                        <div
                            class="absolute -top-6 right-6 z-20 bg-amber-500 rounded-full shadow-lg">
                            <i class="pi pi-verified p-3 text-white" style="font-size: 2rem"></i>
                        </div>
                    </div>

                    <!-- Wrapper só pro texto -->
                    <div class="overflow-hidden">
                        <p class="text-sm text-neutral-300 mt-2 
                          opacity-0 translate-y-4 
                          group-hover:opacity-100 group-hover:translate-y-0 
                          transition-all duration-500">
                            {{ card.text || 'Design pensado para criar impacto visual e transmitir valor.' }}
                        </p>
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

    <section>

        <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20 text-center">
            <div class="flex flex-col gap-6">
                <div class="flex flex-col items-center gap-4">
                    <div class="font-bold text-3xl leading-tight">
                        <span class="text-surface-900 dark:text-surface-0">One Product, </span>
                        <span class="text-primary-500 dark:text-primary-400">Many Solutions</span>
                    </div>
                    <div class="text-surface-500 dark:text-surface-400 leading-tight">Ac turpis egestas maecenas
                        pharetra convallis posuere morbi leo urna.</div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="w-full rounded-md p-4">
                        <span
                            class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                            <i class="pi pi-desktop text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">
                                Built for Developers</div>
                            <p class="text-surface-500 dark:text-surface-400 leading-normal">Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div class="w-full rounded-md p-4">
                        <span
                            class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                            <i class="pi pi-lock text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">
                                End-to-End Encryption</div>
                            <p class="text-surface-500 dark:text-surface-400 leading-normal">Risus nec feugiat in
                                fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
                        </div>
                    </div>
                    <div class="w-full rounded-md p-4">
                        <span
                            class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                            <i class="pi pi-face-smile text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Easy
                                to Use</div>
                            <p class="text-surface-500 dark:text-surface-400 leading-normal">Ornare suspendisse sed
                                nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
                        </div>
                    </div>
                    <div class="w-full rounded-md p-4">
                        <span
                            class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                            <i class="pi pi-globe text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Fast
                                & Global Support</div>
                            <p class="text-surface-500 dark:text-surface-400 leading-normal">Fermentum et
                                sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
                        </div>
                    </div>
                    <div class="w-full rounded-md p-4">
                        <span
                            class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                            <i class="pi pi-github text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Open
                                Source</div>
                            <p class="text-surface-500 dark:text-surface-400 leading-normal">Nec tincidunt praesent
                                semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.
                            </p>
                        </div>
                    </div>
                    <div class="w-full rounded-md p-4">
                        <span
                            class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                            <i class="pi pi-shield text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                        </span>
                        <div class="flex flex-col gap-1">
                            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">
                                Trusted Security</div>
                            <p class="text-surface-500 dark:text-surface-400 leading-normal">Mattis rhoncus urna
                                neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</p>
                        </div>
                    </div>
                </div>
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