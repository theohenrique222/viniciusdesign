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
                                <i
                                    class="pi pi-desktop text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
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
                                <i
                                    class="pi pi-face-smile text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
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