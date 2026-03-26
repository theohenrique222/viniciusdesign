<template>
    <div class="bg-black text-white">
        <div class="w-full m-auto max-w-2xl px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left">
            <h3 class="font-extrabold text-7xl mb-6 text-center">
                Projetos em <span class="text-amber-500">Destaque</span>
            </h3>
            <p class="font-light uppercase tracking-widest text-neutral-500">
                Designs pensados para gerar impacto e resultados.
            </p>
        </div>

        <div class="w-full px-7 grid lg:grid-cols-3 justify-between gap-5">

            <div v-for="card in cards" class="flex flex-col">
                <Image :src="card.imageUrl" alt="Image" preview />
                <div class="pb-5">
                    <div class="flex w-full items-center gap-2 py-5">
                        <div class="h-px w-10 bg-amber-500" />
                        <span class="text-neutral-500 font-bold">
                            {{ card.title }}
                        </span>

                    </div>
                    <h3 class="text-white font-extrabold text-2xl">
                        {{ card.subtitle }}
                    </h3>
                    <div class="h-px w-full my-5 bg-neutral-700" />

                    <a href="#">
                        <div class="flex items-center">
                            <div class="text-neutral-500 hover:text-amber-500 flex p-2">
                                <p class=" font-extrabold">
                                    Saiba mais
                                </p>
                                <i
                                    class="pi pi-arrow-down-right font-extrabold hover:-rotate-45 transition duration-300 px-5 "></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
    const cards = [
        {
            id: 1,
            title: 'Lorem . ipsum',
            subtitle: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
        },
        {
            id: 1,
            title: 'Lorem . ipsum',
            subtitle: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
        },
        {
            id: 1,
            title: 'Lorem . ipsum',
            subtitle: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
        },
        {
            id: 1,
            title: 'Lorem . ipsum',
            subtitle: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
        },
        {
            id: 1,
            title: 'Lorem . ipsum',
            subtitle: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
        },
        {
            id: 1,
            title: 'Lorem . ipsum',
            subtitle: 'Lorem ipsum dolor sit amet',
            imageUrl: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
        },
    ]
</script>
